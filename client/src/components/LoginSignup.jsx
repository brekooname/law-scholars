import React, { useState } from "react";

const LoginSignup = () => {

    const SignInBtn = document.querySelector('.SignInBtn')
    const SignUpBtn = document.querySelector('.SignUpBtn')
    const formBx = document.querySelector('.formBx')
    const body = document.querySelector('body')

    SignUpBtn.onclick = function () {
        formBx.classList.add('active')
        body.classList.add('active')
    }

    SignInBtn.onclick = function () {
        formBx.classList.remove('active')
        body.classList.remove('active')
    }


    return (
        <div name="loginsignup" className="w-full h-screen flex flex-col justify-center items-center m-0 bg-[#23a0ee]" >
            <div className="container grid md:grid-cols-2 max-w-[1240px] relative w-[800px] h-[500px] m-5">
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