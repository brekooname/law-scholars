import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Registration from "./components/Registration";
import Blogs from "./components/Blogs";
import Support from "./components/Support";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Testimonial from "./components/Testimonial";
import LiveChat from "./components/LiveChat";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Registration/>
      <Blogs/>
      <LiveChat/>
      <Testimonial/>
      <Support/>
      <Footer/>
      <Routes>
         <Route path="/LoginSignup" element={<LoginSignup/>} />
      </Routes>
    </>
  );
}

export default App;