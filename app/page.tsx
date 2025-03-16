import Menu from "./components/Menu";
import MetalScene from "./components/MetalScene";
import Intro from "./components/Intro";
import Timeline from "./components/Timeline";
import ProjectsSection from "./components/Projects";
import ContactSection from "./components/ContactMe";

export default function Home() {
  return (
    <div className="max-w-9/12">
      <Menu/>
      <Intro/>
      <MetalScene/>
      <ProjectsSection/>
      <Timeline/>
      <ContactSection/>
    </div>
  );
}
