import { Hero } from "@/components/hero/hero";

export default function Home() {
  return (
    <div className="relative flex flex-col justify-center min-h-[75vh] py-12">
      <div className="fixed inset-0 bg-dot-pattern pointer-events-none -z-10 mask-[radial-gradient(ellipse_at_center,transparent_20%,black)]" />

      <div className="relative z-10">
        <Hero />
      </div>
    </div>
  );
}
