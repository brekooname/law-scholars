import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Registration from "./components/Registration";
import Posts from "./components/Posts";
import Support from "./components/Support";
import Footer from "./components/Footer";

function App() {
  return (
    <>
      <Navbar/>
      <Hero/>
      <About/>
      {/* <Registration/> */}
      {/* <Posts/> */}
      <Support/>
      <Footer/>
    </>
  );
}

export default App;