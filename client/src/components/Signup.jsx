import React, { Component } from 'react'
import axios from 'axios';
import { FcGoogle } from "react-icons/fc";
import { MdFacebook } from "react-icons/md";
import { Link } from 'react-router-dom'
import './signup.css'

class Signup extends Component {

  handleSubmit = e => {
    e.preventDefault();
    const data = {
      full_name: this.fullName,
      user_name: this.userName,
      password: this.password,
      confirm_password: this.confirmPassword

    };

    axios.post('http://localhost:3000/law-scholars/signup', data).then(
      res => {
        console.log(res)
      }
    ).catch(
      err => {
        console.log(err);
      }
    )
  }


  render() {
    return (
      <div className='mega-container2 text-center p-0 m-0 box-border'>
        <div className='sign-in-card absolute flex justify-center items-center top-10 w-full h-[420px] bg-[#ffffff33] shadow-2xl'>
          <div className='box signin'>
            <h2>Already have an Account?</h2>
            <Link to="/law-scholars/login"><button className='SignInBtn'> Sign in</button> </Link>
          </div>
        </div>
        <div className='sign-up-container' >
          <form action='' onSubmit={this.handleSubmit}>
            <div>
              <h1>Sign Up</h1>
              <input type="text" name="full-name" id="password" placeholder='Full Name'
                onChange={e => this.fullName = e.target.value} />
              <input type="text" name="email" id="email" placeholder='Username'
                onChange={e => this.userName = e.target.value} /><br></br>
              <input type="text" name="password" id="password" placeholder='Password'
                onChange={e => this.password = e.target.value} />
              <input type="text" name="password" id="password" placeholder='Confirm Password'
                onChange={e => this.confirmPassword = e.target.value} />
              <br></br>
              <Link to="/law-scholars/login"><button className='register-btn'>Register</button></Link><br></br>
              Or sign up with
              <div className='social-media-options'>
                <div className='google'><FcGoogle /></div>
                <div className='facebook'><MdFacebook /></div>
              </div>
            </div>
          </form>
        </div>
      </div>
    )
  }
}

export default Signup