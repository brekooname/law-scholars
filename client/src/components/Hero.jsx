import React, { useState } from "react";
import Typed from 'react-typed'
import { Link, animateScroll as scroll } from "react-scroll";
import { Link as LinkPage } from 'react-router-dom'

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
        <div name="home" className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1568667256549-094345857637?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1915&q=80')] flex flex-col justify-center bg-cover bg-center">
            {/* <div className="grid md:grid-cols-2 max-w-[1240px] m-auto"> */}
            <div className="flex flex-col justify-center md:items-start sm:w-[50%] xsm:text-slate-300 px-2 py-8 m-8">
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
                <LinkPage to="/law-scholars/profile" className="sm:w-[60%]">
                    <button className="xsm:w-[300px] py-3 px-6 my-4 sm:w-[60%] border-none">Get Started</button>
                </LinkPage>
                {/* </div> */}

                <div className='absolute flex flex-col py-8 bottom-[5%] mx-1 transform bg-zinc-200 border border-slate-300 rounded-xl text-center shadow-xl xsm:-my-20 xsm:bottom-[-3%] xsm:mr-10  md:min-w-[760px]  md:left-1/2 md:-translate-x-1/2 md:bottom-[20%] lg:bottom-[15%]'>
                    <p className="text-black">Check out our Community:</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faPeopleGroup} /> Live Discussion</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faScaleUnbalanced} /> Current Legal Affairs</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faComments} /> Posts</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faPhone} /> Consultation</p>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero;