import React, { useState } from "react";
import Typed from 'react-typed'
import { Link, animateScroll as scroll } from "react-scroll";

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faPeopleGroup,
    faScaleUnbalanced,
    faComments,
    faPhone
} from '@fortawesome/free-solid-svg-icons'

import bgImg from '../assets/law-books.jpg'

const Hero = () => {
    return (
        <div name="home" className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">Think like a Lawyer</p>
                    <p className="text-2xl">Lock the Trial</p>
                    <p className="text-2xl">Get Justice</p>
                    <p className="py-3 text-4xl md:text-6xl font-bold">Law and Justice<br />
                        <Typed
                            className="py-3 text-4xl md:text-6xl font-bold"
                            strings={[' are always Same!', ' Same?', " isn't always Same."]}
                            typeSpeed={150}
                            backSpeed={150}
                            loop
                        /></p>
                    <button className="scroll-smooth py-3 px-6 my-4 sm:w-[60%]"><Link to="registration" smooth={true} duration={500}>Get Started</Link></button>
                </div>
                <div>
                    <img className="w-full rounded-lg" src={bgImg} alt="https://unsplash.com" />
                    {/* <img className="w-full" src="https://source.unsplash.com/random/500x500/?law,court" alt="Random Law related image from Unsplash" /> */}
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%] md
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Check out our Community:</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faPeopleGroup} /> Live Discussion</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faScaleUnbalanced} /> Current Legal Affairs</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faComments} /> Posts</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faPhone} /> Consultation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;