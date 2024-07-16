import './App.css';
import Sidebar from './components/sidebar/Sidebar';
import Home from './components/home/Home';
import About from './components/about/About';
import Resume from './components/resume/Resume';
import Portfolio from './components/portfolio/Portfolio';
import Certificate from './components/certificates/Certificate';
import Skills from './components/skills/Skills';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <Home />
      <About />
      <Portfolio />
      <Resume />
      <Certificate />
      <Skills />
      <Contact />
    </div>
  );
}

export default App;
