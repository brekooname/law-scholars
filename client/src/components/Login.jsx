import axios from 'axios';
import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import './login.css';


class Login extends Component {

  handleSubmit = e => {
    e.preventDefault();

    const data = {
      email: this.email,
      password: this.password
    }

    axios.post('http://localhost:3000/law-scholars/login', data).then(
      res => {
        localStorage.setItem('token', res.token);
      }
    ).catch(err => {
      console.log(err)
    })
  }

  render() {
    return (
      <>
        <div className='container text-center p-0 m-0 box-border'>
          <div className='sign-in-container'>
            <form action='' onSubmit={this.handleSubmit}>
              <div>
                <h1>Sign in</h1>
                <input type="text" name="email" id="email" placeholder='Username'
                  onChange={e => this.email = e.target.value} /><br></br>
                <input type="text" name="password" id="password" placeholder='Password'
                  onChange={e => this.password = e.target.value} />
                <br></br>
                <Link to="/law-scholars"><button className='login-btn'>Login</button></Link><br></br>
                <button className='forget-pass'>Forgot Password?</button>
              </div>
            </form>
          </div>
          <div className='sign-up-card'>
            <h2>Don't have an Account?</h2>
            <Link to="/law-scholars/signup"><button> Sign up </button></Link>
          </div>
        </div>
      </>
    )
  }
}

export default Login