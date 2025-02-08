import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import ProfilePage from "./page/ProfilePage";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<ProfilePage />} />
        </Routes>
      </Router>
    </div>
  );
}
