import "./App.css";
import AboutYourSelf from "./Component/Pages/About/AboutYourSelf";
import Experience from "./Component/Pages/Experience/Experience";
import Footer from "./Component/Pages/Footer";
import Header from "./Component/Pages/Header";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Education from "./Component/Pages/Education/Education";
import Skills from "./Component/Pages/Skills/Skills";
import Summary from "./Component/Pages/Summary/Summary";
import IntroPage from "./Component/Pages/IntroPage";
import Final from "./Component/Pages/Final/Final";
import Login from "./Component/Pages/Login/Login";
import Sigunup from "./Component/Pages/Login/Sigunup";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <div className="content">
          <Routes>
            <Route path="/" element={<IntroPage />} />
            <Route path="/about" element={<AboutYourSelf />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/summary" element={<Summary />} />
            <Route path="/final" element={<Final />} />
            <Route path="/login" element={<Login />} />
            <Route path="/signup" element={<Sigunup />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
