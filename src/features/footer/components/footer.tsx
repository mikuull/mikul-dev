import { HeaderIcons } from "@/features/header/components/header-icons";
import React from "react";

export const Footer = () => {
  return (
    <section className="py-20 flex justify-between items-center px-6 lg:px-20">
      <p className="text-lg font-semibold text-[#797979]">
        Copyright © Mateusz Mikulski · 2024
      </p>
      <HeaderIcons />
    </section>
  );
};
