import { About } from "@/features/about/components/about";
import { Header } from "@/features/header/components/header";
import { Navigation } from "@/features/navigation/components/navigation";
import { Projects } from "@/features/project/components/projects";

export default function Home() {
  return (
    <>
      <main className="">
        <Navigation />
        <div className="divide-y divide-purplebg">
          <Header />
          <About />
          <Projects />
        </div>
      </main>
    </>
  );
}
