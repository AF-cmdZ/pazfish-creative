import Topbar from "./components/topbar/Topbar.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Testimonials from "./components/testimonials/Testimonials.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
       <Topbar menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
              <Intro/>
              <Portfolio/>
              <Works/>
              <Testimonials/>
              <Contact/>
          </div>
      {/* <Footer/>     */}
    </div>
  );
}

export default App;
