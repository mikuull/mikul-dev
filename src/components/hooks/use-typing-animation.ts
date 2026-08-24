"use client";
import { useEffect, useState } from "react";

export const useTypingAnimation = (
  text: string,
  speed = 100,
  startDelay = 0,
) => {
  const [displayedText, setDisplayedText] = useState("");
  const [isStarted, setIsStarted] = useState(false);

  useEffect(() => {
    const startTimer = setTimeout(() => {
      setIsStarted(true);
    }, startDelay);

    return () => clearTimeout(startTimer);
  }, [startDelay]);

  useEffect(() => {
    if (!isStarted) return;

    let i = 0;
    let isDeleting = false;
    let timer: NodeJS.Timeout;

    const handleTyping = () => {
      if (!isDeleting) {
        if (i <= text.length) {
          setDisplayedText(text.substring(0, i));
          i++;
          timer = setTimeout(handleTyping, speed);
        } else {
          timer = setTimeout(() => {
            isDeleting = true;
            handleTyping();
          }, 3000);
        }
      } else {
        if (i >= 0) {
          setDisplayedText(text.substring(0, i));
          i--;
          timer = setTimeout(handleTyping, speed / 2);
        } else {
          isDeleting = false;
          timer = setTimeout(handleTyping, 500);
        }
      }
    };

    timer = setTimeout(handleTyping, speed);

    return () => clearTimeout(timer);
  }, [text, speed, isStarted]);

  return displayedText;
};
