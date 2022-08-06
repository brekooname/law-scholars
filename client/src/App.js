import React, { Component } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Routes, Redirect } from "react-router-dom";

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

class App extends Component {

  constructor(props) {
    super(props);
    this.state = { apiResponse: "" };
  }

  callAPI() {
    fetch("http://localhost:9000/testAPI")
      .then(res => res.text())
      .then(res => this.setState({ apiResponse: res }))
      .catch(err => err);
  }

  componentDidMount() {
    this.callAPI();
  }

  render() {

    return (
      <>
        {/* <Routes> */}
          {/* <Route path="/LoginSignup" element={<LoginSignup />} /> */}
        {/* </Routes> */}

        {/* <BrowserRouter>
          <Route path='/LoginSignup' element={<LoginSignup />}  />
          <Route path='/' element={<Hero />} />
          <Route path='/About' element={<About />} />
          <Route path='/Registration' element={<Registration />} />
          <Route path='/Blogs' element={<Blogs />} />
          <Route path='/Services' element={<Services />} />
          <Route path='/Footer' element={<Footer />} />
          <Route path='/Testimonial' element={<Testimonial />} />
          <Route path='/LiveChat' element={<LiveChat />} />
          <Route path='/Quiz' element={<Quiz />} />
        </BrowserRouter> */}

        <Navbar />
        <Hero />
        <About />
        <Quiz />
        <Registration />
        <Blogs />
        <LiveChat />
        <Testimonial />
        <Services />
        {/* <LoginSignup /> */}
        <Profile />
        <Footer />
      </>
    );
  }
}

export default App;


// From line 37 to test Server:
//<div className="App">
//<header className="App-header">
//  <img src={logo} className="App-logo" alt="logo" /> 
//  <h1 className="App-title">Welcome to React</h1>
//</header>
//<p className="App-intro">{this.state.apiResponse}</p>
//</div>