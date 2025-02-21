import "./App.css";
import NavBar from "./components/NavBar/NavBar";
import Banner from "./components/Banner/Banner";
import Skill from "./components/Skill&Experience/Skill";
import Project from "./components/Projectsfile/Projects";
import Education from "./components/Education/Education";
import Footer from "./components/Footer/Footer";
import Contact from "./components/contactfile/Contact";

function App() {
  return (
    <>
      <NavBar />
      <Banner />
      <Skill/>
      <Project/>
      <Education/>
      <Contact/>
      <Footer/>
    </>
  );
}

export default App;
