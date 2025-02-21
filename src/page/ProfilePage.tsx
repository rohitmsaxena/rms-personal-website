import Layout from "../components/Layout";
import SkillsFlow from "./Profile/SkillsFlow";
import WorkExperience from "./Profile/WorkExperience";
import Projects from "./Profile/Projects";
import Articles from "./Profile/Articles";
import CAD from "./Profile/CAD";

export default function ProfilePage() {
  // return <SkillsFlow />;
  return (
    <>
      <Layout>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          {/*<Skills />*/}
          <SkillsFlow />
          <WorkExperience />
          <Projects />
          <Articles />
          <CAD />
        </div>
      </Layout>
    </>
  );
}
