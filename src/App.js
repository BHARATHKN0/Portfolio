import Navbar from "./Components/Navbar/Navbar";
import './App.css'
import Intro from "./Components/Intro/Intro";
import Services from "./Components/Services/Services";
import Experience from "./Components/Experience/Experience";
// import Works from "./Components/Works/Works";
import Portfolio1 from "./Components/Portfolio1/Portfolio1";
import Testimonial from "./Components/Testimonials/Testimonial";
import Contact from './Components/Contact/Contact';
import Footer from "./Components/Footer/Footer";
// import Toggle from "./Components/Toggle/Toggle";
import { themeContext } from "./Context";
import { useContext } from "react";


function App() {
  const theme =useContext(themeContext);
  const darkMode = theme.state.darkMode;
  return (
    <div className="App"
      style={{background: darkMode? 'black':'',
      color: darkMode? 'white':''
      }}
    >
      <Navbar />
      <Intro />
      <Services/>
      <Experience/>
      {/* <Works/> */}
      <Portfolio1 />
      <Testimonial />
      <Contact />
      <Footer />
      {/* <Toggle /> */}
      
    </div>
  );
}

export default App;
