import { AboutSection } from "./components/AboutSection";
import { EducationSection } from "./components/EducationSection";
import { ExperienceSection } from "./components/ExperienceSection";
import { Footer } from "./components/Footer";
import { Header } from "./components/Header";
import { HeroSection } from "./components/HeroSection";
import { ProjectsSection } from "./components/ProjectsSection";
import { StacksSection } from "./components/StacksSection";

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
      <Footer />
    </div>
  );
}

export default App;
