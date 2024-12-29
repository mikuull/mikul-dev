import { Tag } from "@/features/core/components/tag";
import React from "react";
import { MdEmail } from "react-icons/md";
import { FaPhone } from "react-icons/fa6";

export const Contact = () => {
  return (
    <section className="py-36" id="#contact">
      <div className="flex flex-col items-center space-y-8">
        <Tag text="📨 Contact" variant="purple" size="large" />
        <p className="text-5xl font-extrabold">Let's talk!</p>
        <div className="flex flex-col space-y-6">
          <div className="flex items-center space-x-3 px-3 py-1 border border-main rounded-2xl bg-purplebg">
            <MdEmail className="text-main" size={28} />
            <p className="text-lg font-semibold">mmikulski643@gmail.com</p>
          </div>
          <div className="flex items-center space-x-3 px-3 py-1 border border-main rounded-2xl bg-purplebg">
            <FaPhone className="text-main" size={24} />
            <p className="text-lg font-semibold">+00 000 000 000</p>
          </div>
        </div>
      </div>
    </section>
  );
};
