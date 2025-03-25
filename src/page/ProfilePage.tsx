import Layout from "../components/Layout";
import WorkExperience from "./Profile/WorkExperience";
import Projects from "./Profile/Projects";
import Articles from "./Profile/Articles";
import CAD from "./Profile/CAD";
import HeroSection from "./Profile/HeroSection";
import TechStack from "./Profile/TechStack";

export default function ProfilePage() {
  // return <SkillsFlow />;
  return (
    <>
      <Layout>
        <HeroSection />
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <TechStack />
          <WorkExperience />
          <Projects />
          <Articles />
          <CAD />
        </div>
      </Layout>
    </>
  );
}
