import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./page/ProfilePage";

export default function App() {
  return (
    <div>
      <Router basename={import.meta.env.BASE_URL}>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
