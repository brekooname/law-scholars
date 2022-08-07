import React, { useState } from "react";

export default function Index() {
    const [show, setShow] = useState(false);

    return (
        <div className="bg-gray-50">
            <div className="bg-white xl:hidden flex text-gray-800  hover:text-black focus:outline-none focus:text-black justify-between w-full p-6 items-center ">
                <button className="flex justify-between  items-center space-x-3 bg-transparent text-black border-none hover:bg-transparent">
                    <p className="text-2xl leading-6 ">Law Scholars</p>
                </button>
            </div>
        </div>
    );
}
