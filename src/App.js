import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Registration from "./components/Registration";
import Blogs from "./components/Blogs";
import Support from "./components/Support";
import Footer from "./components/Footer";
import {Routes, Route} from "react-router-dom";
import LoginSignup from "./components/LoginSignup";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      <Registration/>
      <Blogs/>
      <Support/>
      <Footer/>
      <Routes>
         <Route path="/LoginSignup" element={<LoginSignup/>} />
      </Routes>
    </>
  );
}

export default App;