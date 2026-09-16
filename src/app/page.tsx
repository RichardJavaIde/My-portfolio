import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Skills } from "@/components/sections/Skills";
import { Projects } from "@/components/sections/Projects";
import { Contact } from "@/components/sections/Contact";
import { Marquee } from "@/components/sections/Marquee";

/**
 * Página de inicio (Server Component): compone las secciones en orden.
 * Las anclas de navegación (#inicio, #sobre-mi, ...) se definen en cada sección.
 * <Marquee /> (Server, solo CSS) cierra el hero con la cinta de tecnologías.
 */
export default function Home() {
  return (
    <main>
      <Hero />
      <Marquee />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </main>
  );
}