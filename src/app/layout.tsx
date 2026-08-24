import type { Metadata } from "next";
import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import { cn } from "@/lib/utils";
import { Menu } from "lucide-react";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Sidebar } from "@/components/sidebar/sidebar";
import { AppProvider } from "@/providers/app-provider";

const inter = Inter({ subsets: ["latin"], variable: "--font-sans" });

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "mikul.dev - Full-stack Developer",
  description: "mikul.dev",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={cn(
        "h-full",
        "antialiased",
        geistSans.variable,
        geistMono.variable,
        "font-sans",
        inter.variable,
      )}
    >
      <body className="min-h-full flex flex-col bg-neutral-50 dark:bg-neutral-950 text-neutral-900 dark:text-neutral-100">
        <AppProvider>
          <div className="flex min-h-screen">
            <aside className="hidden md:block w-64 border-r border-neutral-200 dark:border-neutral-800 bg-white/50 dark:bg-neutral-900/50 sticky top-0 h-screen">
              <Sidebar />
            </aside>
            <div className="flex-1 flex flex-col min-w-0">
              <header className="md:hidden flex items-center justify-between px-4 h-16 border-b border-neutral-200 dark:border-neutral-800 bg-white dark:bg-neutral-900 sticky top-0 z-30">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center font-bold text-white text-xs">
                    M
                  </div>
                  <span className="font-semibold text-sm">Mikołaj</span>
                </div>

                <Sheet>
                  <SheetTrigger>
                    <Menu className="w-5 h-5 cursor-pointer" />
                  </SheetTrigger>
                  <SheetContent
                    side="left"
                    className="p-0 w-64 bg-white dark:bg-neutral-900 border-r border-neutral-200 dark:border-neutral-800"
                  >
                    <Sidebar />
                  </SheetContent>
                </Sheet>
              </header>

              <main className="flex-1 px-6 md:px-12 py-8 max-w-5xl w-full mx-auto">
                {children}
              </main>
            </div>
          </div>
        </AppProvider>
      </body>
    </html>
  );
}
