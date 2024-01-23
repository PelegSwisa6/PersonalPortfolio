import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";

function App() {
  return (
    <div className="App">
      <CustomNavbar />
      <HomePage />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
