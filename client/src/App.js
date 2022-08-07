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

const ErrorPage = () => {
  return (
    <>
      <div class="bg-blue-400 relative overflow-hidden h-screen">
        <img src="https://external-preview.redd.it/4MddL-315mp40uH18BgGL2-5b6NIPHcDMBSWuN11ynM.jpg?width=960&crop=smart&auto=webp&s=b98d54a43b3dac555df398588a2c791e0f3076d9" class="absolute h-full w-full object-cover" />
        <div class="inset-0 bg-black opacity-25 absolute">
        </div>
        <div class="container mx-auto px-6 md:px-12 relative z-10 flex items-center py-20 xl:py-24">
          <div class="w-full font-mono flex flex-col items-center relative z-10">
            <h1 class="font-extrabold text-5xl text-center text-white leading-tight mt-4">
              You are all alone here
            </h1>
            <p class="text-center font-extrabold text-8xl xsm:my-[450px]  md:my-10 text-white animate-bounce">
              404
            </p>
          </div>
        </div>
      </div>
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
        <Route path="*" element={<ErrorPage />} />
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