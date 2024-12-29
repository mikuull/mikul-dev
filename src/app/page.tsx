import { About } from "@/features/about/components/about";
import { Contact } from "@/features/contact/components/contact";
import { Footer } from "@/features/footer/components/footer";
import { Header } from "@/features/header/components/header";
import { Navigation } from "@/features/navigation/components/navigation";
import { Projects } from "@/features/project/components/projects";
import { Skills } from "@/features/skills/components/skills";

export default function Home() {
  return (
    <>
      <main>
        <Navigation />
        <div className="divide-y divide-purplebg">
          <Header />
          <About />
          <Projects />
          <Skills />
          <Contact />
          <Footer />
        </div>
      </main>
    </>
  );
}
