import React, { useState } from "react";

const LoginSignup = () => {
    return (
        <div name="loginsignup" className="w-full h-screen flex flex-col justify-center items-center m-0 bg-[#23a0ee]" >
            <div className="container grid md:grid-cols-2 max-w-[1240px] m-auto">
            <div className="blueBg">
      <div className="box signin">
        <h2>Already have an Account?</h2>
        <button className="SignInBtn">Sign in</button>
      </div>
      <div className="box signup">
        <h2>Don't have an Account?</h2>
        <button className="SignUpBtn">Sign up</button>
      </div>
    </div>
    <div className="formBx">
      <div className="form SignInForm">
        <form>
          <h3>Sign In</h3>
          <input type="text" placeholder="Username" />
          <input type="password" placeholder="Password" />
          <input type="submit" defaultValue="Login" />
          <a href="#" className="forgot">
            Forgot Password?
          </a>
        </form>
      </div>
      <div className="form SignUpForm">
        <form>
          <h3>Sign Up</h3>
          <input type="text" placeholder="Full Name" />
          <input type="text" placeholder="Email Address" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <input type="submit" defaultValue="Register" />
        </form>
      </div>
    </div>
        </div>
    </div>
    )
}

export default LoginSignup


/*{ <div class='container'>
            <div class="blueBg">
                <div class="box signin">
                    <h2>Already have an Account?</h2>
                    <button class="SignInBtn">Sign in</button>
                </div>
                <div class="box signup">
                    <h2>Don't have an Account?</h2>
                    <button class="SignUpBtn">Sign up</button>
                </div>
            </div>
            <div class='formBx'>
                <div class='form SignInForm'>
                    <form>
                        <h3>Sign In</h3>
                        <input type="text" placeholder="Username"></input>
                        <input type="password" placeholder="Password" />
                        <input type="submit" value="Login" />
                        <a href="#" class="forgot">Forgot Password?</a>
                    </form>
                </div>
                <div class='form SignUpForm'>
                    <form>
                        <h3>Sign Up</h3>
                        <input type="text" placeholder="Full Name"></input>
                        <input type="text" placeholder="Email Address" />
                        <input type="password" placeholder="Password" />
                        <input type="password" placeholder="Confirm Password" />
                        <input type="submit" value="Register" />
                    </form>
                </div>
            </div>
            <style>
                {`
                .container {
                    position: relative;
                    width: 800px;
                    height: 500px;
                    margin: 20px;
                    /* background: rgb(231, 231, 9); */
        //         }

        //         .blueBg {
        //             position: absolute;
        //             display: flex;
        //             justify-content: center;
        //             align-items: center;
        //             top: 40px;
        //             width: 100%;
        //             height: 420px;
        //             background: rgba(255, 255, 255, 0.2);
        //             box-shadow: 0 5px 45px rgba(0,0,0,0.25);
        //         }
                
        //         .blueBg .box {
        //             position: relative;
        //             width: 50%;
        //             height: 100%;
        //             display: flex;
        //             justify-content: center;
        //             align-items: center;
        //             flex-direction: column;
        //         }
                
        //         .blueBg .box h2 {
        //             color: rgb(255,255,255);
        //             font-size: 1.2em;
        //             font-weight: 500;
        //             margin-bottom: 10px;
        //         }
                
        //         .blueBg .box button {
        //             cursor: pointer;
        //             padding: 10;
        //             background: rgb(255,255,255);
        //             color: rgb(0,0,0);
        //             font-size: 16px;
        //             font-weight: 500;
        //             border: none;
        //             border-radius:4px;
        //         }
                
        //         .formBx {
        //             position: absolute;
        //             top: 0;
        //             left: 0;
        //             width: 50%;
        //             height: 100%;
        //             background: rgb(255,255,255);
        //             z-index: 1000;
        //             display: flex;
        //             justify-content: center;
        //             align-items: center;
        //             box-shadow: 0 5px 45px rgba(0,0,0,0.35);
        //             transition: 0.5s ease-in-out;
        //             overflow: hidden;
        //         }
                
        //         .formBx.active {
        //             left: 50%;
        //         }
                
        //         .formBx .form {
        //             position: absolute;
        //             left: 0;
        //             width: 100%;
        //             padding: 50px;
        //             transition: 0.5s;
        //         }
                
        //         .formBx .SignInForm {
        //             transition-delay: 0.25s;
        //         }
                
        //         .formBx.active .SignInForm {
        //             left: -100%;
        //             transition-delay: 0s;
        //         }
                
        //         /* .formBx .SignInForm {
        //             left: 100%;
        //         } */
                
        //         .formBx.active .SignUpForm {
        //             left: 0;
        //             transition-delay: 0.25s;
        //         }
                
        //         .formBx .SignUpForm {
        //             left: 100%;
        //             transition-delay: 0s;
        //         }
                
        //         .formBx .form form {
        //             width: 100%;
        //             display: flex;
        //             flex-direction: column;
        //         }
                
        //         .formBx .form form h3 {
        //             font-size: 1.5em;
        //             color: rgb(0,0,0);
        //             margin-bottom: 20px;
        //             font-size: 500;
        //         }
                
        //         .formBx .form form input {
        //             width: 100%;
        //             margin-bottom: 20px;
        //             padding: 10px;
        //             outline: none;
        //             font-size: 16px;
        //             border: 1px solid rgb(0,0,0);
        //         }
                
        //         .formBx .form form input[type="submit"] {
        //             background: rgb(35, 160, 238);
        //             border: none;
        //             color: rgb(255,255,255);
        //             max-width: 100px;
        //             cursor: pointer;
        //         }
                
        //         .formBx.active .SignUpForm input[type="submit"] {
        //             background: rgb(221, 49, 30);
        //         }
                
        //         .formBx .form form .forgot {
        //             color: rgb(0,0,0);
        //             font: bolder; 
        //         }
                
        //         @media (max-width: 991px) {
        //             .container {
        //                 max-width: 400px;
        //                 height: 650px;
        //                 display: flex;
        //                 justify-content: center;
        //                 align-items: center;
        //             }
        //             .container .blueBg {
        //                 top: 0;
        //                 height: 100%;
        //             }
        //             .formBx{
        //                 width: 100%;
        //                 height: 500px;
        //                 top: 0;
        //                 box-shadow: none;
        //             }
        //             .blueBg .box {
        //                 position: absolute;
        //                 width: 100%;
        //                 height: 150px;
        //                 bottom: 0;
        //             }
        //             .box.signin {
        //                 top: 0;
        //             }
        //             .formBx.active {
        //                 left: 0;
        //                 top: 150px;
                        
        //             }
        //         }
        //     `}
        //     </style>
        // </div> */}