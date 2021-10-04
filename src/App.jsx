import Header from "./components/header/Header.jsx";
import Intro from "./components/intro/Intro.jsx";
import Portfolio from "./components/portfolio/Portfolio.jsx";
import Works from "./components/works/Works.jsx";
import Resume from "./components/resume/Resume.jsx";
import Contact from "./components/contact/Contact.jsx";
import Footer from "./components/footer/Footer.jsx";
import Navigation from "./components/navigation/Navigation.jsx";
import "./app.scss";
import { useState } from "react";


function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div className="app">
       <Header menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
       <Navigation menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
          <div className="sections">
              <Intro/>
              <Portfolio/>
              <Works/>
              <Resume/>
              <Contact/>
          </div>
          <Footer/>
    </div>
    
  );
}

export default App;
