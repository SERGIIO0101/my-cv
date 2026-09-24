import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import DevGuardDemo from "./sections/DevGuardDemo";
import MySkills from "./sections/MySkills";
import Experience from "./sections/Experience";
import About from "./sections/About";
import MyProjects from "./sections/MyProjects";
import Blog from "./sections/Blog";
import Footer from "./components/footer";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <DevGuardDemo />
      <About />
      <Experience />
      <MySkills />
      <MyProjects />
      <Blog />
      <Footer />

    </div>
  );
}

export default App;
