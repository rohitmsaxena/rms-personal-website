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

// return (
//     <>
//     <TopNav />
//     </>
// )
// return (
//     <Router>
//         {/*<Layout>*/}
//             hi
//             {/*<Routes>*/}
//             {/*    <Route path="/" element={<Home />} />*/}
//             {/*    <Route path="/about" element={<About />} />*/}
//             {/*</Routes>*/}
//         {/*</Layout>*/}
//     </Router>
// );
