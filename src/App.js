import Navbar from "./scenes/Navbar";
import DotGroup from "./scenes/DotGroup";
import Landing from "./scenes/Landing";
import MySkills from "./scenes/MySkills";
import LineGradient from "./components/LineGradient";
import Projects from "./scenes/Projects";
import Footer from "./scenes/Footer";
import Contact from "./scenes/Contact";
import { useEffect, useState } from "react";
import useMediaQuery from "./hooks/useMediaQuery";
import { motion } from "framer-motion";

function App() {
  const[selectedPage, setSelectedPage] = useState('home');
  const isAboveMediumScreens = useMediaQuery("(min-width: 1060px)");
  const[isTopOfPage, setIsTopOfPage] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      if(window.scrollY === 0) setIsTopOfPage(true);
      if(window.scrollY !== 0) setIsTopOfPage(false);
    }
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return( 
    <div className="app bg-deep-blue">
      <Navbar 
        isTopOfPage = {isTopOfPage} 
        selectedPage = {selectedPage} 
        setSelectedPage = {setSelectedPage} 
      />

      {/* HOME */}
      <div className = "w-5/6 mx-auto md:h-full">
        {isAboveMediumScreens && (
          <DotGroup 
            selectedPage = {selectedPage} 
            setSelectedPage = {setSelectedPage}
          />
        )}

        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("home")}
        >
          <Landing setSelectedPage={setSelectedPage} />
        </motion.div>
      </div>
      
      <LineGradient />

      {/* SKILLS */}
      <div className="w-5/6 mx-auto md:h-full ">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("skills")}
        >
          <MySkills />
        </motion.div>
      </div>
      <LineGradient />

      {/* PROJECTS */}
      <div className="w-5/6 mx-auto">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("projects")}
        >
            <Projects/>
        </motion.div>
      </div>
      <LineGradient/>

      {/* CONTACT */}
      <div className="w-5/6 mx-auto md:h-full">
        <motion.div
          margin="0 0 -200px 0"
          amount="all"
          onViewportEnter={() => setSelectedPage("contact")}
        >
          <Contact />
        </motion.div>
      </div>
      <LineGradient/>
      <Footer />

    </div>
  );
}

export default App;
