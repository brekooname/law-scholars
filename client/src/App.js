import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Registration from "./components/Registration";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import LoginSignup from "./components/LoginSignup";
import Testimonial from "./components/Testimonial";
import LiveChat from "./components/LiveChat";
import Quiz from "./components/Quiz";
import logo from "./assets/logo.jpg";
import Profile from "./components/Profile";

const HomePage = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <About />
      <Quiz />
      <Registration />
      <Blogs />
      <LiveChat />
      <Testimonial />
      <Services />
      <Footer />
    </>
  )
}

export default function App() {

  // const [apiResponse, setApiResponse] = useState("")

  // useEffect(() => {

  //   const callAPI = async () => {
  //     const response = await fetch('http://localhost:9000/testAPI')
  //     const text = await response.text()
  //     setApiResponse(text)
  //   }

  //   callAPI()
  //   return () => setApiResponse('')
  // }, [])

  return (
    <BrowserRouter>
      <Routes>
        <Route path="*" element={
          <div>
            Error 404
          </div>
        } />
        <Route path="/law-scholars" element={<HomePage />} />
        <Route path="/law-scholars/login" element={<LoginSignup />} />
        <Route path="/law-scholars/profile" element={<Profile />} />
      </Routes>

      {/* Other routes */}
    </BrowserRouter>
  )
}


// From line 37 to test Server:
//<div className="App">
//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" /> 
//  <h1 className="App-title">Welcome to React</h1>
//</header>
//<p className="App-intro">{this.state.apiResponse}</p>
//</div>



// constructor(props) {
//   super(props);
//   this.state = { apiResponse: "" };
// }

// callAPI() {
//   fetch("http://localhost:9000/testAPI")
//     .then(res => res.text())
//     .then(res => this.setState({ apiResponse: res }))
//     .catch(err => err);
// }

// componentDidMount() {
//   this.callAPI();
// }