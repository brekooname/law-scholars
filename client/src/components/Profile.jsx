import React, { useState } from "react";
import logo from '../assets/new-law-scholars.png'
export default function Index() {
    const [show, setShow] = useState(false);

    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Profile Page</h2>
                </div>
            </div>
        </div>
    );
}
