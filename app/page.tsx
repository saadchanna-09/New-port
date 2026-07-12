import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import ProjectsGrid from "@/components/ProjectsGrid";
import ExperienceTimeline from "@/components/ExperienceTimeline";
import SkillsMatrix from "@/components/SkillsMatrix";
import Contact from "@/components/Contact";
import BootSequence from "@/components/BootSequence";
import HUDBackdrop from "@/components/HUDBackdrop";
import ScrollFX from "@/components/ScrollFX";

export default function Home() {
  return (
    <>
      <BootSequence />
      <HUDBackdrop />
      <ScrollFX />
      <main className="relative z-10">
        <Navbar />
        <Hero />
        <ProjectsGrid />
        <ExperienceTimeline />
        <SkillsMatrix />
        <Contact />
      </main>
    </>
  );
}
