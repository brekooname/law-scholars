import React from "react";

const Registration = () => {
    return (
        <div name='registration' className='w-full my-44'>
            <div className='max-w-[1240px] mx-auto'>

                <section class="w-full px-6 py-4 mx-auto bg-zinc-100 rounded-md shadow-xl">
                    <h2 class="text-5xl font-bold text-center text-gray-800">Registration</h2>
                    <p class="mt-3 text-center text-gray-600">Lorem ipsum dolor sit amet consectetur, adipisicing elit.</p>

                    <div class="grid grid-cols-1 gap-6 mt-6 sm:grid-cols-2 md:grid-cols-3">
                        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md hover:bg-blue-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                            </svg>

                            <span class="mt-2">Lucknow, Uttar Pradesh, India</span>
                        </a>

                        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md  hover:bg-blue-200">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                            </svg>

                            <span class="mt-2">+91 6942042069</span>
                        </a>

                        <a href="#" class="flex flex-col items-center px-4 py-3 text-gray-700 transition-colors duration-200 transform rounded-md  hover:bg-blue-200 ">
                            <svg class="w-5 h-5" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>

                            <span class="mt-2">some@email.com</span>
                        </a>
                    </div>

                    <div class="mt-6 ">
                        <div class="items-center -mx-2 md:flex">
                            <div class="w-full mx-2">
                                <label class="block mb-2 text-sm font-medium text-gray-600">Name</label>

                                <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder="Rachel Peoske"/>
                            </div>

                            <div class="w-full mx-2 mt-4 md:mt-0">
                                <label class="block mb-2 text-sm font-medium text-gray-600">E-mail</label>

                                <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300 focus:outline-none focus:ring focus:ring-opacity-40" type="email" placeholder="rachel@email.com"/>
                            </div>
                        </div>
                        <div class="items-center -mx-2 md:flex mt-4">
                            <div class="w-full mx-2">
                                <label class="block mb-2 text-sm font-medium text-gray-600 ">College</label>

                                <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40" type="text" placeholder="Hindu University"/>
                            </div>

                            <div class="w-full mx-2 mt-4 md:mt-0">
                                <label class="block mb-2 text-sm font-medium text-gray-600 ">Year of Study</label>

                                <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40" type="number" placeholder="5"/>
                            </div>
                        </div>
                        <div class="items-center -mx-2 md:flex mt-4">

                            <div class="w-full mx-2 mt-4 md:mt-0">
                                <label class="block mb-2 text-sm font-medium text-gray-600 ">Enrolled in the bar?</label>

                                <input class="block w-full px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500 focus:ring-blue-300  focus:outline-none focus:ring focus:ring-opacity-40" type="number" placeholder="Year of Enrollment" />
                            </div>
                        </div>

                        <div class="w-full mt-4">
                            <label class="block mb-2 text-sm font-medium text-gray-600 ">Reason for visiting Law Scholars</label>

                            <textarea class="block w-full h-40 px-4 py-2 text-gray-700 bg-white border rounded-md focus:border-blue-500  focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-40" placeholder="I like this so much!"></textarea>
                        </div>

                        <div class="flex justify-center mt-6">
                            <button class="px-4 py-2 text-white transition-colors duration-200 transform bg-gray-700 rounded-md hover:bg-gray-600 focus:outline-none focus:bg-gray-600">Submit</button>
                        </div>
                    </div>
                </section>
            </div>
        </div>

    )
}

export default Registration