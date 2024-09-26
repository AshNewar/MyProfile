import NavBar from './components/NavBar/NavBar';
import "./App.css";
import Home from './components/Home/Home';
import About from './components/About/About';
import Skills from './components/Skills/Skills';
import Service from './components/Services/Service';
import Project from './components/Projects/Projects';
import Contact from './components/Contact/Contact';
import "./App.css"
import { Toaster } from 'react-hot-toast';
import GoToTop from './components/About/GoToTop';

const App = () => {
  return (
    <>
      <NavBar />
      <div className='app-container'>
        <Home />
        <About />
        <Skills />
      </div>
      <div className='app-container-2'>

        <Service />
        <Project />
        <Contact />

      </div>
      <GoToTop />
      <Toaster />



    </>
  )

}

export default App
