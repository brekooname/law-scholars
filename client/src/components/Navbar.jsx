import React, { useState } from "react"
import { Link, animateScroll as scroll, } from 'react-scroll'

import { MenuIcon, XIcon } from '@heroicons/react/solid'

import logo from '../assets/new-law-scholars.png'
import newLogo from '../assets/new-logo.png'

const Navbar = () => {
    const [nav, setNav] = useState(false)
    const Clicking = () => setNav(!nav)

    const Closing = () => setNav(!nav)

    return (
        <div className='w-screen h-[80px] z-10 bg-slate-200 fixed drop-shadow-lg'>
            <div className='px-2 flex justify-between items-center w-full h-full'>
                <div className='flex items-center text-[#000]'>
                    <Link to="home" smooth={true} duration={500}><img src={logo} alt="Law Scholar's Logo" className="h-20 mr-4 ml-4 cursor-pointer" /></Link>
                    {/* <h1 className='text-3xl font-bold mr-4 sm:text-4xl'>Law Scholars</h1> */}
                    <ul className='hidden md:flex'>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="home" smooth={true} duration={500}>Home</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="quiz" smooth={true} offset={-200} duration={500}>Quiz</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="registration" smooth={true} offset={-100} duration={500}>Registration</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="blogs" smooth={true} offset={-50} duration={500}>Blogs</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="livechat" smooth={true} offset={-50} duration={500}>Discussion</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="testimonial" smooth={true} offset={-50} duration={500}>Testimonials</Link></li>
                        <li className="cursor-pointer hover:text-[#004284]"><Link to="service" smooth={true} offset={-50} duration={500}>Services</Link></li>
                        {/* <li className="cursor-pointer hover:text-[#004284]"><Link to="loginsignup" smooth={true} offset={-50} duration={500}>Login/SignUp</Link></li> */}
                    </ul>
                </div>

                {/* <div className="hidden md:flex relative bg-transparent p-2 rounded-md border-2 border-[#552e13] m-2">
                    <svg class="w-5 h-5 left-1 absolute ml-1 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"></path></svg>
                    <input type="text" placeholder="Search..." className="ml-6 bg-transparent focus:outline-none border-none text-white" />
                </div> */}


                <div className='hidden md:flex pr-4'>
                    {/* <a href="/LoginSignup"> */}
                        <button className='px-4 py-2 border-none bg-transparent text-black mr-4'>
                            Sign In
                        </button>
                        <button className='px-4 py-2 border-none'>Sign Up</button>
                    {/* </a> */}
                </div>
                <div className='md:hidden mr-4 cursor-pointer' onClick={Clicking}>
                    {!nav ? <MenuIcon className='w-8' /> : <XIcon className='w-8' />}
                </div>
            </div>

            <ul className={!nav ? 'hidden' : 'absolute bg-zinc-200 w-full px-8'}>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="home" smooth={true} duration={500}>Home</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="about" smooth={true} offset={-200} duration={500}>About</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="quiz" smooth={true} offset={-200} duration={500}>Quiz</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="registration" smooth={true} offset={-100} duration={500}>Registration</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="blogs" smooth={true} offset={-50} duration={500}>Blogs</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="livechat" smooth={true} offset={-50} duration={500}>Discussion</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="testimonial" smooth={true} offset={-50} duration={500}>Testimonial</Link></li>
                <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="service" smooth={true} offset={-50} duration={500}>Services</Link></li>
                {/* <li className='border-b-2 border-zinc-300 w-full cursor-pointer hover:text-blue-500'><Link onClick={Closing} to="loginsignup" smooth={true} offset={-50} duration={500}>Login/SignUp</Link></li> */}

                <div className='flex flex-col my-4'>
                    <button className='bg-transparent text-blue-500 px-8 py-3 mb-4'>Sign In</button>
                    <button className='px-8 py-3'>Sign Up</button>
                </div>
            </ul>
        </div>
    )
}

export default Navbar