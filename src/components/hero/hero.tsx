import Link from "next/link";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { ArrowRight, Sparkles } from "lucide-react";
import { CodeEditor } from "@/components/code-editor";

export function Hero() {
  return (
    <div className="relative flex flex-col justify-center min-h-[75vh] py-12 w-full">
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-16 items-center w-full">
        <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 w-full">
          <div className="flex items-center gap-4">
            <div className="relative w-16 h-16 rounded-full overflow-hidden border-2 border-neutral-200 dark:border-neutral-800 shadow-sm">
              <Image
                src="/avatar.png"
                alt="Mateusz Mikulski"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 text-xs font-medium rounded-full bg-neutral-200/60 dark:bg-neutral-800/60 text-neutral-800 dark:text-neutral-200 border border-neutral-300 dark:border-neutral-700 backdrop-blur-sm">
              <Sparkles className="w-3.5 h-3.5 text-emerald-500" />
              <span>Full-stack Developer & UI enthusiast</span>
            </div>
          </div>

          <h1 className="text-4xl sm:text-5xl xl:text-6xl font-bold tracking-tight text-neutral-900 dark:text-white w-full">
            Building digital products with{" "}
            <span className="text-emerald-500">precision</span> and speed.
          </h1>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 leading-relaxed w-full">
            Hi, I&apos;m Mateusz. Everyday I love building user-centric web
            applications using modern technologies like Next.js, TypeScript, and
            Tailwind CSS. Focused on clean architecture and top-tier user
            experience.
          </p>

          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button className="bg-neutral-900 dark:bg-white text-white dark:text-neutral-900 hover:bg-neutral-800 dark:hover:bg-neutral-100 font-medium shadow-sm transition-transform hover:scale-[1.02] p-0">
              <Link
                href="/projects"
                className="flex items-center gap-2 px-4 py-2 w-full h-full"
              >
                Explore Projects
                <ArrowRight className="w-4 h-4" />
              </Link>
            </Button>

            <Button
              variant="outline"
              className="border-neutral-300 dark:border-neutral-800 hover:bg-neutral-100 dark:hover:bg-neutral-900 bg-transparent transition-transform hover:scale-[1.02] p-0"
            >
              <Link
                href="/contact"
                className="px-4 py-2 w-full h-full flex items-center"
              >
                Get in Touch
              </Link>
            </Button>
          </div>
        </div>

        <div className="lg:col-span-5 flex justify-center lg:justify-end w-full">
          <CodeEditor />
        </div>
      </div>
    </div>
  );
}
