import ProfilePage from "./page/ProfilePage";

export default function App() {
  return (
    <div className="flex flex-col w-full">
      <div className="w-full bg-green-500 text-black text-center p-2 font-bold z-50">
        🚀 Open to work! Looking for my next opportunity.
        <a
          href="https://www.linkedin.com/in/rohitsaxena42/"
          target="_blank"
          rel="noopener noreferrer"
          className="ml-2 underline hover:text-blue-300"
        >
          LinkedIn 🚀
        </a>
      </div>
      <ProfilePage />
    </div>
  );
}
