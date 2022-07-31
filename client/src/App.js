import React, { Component } from "react";
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
        <div className="App">
          <header className="App-header">
            {/* <img src={logo} className="App-logo" alt="logo" /> */}
            <h1 className="App-title">Welcome to React</h1>
          </header>
          <p className="App-intro">{this.state.apiResponse}</p>
        </div>
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
        <Routes>
          <Route path="/LoginSignup" element={<LoginSignup />} />
        </Routes>
      </>
    );
  }
}

export default App;