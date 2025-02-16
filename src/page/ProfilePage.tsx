import WorkExperience from "./Profile/WorkExperience";
import Layout from "../components/Layout";
import Projects from "./Profile/Projects";
import Articles from "./Profile/Articles";
import CAD from "./Profile/CAD";
import LanguagesSection from "./Profile/LanguagesSection";

export default function ProfilePage() {
  return (
    <>
      <Layout>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <LanguagesSection />
          <WorkExperience />
          <Projects />
          <Articles />
          <CAD />
        </div>
      </Layout>
    </>
  );
}
