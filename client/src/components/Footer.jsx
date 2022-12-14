import React from 'react'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faFacebook,
    faTwitter,
    faInstagram,
    faDiscord,
    faReddit,
    faYoutube,
    faLinkedin,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => {
    return (
        <div className='w-full mt-24 bg-slate-900 text-gray-300 py-y px-2'>
            <div className='max-w-[1240px] mx-auto grid grid-cols-2 md:grid-cols-6 border-b-2 border-gray-600 py-8'>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Solutions</h6>
                    <ul>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Marketing</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Analytics</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Commerce</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Data</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Cloud</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Support</h6>
                    <ul>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Documentation</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Call</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Guides</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>API Status</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Company</h6>
                    <ul>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>About</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Blog</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Jobs</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Press</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Partners</li>
                    </ul>
                </div>
                <div>
                    <h6 className='font-bold uppercase pt-2'>Legal</h6>
                    <ul>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Claims</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Privacy</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Terms</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Policies</li>
                        <li className='py-1 cursor-pointer hover:text-blue-400'>Conditions</li>
                    </ul>
                </div>
                <div className='col-span-2 pt-8 md:pt-2'>
                    <p className='font-bold uppercase'>Subscribe to our newsletter</p>
                    <p className='py-4'>The latest news, articles, and resources, sent to your inbox weekly.</p>
                    <form className='flex flex-col sm:flex-row'>
                        <input className='w-full p-2 mr-4 rounded-md mb-4 text-black' type="email" placeholder='Enter your email...' />
                        <button className='p-2 mb-4 border-none'>Subscribe</button>
                    </form>
                </div>
            </div>

            <div className='flex flex-col max-w-[1240px] px-2 py-4 mx-auto justify-between sm:flex-row text-center text-gray-500'>
                <p className='py-4'>Made with ???? by <a href="https://github.com/ShlokBharadwaj" target="_blank" className='text-blue-500'>Shlok Bharadwaj</a></p>
                <div className='flex justify-between sm:w-[300px] pt-4 text-2xl'>

                    <FontAwesomeIcon icon={faFacebook} className="cursor-pointer hover:text-[#4267B2]" />
                    <a href="https://www.instagram.com/law_scholars_/" target="_blank">  <FontAwesomeIcon icon={faInstagram} className="cursor-pointer hover:text-red-400" /> </a>
                    <FontAwesomeIcon icon={faTwitter} className="cursor-pointer hover:text-[#00acee]" />
                    <a href="https://www.linkedin.com/in/law-scholars/" target="_blank"><FontAwesomeIcon icon={faLinkedin} className="cursor-pointer hover:text-[#0072b1]" /></a>
                    <FontAwesomeIcon icon={faDiscord} className="cursor-pointer hover:text-[#5865F2]" />
                    <FontAwesomeIcon icon={faReddit} className="cursor-pointer  hover:text-[#ff4500]" />
                    <FontAwesomeIcon icon={faYoutube} className="cursor-pointer  hover:text-[#FF0000]" />
                </div>
            </div>
        </div>
    )
}

export default Footer