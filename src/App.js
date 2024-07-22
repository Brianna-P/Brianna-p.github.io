import "./App.css";
import { HashRouter, Route, Routes } from "react-router-dom";

import About from "./pages/About";
import Contact from "./pages/Contact";
import Portfolio from "./pages/Portfolio";
import Resume from "./pages/Resume";
import Footer from "./pages/Footer";
import Header from "./pages/Header";

function App() {
  return (
    <>
      <HashRouter>
      <Header />
        <Routes>
          <Route path="/" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/portfolio" element={<Portfolio />} />
          <Route path="/resume" element={<Resume />} />
        </Routes>
      </HashRouter>
      <Footer />
    </>
  );
}

export default App;
