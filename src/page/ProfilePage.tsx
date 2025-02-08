import WorkExperience from "../components/WorkExperience";
import Layout from "../components/Layout";

export default function ProfilePage() {
  return (
    <>
      <Layout>
        <div className="container mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
          <WorkExperience />
        </div>
      </Layout>
    </>
  );
}
