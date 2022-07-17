import React from "react";

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faBook,
    faScaleBalanced,
    faHammer,
    faBuildingColumns
} from '@fortawesome/free-solid-svg-icons'

import bgImg from '../assets/law-books.jpg'

const Hero = () => {
    return (
        <div className="w-full h-screen bg-zinc-200 flex flex-col justify-between">
            <div className="grid md:grid-cols-2 max-w-[1240px] m-auto">
                <div className="flex flex-col justify-center md:items-start w-full px-2 py-8">
                    <p className="text-2xl">Think like a Lawyer</p>
                    <FontAwesomeIcon icon={faBook}></FontAwesomeIcon>
                    <p className="text-2xl">Lock the Trial</p>
                    <FontAwesomeIcon icon={faScaleBalanced} />
                    <p className="text-2xl">Get Justice</p>
                    <FontAwesomeIcon icon={faHammer} />
                    <p className="py-3 text-5xl md:text-7xl font-bold">Law and Justice aren't always Same</p>
                    <FontAwesomeIcon icon={faBuildingColumns} />
                    <button className="py-3 px-6 my-4 sm:w-[60%]">Get Started</button>
                </div>
                <div>
                     {/* <img src={bgImg} alt="" /> */}
                     <img src="https://source.unsplash.com/random/500x500/?law,court" alt="Random Law related image from Unsplash" />
                </div>
            </div>
        </div>
    )
}

export default Hero;