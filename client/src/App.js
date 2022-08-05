import React, { Component, Fragment } from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Registration from "./components/Registration";
import Blogs from "./components/Blogs";
import Services from "./components/Services";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";
import LoginSignup from "./components/LoginSignup";
import Testimonial from "./components/Testimonial";
import LiveChat from "./components/LiveChat";
import Quiz from "./components/Quiz";
import logo from "./assets/logo.jpg";

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