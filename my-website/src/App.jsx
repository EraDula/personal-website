import Contact from "./components/contact/Contact"
import Intro from "./components/intro/Intro"
import Navbar from "./components/navbar/Navbar"
import Projects from "./components/projects/Projects"
import About from "./components/about/About"
import Menu from "./components/menu/Menu"
import "./app.scss"
import { useState } from 'react';

function App() {
  const [menuOpen, setMenuOpen] = useState(true)
  return (
    <div className="app">
      <Navbar menuOpen={menuOpen} setMenuOpen={setMenuOpen} />
      <Menu menuOpen={menuOpen} setMenuOpen={setMenuOpen}/>
      <div className="sections">
        <Intro />
        <Projects />
        <About />
        <Contact />
      </div>
    </div>
  );
}

export default App;
