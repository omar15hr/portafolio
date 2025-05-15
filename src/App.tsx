import { Toaster } from "sonner";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { AboutSection } from "./components/sections/AboutSection";
import { EducationSection } from "./components/sections/EducationSection";
import { ExperienceSection } from "./components/sections/ExperienceSection";
import { HeroSection } from "./components/sections/HeroSection";
import { ProjectsSection } from "./components/sections/ProjectsSection";
import { StacksSection } from "./components/sections/StacksSection";


function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-800 font-sans">
      <Header />
      <HeroSection />
      <StacksSection />
      <ProjectsSection />
      <ExperienceSection />
      <EducationSection />
      <AboutSection />
      <Toaster />
      <Footer />
    </div>
  );
}

export default App;
