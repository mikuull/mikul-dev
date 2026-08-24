"use client";

import Link from "next/link";
import { Moon, Sun } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { useTheme } from "next-themes";
import { useSyncExternalStore } from "react";
import Image from "next/image";
import { navigationLinks } from "@/data/navigation-links.data";

export function Sidebar() {
  const { theme, setTheme } = useTheme();

  const mounted = useSyncExternalStore(
    () => () => {},
    () => true,
    () => false,
  );

  return (
    <div className="flex flex-col h-full justify-between py-6 px-4">
      <div>
        <div className="flex items-center gap-3 mb-8 px-2">
          <div className="relative">
            <div className="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white">
              <Image
                src="/avatar.png"
                alt="Avatar"
                width={40}
                height={40}
                className="rounded-full"
              />
            </div>
            <span className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-emerald-500 rounded-full ring-2 ring-neutral-900" />
          </div>
          <div>
            <h2 className="font-semibold text-sm text-neutral-900 dark:text-white">
              Mateusz Mikulski
            </h2>
            <p className="text-xs text-neutral-500 dark:text-neutral-400">
              Full-stack Developer
            </p>
          </div>
        </div>

        <nav className="space-y-1">
          {navigationLinks.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2 rounded-lg text-sm font-medium text-neutral-600 dark:text-neutral-400 hover:text-neutral-900 dark:hover:text-white hover:bg-neutral-100 dark:hover:bg-neutral-800 transition-colors"
              >
                <Icon className="w-4 h-4" />
                {item.name}
              </Link>
            );
          })}
        </nav>
      </div>

      <div className="space-y-4 pt-4 border-t border-neutral-200 dark:border-neutral-800">
        <div className="px-2 flex items-center gap-2 text-xs text-neutral-600 dark:text-neutral-400 bg-neutral-100 dark:bg-neutral-900/80 py-1.5 rounded-md border border-neutral-200 dark:border-neutral-800/60">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span>Available for hire</span>
        </div>

        <div className="flex items-center justify-between px-2 text-neutral-600 dark:text-neutral-400">
          <div className="flex items-center gap-3">
            <a
              href="https://github.com/mikuull"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FaGithub className="w-4 h-4" />
            </a>
            <a
              href="https://www.linkedin.com/in/mateusz-mikulski-10a775313/"
              target="_blank"
              rel="noreferrer"
              className="hover:text-neutral-900 dark:hover:text-white transition-colors"
            >
              <FaLinkedin className="w-4 h-4" />
            </a>
          </div>

          <button
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="p-1.5 rounded-md hover:bg-neutral-200 dark:hover:bg-neutral-800 hover:text-neutral-900 dark:hover:text-white transition-colors cursor-pointer"
            title="Toggle theme"
          >
            {!mounted ? (
              <div className="w-4 h-4" />
            ) : theme === "dark" ? (
              <Sun className="w-4 h-4" />
            ) : (
              <Moon className="w-4 h-4" />
            )}
          </button>
        </div>

        <div className="px-2 text-[11px] text-neutral-400 dark:text-neutral-500 flex justify-between items-center">
          <span>© {new Date().getFullYear()} mikul.dev</span>
          <span className="text-neutral-400 dark:text-neutral-600">v1.0</span>
        </div>
      </div>
    </div>
  );
}
