import React from 'react'

const About = () => {
    return (
        <div name='about' className='w-full my-32'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Trusted by Attorneys all around the world</h2>
                    <p className='text-3xl py-6 text-gray-500'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum placeat assumenda nostrum sed, voluptatem nesciunt sit fuga illo totam provident non a, quam nihil est.</p>
                </div>

                <div className='grid md:grid-cols-3 gap-6 px-4 text-center'>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-blue-500 cursor-pointer'>10k</p>
                        <p className='text-gray-400 mt-2'>Happy Users</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-blue-500 cursor-pointer'>24/7</p>
                        <p className='text-gray-400 mt-2'>Consultancy</p>
                    </div>
                    <div className='border py-8 rounded-xl shadow-xl'>
                        <p className='text-6xl font-bold text-blue-500 cursor-pointer'>100%</p>
                        <p className='text-gray-400 mt-2'>Anonymous</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default About