import "./App.css";
import CustomNavbar from "./components/CustomNavbar";
import HomePage from "./components/HomePage";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import ContactUs from "./components/ContactUs";
import backgroundImage from "./images/backGround.jpg";

function App() {
  const componentStyle = {
    backgroundImage: `url(${backgroundImage})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    height: "auto",
    margin: 0,
    backdropFilter: "blur(7px)",
  };
  return (
    <div style={componentStyle}>
      <CustomNavbar />
      <HomePage />
      <Skills />
      <Projects />
      <ContactUs />
    </div>
  );
}

export default App;
