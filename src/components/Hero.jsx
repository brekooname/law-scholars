import React from "react";

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faBook,
    faScaleBalanced,
    faHammer,
    faBuildingColumns,
    faPeopleGroup,
    faScaleUnbalanced,
    faScaleUnbalancedFlip,
    faComments,
    faPhone
} from '@fortawesome/free-solid-svg-icons'

import bgImg from '../assets/law-books.jpg'

const Hero = () => {
    return (
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">Think like a Lawyer</p>
                    {/* <FontAwesomeIcon icon={faBook}></FontAwesomeIcon> */}
                    <p className="text-2xl">Lock the Trial</p>
                    {/* <FontAwesomeIcon icon={faScaleBalanced} /> */}
                    <p className="text-2xl">Get Justice</p>
                    {/* <FontAwesomeIcon icon={faHammer} /> */}
                    <p className="py-3 text-5xl md:text-7xl font-bold">Law and Justice aren't always the Same</p>
                    {/* <FontAwesomeIcon icon={faBuildingColumns} /> */}
                    <button className="py-3 px-6 my-4 sm:w-[60%]">Get Started</button>
                </div>
                <div>
                     <img className="w-full rounded-lg" src={bgImg} alt="https://unsplash.com" />
                     {/* <img className="w-full" src="https://source.unsplash.com/random/500x500/?law,court" alt="Random Law related image from Unsplash" /> */}
                </div>
                <div className='absolute flex flex-col py-8 md:min-w-[760px] bottom-[5%]
            mx-1 md:left-1/2 transform md:-translate-x-1/2 bg-zinc-200
            border border-slate-300 rounded-xl text-center shadow-xl'>
                    <p>Check out our Community:</p>
                    <div className='flex justify-between flex-wrap px-4'>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="className='h-6 text-blue-500 mr-2" icon={faPeopleGroup} /> Live Discussion</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="className='h-6 text-blue-500 mr-2" icon={faScaleUnbalanced} /> Current Legal Affairs</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="className='h-6 text-blue-500 mr-2" icon={faComments}/> Posts</p>
                        <p className='flex px-4 py-2 text-slate-500'><FontAwesomeIcon className="className='h-6 text-blue-500 mr-2" icon={faPhone}/> Consultation</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hero;