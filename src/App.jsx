import Navbar from "./components/Navbar";
import Home from "./sections/Home";
import MySkills from "./sections/MySkills";
import About from "./sections/About";
import MyProjects from "./sections/MyProjects";
import Blog from "./sections/Blog";



function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <About />
      <MySkills />
      <MyProjects />
      <Blog />

    </div>
  );
}

export default App;
