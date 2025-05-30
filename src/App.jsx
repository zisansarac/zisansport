import LogoSection from "./sections/LogoSection"
import NavBar from "./components/NavBar"
import FeatureCards from "./sections/FeatureCards"
import Hero from "./sections/Hero"
import ShowcaseSection from "./sections/ShowcaseSection"
import ExperienceSection from "./sections/ExperienceSection"
import TechStack from "./sections/TechStack"
import Testimonials from "./sections/Testimonials"

const App = () => {
  return (
    
       <>
         <NavBar />
         <Hero />
         <ShowcaseSection />
         <LogoSection />
         <FeatureCards />
         <ExperienceSection />
         <TechStack />
         <Testimonials />
       </>

    
  )
}

export default App