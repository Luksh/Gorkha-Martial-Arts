import { Route, BrowserRouter as Router, Routes } from "react-router-dom";
import ClassesPage from "./components/ClassesPage";
import ContactPage from "./components/ContactPage";
import Header from "./components/Header";
import HomePage from "./components/HomePage";
import MembershipPage from "./components/MembershipPage";

function App() {
  return (
    <Router>
      <div>
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/classes" element={<ClassesPage />} />
          <Route path="/membership" element={<MembershipPage />} />
          <Route path="/contact" element={<ContactPage />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
