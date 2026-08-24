"use client";

import { useTypingAnimation } from "./hooks/use-typing-animation";

export function CodeEditor() {
  const typedName = useTypingAnimation("Mateusz Mikulski", 240, 1000);
  const typedRole = useTypingAnimation("Full-stack Developer", 160, 3000);
  const typedStatus = useTypingAnimation("Ready for hire", 160, 5400);

  return (
    <div className="w-full max-w-md rounded-xl border border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-950/80 shadow-2xl backdrop-blur-sm overflow-hidden text-left font-mono text-xs">
      <div className="flex items-center justify-between px-4 py-3 border-b border-neutral-200 dark:border-neutral-800/80 bg-neutral-100/50 dark:bg-neutral-900/50">
        <div className="flex items-center gap-1.5">
          <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
          <span className="w-3 h-3 rounded-full bg-emerald-500/80 inline-block" />
        </div>
        <div className="text-[11px] text-neutral-400 dark:text-neutral-500 font-medium">
          mikuull.tsx
        </div>
        <div className="w-10" />
      </div>

      <div className="p-4 overflow-x-auto text-[13px] leading-relaxed flex text-neutral-700 dark:text-neutral-300">
        <div className="select-none pr-4 text-right text-neutral-400 dark:text-neutral-600 space-y-1">
          {Array.from({ length: 11 }).map((_, i) => (
            <div key={i}>{i + 1}</div>
          ))}
        </div>

        <div className="space-y-1 pl-2 border-l border-neutral-200 dark:border-neutral-800 w-full overflow-x-auto">
          <div>
            <span className="text-purple-600 dark:text-purple-400">const</span>{" "}
            <span className="text-blue-600 dark:text-blue-400">mikuull</span>{" "}
            <span className="text-neutral-500">=</span> {"{"}
          </div>
          <div className="pl-4">
            <span className="text-neutral-900 dark:text-neutral-200">
              name:
            </span>{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &quot;{typedName}&quot;
            </span>
            ,
          </div>
          <div className="pl-4">
            <span className="text-neutral-900 dark:text-neutral-200">
              role:
            </span>{" "}
            <span className="text-emerald-600 dark:text-emerald-400">
              &quot;{typedRole}&quot;
            </span>
            ,
          </div>
          <div className="pl-4">
            <span className="text-neutral-900 dark:text-neutral-200">
              stack:
            </span>{" "}
            [
            <span className="text-amber-600 dark:text-amber-400">
              &quot;Next.js&quot;
            </span>
            ,{" "}
            <span className="text-amber-600 dark:text-amber-400">
              &quot;TypeScript&quot;
            </span>
            ],
          </div>
          <div className="pl-4">
            <span className="text-neutral-900 dark:text-neutral-200">
              status:
            </span>{" "}
            <span className="text-emerald-500 font-semibold">
              &quot;{typedStatus}&quot;
            </span>
          </div>
          <div>{"}"};</div>
          <div>
            <span className="text-blue-600 dark:text-blue-400">export</span>{" "}
            <span className="text-purple-600 dark:text-purple-400">
              default
            </span>{" "}
            <span className="text-yellow-600 dark:text-yellow-400">
              developer
            </span>
            ;
          </div>
        </div>
      </div>
    </div>
  );
}
