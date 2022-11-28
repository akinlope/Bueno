import Home from "./Pages/Home";
import Navbar from "./Navbar";
import Menu from "./Pages/Menu";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Shop from "./Pages/Shop";
import { useState } from "react";
import Footer from "./Footer";
import ScrollToTop from "./Components/ScrollToTop";

function App() {
  const [activeLink, setActiveLink] = useState("");
  const linkFun = (params) => {
    setActiveLink(params);
  };

  return (
    <Router>
      <Navbar activeLink={activeLink} />
      <Routes>
        <Route exact path="/" element={<Home setLink={linkFun} />} />
        <Route exact path="/menu" element={<Menu setLink={linkFun} />} />
        <Route exact path="/shop" element={<Shop setLink={linkFun} />} />
      </Routes>
      <Footer />
      <ScrollToTop />
    </Router>
  );
}

export default App;
