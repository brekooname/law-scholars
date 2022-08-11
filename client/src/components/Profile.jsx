import React, { useState } from "react";
import { Link as LinkPage } from 'react-router-dom'

import logo from '../assets/new-law-scholars.png'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faBars,
    faBell,
    faBriefcase,
    faGear,
    faMapMarkerAlt,
    faRightFromBracket,
    faUniversity,

} from "@fortawesome/free-solid-svg-icons";
import { faFacebook, faInstagram, faTwitter } from "@fortawesome/free-brands-svg-icons";


export default function Profile(props) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
        {/* TODO: Set navbar transparent to true and white on scroll */}
            <nav transparent={true} 
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "relative shadow-lg bg-white") +
                    " flex flex-wrap items-center justify-between px-2 py-3 "
                }
            >
                <div className="container px-0 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <LinkPage to="/law-scholars"
                            className={
                                (props.transparent ? "text-white" : "text-gray-800") +
                                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            }
                        >
                            <img src={logo} alt="Law Scholars Logo" className="h-20 mr-4 ml-4 cursor-pointer" />
                        </LinkPage>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faBars} />
                        </button>
                    </div>
                    <div
                        className={
                            "lg:flex flex-grow items-center bg-white lg:bg-transparent lg:shadow-none" +
                            (navbarOpen ? " block rounded shadow-lg" : " hidden")
                        }
                        id="example-navbar-warning"
                    >
                        <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">

                            {/* TODO: Notification dropdown */}
                            <li className="flex items-center">
                                <LinkPage to=""
                                    className={
                                        (props.transparent
                                            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                            : "text-gray-800 hover:text-gray-600") +
                                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    }
                                >
                                    <FontAwesomeIcon className="h-6 mr-2" icon={faBell} />
                                    <span className="lg:hidden inline-block ml-2">Notifications</span>
                                </LinkPage>
                            </li>
                            <li className="flex items-center">
                                <LinkPage to=""
                                    className={
                                        (props.transparent
                                            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                            : "text-gray-800 hover:text-gray-600") +
                                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    }
                                >
                                    <FontAwesomeIcon className="h-6 mr-2" icon={faGear} />
                                    <span className="lg:hidden inline-block ml-2">Settings</span>
                                </LinkPage>
                            </li>
                            <li className="flex items-center">
                                <LinkPage to="/law-scholars"
                                    className={
                                        (props.transparent
                                            ? "lg:text-white lg:hover:text-gray-300 text-gray-800"
                                            : "text-gray-800 hover:text-gray-600") +
                                        " px-3 py-4 lg:py-2 flex items-center text-xs uppercase font-bold"
                                    }
                                >
                                    <FontAwesomeIcon className="h-6 mr-2" icon={faRightFromBracket} />
                                    <span className="lg:hidden inline-block ml-2">Log out</span>
                                </LinkPage>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            {/* TODO: Add main section for Profile information */}
            <main className="profile-page">

                {/* Background Image */}
                <section className="relative block" style={{ height: "500px" }}>
                    <div
                        className="absolute top-0 w-full h-full bg-center bg-cover"
                        style={{
                            backgroundImage:
                                "url('https://source.unsplash.com/random/?landscape')"
                        }}
                    >
                        <span
                            id="blackOverlay"
                            className="w-full h-full absolute opacity-50 bg-black"
                        ></span>
                    </div>
                    <div
                        className="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden"
                        style={{ height: "70px" }}
                    >
                        <svg
                            className="absolute bottom-0 overflow-hidden"
                            xmlns="http://www.w3.org/2000/svg"
                            preserveAspectRatio="none"
                            version="1.1"
                            viewBox="0 0 2560 100"
                            x="0"
                            y="0"
                        >
                            <polygon
                                className="text-gray-300 fill-current"
                                points="2560 0 2560 100 0 100"
                            ></polygon>
                        </svg>
                    </div>
                </section>

                {/* Profile Picture */}
                <section className="relative py-16 bg-gray-300">
                    <div className="container mx-auto px-4">
                        <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-lg -mt-64">
                            <div className="px-6">
                                <div className="flex flex-wrap justify-center">
                                    <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                        <div className="relative">
                                            <img
                                                alt="..."
                                                src={'https://source.unsplash.com/random/?portrait'}
                                                className="shadow-xl rounded-full h-[200px] w-[200px] align-middle border-none absolute xsm:ml-[-95px] -m-16 -ml-20 lg:-ml-[100px]"
                                                style={{ maxWidth: "190px" }}
                                            />
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-3 lg:text-right lg:self-center">
                                        <div className="py-6 px-3 mt-32 sm:mt-0">
                                            <button
                                                className="bg-pink-500 active:bg-pink-600 uppercase text-white font-bold hover:shadow-md shadow text-xs px-4 py-2 rounded outline-none focus:outline-none xsm:ml-[45px]  sm:mr-2 mb-1"
                                                type="button"
                                                style={{ transition: "all .15s ease" }}
                                            >
                                                Follow
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full lg:w-4/12 px-4 lg:order-1">
                                        <div className="flex justify-center py-4 lg:pt-4 pt-8">
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    10
                                                </span>
                                                <span className="text-sm text-gray-500">Followers</span>
                                            </div>
                                            <div className="mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    17
                                                </span>
                                                <span className="text-sm text-gray-500">Blogs</span>
                                            </div>
                                            <div className="lg:mr-4 p-3 text-center">
                                                <span className="text-xl font-bold block uppercase tracking-wide text-gray-700">
                                                    20
                                                </span>
                                                <span className="text-sm text-gray-500">Following</span>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="text-center mt-12">
                                    <h3 className="text-4xl font-semibold leading-normal mb-2 text-gray-800 text-center">
                                        Ranjan Sharma
                                    </h3>
                                    <div className="text-sm leading-normal mt-0 mb-2 text-gray-500 font-bold uppercase">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} className="mr-2 text-lg text-gray-500"></FontAwesomeIcon>
                                        Patna, Bihar
                                    </div>
                                    <div className="mt-0 mb-2 text-gray-700">
                                        <FontAwesomeIcon icon={faBriefcase} className="mr-2 text-lg text-gray-500"></FontAwesomeIcon>
                                        Freelance Writer &amp; Blogger
                                    </div>
                                    <div className="mb-2 text-gray-700">
                                        <FontAwesomeIcon icon={faUniversity} className="mr-2 text-lg text-gray-500"></FontAwesomeIcon>
                                        Hidayatullah National Law University, Raipur
                                    </div>
                                </div>
                                <div className="mt-10 py-10 border-t border-gray-300 text-center">
                                    <div className="flex justify-center font-bold">
                                        Favourite Quote
                                    </div>
                                    <div className="flex flex-wrap justify-center mt-2">
                                        <div className="w-full lg:w-9/12 px-4">
                                            <p className="mb-4 text-lg leading-relaxed text-gray-800">
                                                For everyone who asks receives, and everyone who searches finds, and for everyone who knocks, the door will be opened.<br />
                                                So if you sinful people know how to give good gifts to your children, how much more will your heavenly Father give good gifts to those who ask him.
                                            </p>
                                            <a
                                                href="#"
                                                className="font-normal text-pink-500"
                                                onClick={e => e.preventDefault()}
                                            >
                                                Show more
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

            <footer className="relative bg-gray-300 pt-8 pb-6">
                <div
                    className="bottom-auto top-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden -mt-20"
                    style={{ height: "80px" }}
                >
                    <svg
                        className="absolute bottom-0 overflow-hidden"
                        xmlns="http://www.w3.org/2000/svg"
                        preserveAspectRatio="none"
                        version="1.1"
                        viewBox="0 0 2560 100"
                        x="0"
                        y="0"
                    >
                        <polygon
                            className="text-gray-300 fill-current"
                            points="2560 0 2560 100 0 100"
                        ></polygon>
                    </svg>
                </div>
                <div className="container mx-auto px-4">
                    <div className="flex flex-wrap">
                        <div className="w-full lg:w-6/12 px-4">
                            <h4 className="text-3xl font-semibold">
                                Let's keep in touch!
                            </h4>
                            <h5 className="text-lg mt-0 mb-2 text-gray-700">
                                Find us on any of these platforms, and make sure to follow.
                            </h5>
                            <div className="mt-6">
                                <button
                                    className="bg-white text-blue-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faTwitter}
                                    ></FontAwesomeIcon>
                                </button>
                                <button
                                    className="bg-white text-blue-600 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faFacebook}
                                    ></FontAwesomeIcon>
                                </button>
                                <button
                                    className="bg-white text-pink-400 shadow-lg font-normal h-10 w-10 items-center justify-center align-center rounded-full outline-none focus:outline-none mr-2 p-3"
                                    type="button"
                                >
                                    <FontAwesomeIcon icon={faInstagram}
                                    ></FontAwesomeIcon>
                                </button>
                            </div>
                        </div>
                        <div className="w-full lg:w-6/12 px-4">
                            <div className="flex flex-wrap items-top mb-6">
                            </div>
                        </div>
                    </div>
                    <hr className="my-6 border-gray-400" />
                    <div className="flex flex-wrap items-center md:justify-between justify-center">
                        <div className="w-full md:w-4/12 px-4 mx-auto text-center">
                            <div className="text-sm text-gray-600 font-semibold py-1">
                                Copyright © {new Date().getFullYear()}{" "}{" "}
                                <a
                                    href="/law-scholars"
                                    className="text-gray-600 hover:text-gray-900"
                                >
                                    Law Scholars
                                </a>.
                            </div>
                        </div>
                    </div>
                </div>
            </footer>

        </>
    );
}
