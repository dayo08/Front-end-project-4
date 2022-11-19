import "./App.css";
import Contact from "./ContactUS/Contact";
import Footer from "./Footer/Footer";
import Header from "./Header/Header";
import Home from "./Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Services from "./Services/Services";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
function App() {
  const loction = useLocation();
  const { pathname } = loction;

  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, []);

  return (
    <>
      <div className="hero">
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>
        <div className="cube"></div>

        {(pathname === "/" || pathname === "/services") && (
          <div className="view">
            <div className="plane main">
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
              <div className="circle"></div>
            </div>
          </div>
        )}
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </div>
      
    </>
  );
}

export default App;
