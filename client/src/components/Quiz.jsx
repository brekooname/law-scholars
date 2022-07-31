import React from 'react'

const Quiz = () => {

    const quizData = [
        {
            question: "The Maxim 'Actus non facit rea nisi sit rea' means?",
            a: "Crime has to be coupled with guilty mind",
            b: "There can be no crime without a guilty mind",
            c: "Crime is the result of guilty mind",
            d: "Criminal mind leads to crime",
            correct: "b",
        },
        {
            question: "Section 84 of IPC provides for",
            a: "Legal insanity",
            b: "Medical insanity",
            c: "Moral insanity",
            d: "Unsound insanity",
            correct: "a",
        },
        {
            question: "Laying a trap is a part of",
            a: "Preliminary inquiry",
            b: "Trial",
            c: "Investigation",
            d: "Inquiry",
            correct: "c",
        },
        {
            question: "IPC is divided into how many sections?",
            a: "511 sections",
            b: "512 sections",
            c: "515 sections",
            d: "520 sections",
            correct: "a",
        },
    ];

    return (
        <div name='quiz' className='w-full my-32 bg-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center h-full m-0'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold'>Quiz Section</h2>
                    <p class="mt-3 text-center text-gray-600">Let's put your knowledge to test</p>
                </div>
                <div class="quiz-container" id="quiz" className='bg-white rounded-lg shadow-lg w-full'>
                    <div class="quiz-header p-16">
                        <h2 id="question" className='p-4 text-center m-0'>Question text</h2>
                        <ul className='list-none p-0'>
                            <li className='text-lg p-4 border-b m-4 hover:border-b-red-500 active:border-b-blue-400'>
                                <input type="radio" name="answer" id="a" class="answer" />
                                <label for="a" id="a_text" classname="cursor-pointer ">Question</label>
                            </li>

                            <li className='text-lg p-4 border-b m-4 hover:border-b-red-500 active:border-b-blue-400'>
                                <input type="radio" name="answer" id="b" class="answer" />
                                <label for="b" id="b_text" classname="cursor-pointer ">Question</label>
                            </li>

                            <li className='text-lg p-4 border-b m-4 hover:border-b-red-500 active:border-b-blue-400'>
                                <input type="radio" name="answer" id="c" class="answer" />
                                <label for="c" id="c_text" classname="cursor-pointer ">Question</label>
                            </li>

                            <li className='text-lg p-4 border-b m-4 hover:border-b-red-500 active:border-b-blue-400'>
                                <input type="radio" name="answer" id="d" class="answer" />
                                <label for="d" id="d_text" classname="cursor-pointer ">Question</label>
                            </li>
                        </ul>
                    </div>
                    <button id="submit" className='bg-sky-600 border-none block w-full cursor-pointer text-lg text-inherit p-5 focus:outline-none focus:bg-blue-700 hover:border-none hover:bg-blue-700'>Submit</button>
                </div>
            </div>
        </div>
    )
}

export default Quiz