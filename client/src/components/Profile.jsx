import React, { useState } from "react";
import logo from '../assets/new-law-scholars.png'

export default function Profile(props) {

    return (
        <>
            <nav
                className={
                    (props.transparent
                        ? "top-0 absolute z-50 w-full"
                        : "relative shadow-lg bg-white") +
                    " flex flex-wrap items-center justify-between px-2 py-3 "
                }
            ></nav>
        </>
    );
}
