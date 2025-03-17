
import './App.css'
import Header from './sections/Header.jsx';
import Skill from "./sections/Skill.jsx";
import About from "./sections/About.jsx";
import Education from "./sections/Education.jsx";
import Footer from "./components/Footer.jsx";

function App() {
  

  return (
    
   <div className='mx-auto min-h-screen max-w-2xl  px-6 py-12  '>
   <Header/>
    <About/>
       <Skill/>
       <Education/>
       <Footer/>
   </div>
  )
}

export default App
