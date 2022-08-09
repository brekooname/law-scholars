import React, { useState } from "react";
import { Link } from 'react-router-dom'

import logo from '../assets/new-law-scholars.png'

import {
    FontAwesomeIcon
} from '@fortawesome/react-fontawesome'

import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Profile(props) {

    const [navbarOpen, setNavbarOpen] = React.useState(false);

    return (
        <>
            <nav
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "relative shadow-lg bg-white") +
                    " flex flex-wrap items-center justify-between px-2 py-3 "
                }
            >
                <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
                    <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
                        <Link to="/law-scholars"
                            className={
                                (props.transparent ? "text-white" : "text-gray-800") +
                                " text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase"
                            }
                        >
                            Law Scholars
                        </Link>
                        <button
                            className="cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
                            type="button"
                            onClick={() => setNavbarOpen(!navbarOpen)}
                        >
                            <FontAwesomeIcon className="h-6 text-blue-500 mr-2" icon={faBars} />
                        </button>
                    </div>
                </div>
            </nav>
        </>
    );
}
