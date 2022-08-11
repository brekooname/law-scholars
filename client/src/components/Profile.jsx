import React, { useState } from "react";
import { Link as LinkPage } from 'react-router-dom'

import logo from '../assets/new-law-scholars.png'
import pp from '../assets/new-logo.png'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import {
    faBars,
    faBell,
    faGear,
    faRightFromBracket,

} from "@fortawesome/free-solid-svg-icons";


export default function Profile(props) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav transparent
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
                                                className="shadow-xl rounded-full h-[200px] w-[200px] align-middle border-none absolute xsm:ml-[-108px] -m-16 -ml-20 lg:-ml-16"
                                                style={{ maxWidth: "200px" }}
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            </main>

        </>
    );
}
