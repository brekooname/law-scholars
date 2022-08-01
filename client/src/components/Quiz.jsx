import React, { useState } from 'react'

const Quiz = () => {

    const questions = [
        {
            questionText: "The Maxim 'Actus non facit rea nisi sit rea' means?",
            answerOptions: [
                { answerText: 'There can be no crime without a guilty mind', isCorrect: true },
                { answerText: 'Crime has to be coupled with guilty mind', isCorrect: false },
                { answerText: 'Crime is the result of guilty mind', isCorrect: false },
                { answerText: 'Criminal mind leads to crime', isCorrect: false },
            ],
        },
        {
            questionText: 'Section 84 of IPC provides for?',
            answerOptions: [
                { answerText: 'Medical insanity', isCorrect: false },
                { answerText: 'Legal insanity', isCorrect: true },
                { answerText: 'Moral insanity', isCorrect: false },
                { answerText: 'Unsound insanity', isCorrect: false },
            ],
        },
        {
            questionText: 'Laying a trap is a part of',
            answerOptions: [
                { answerText: 'Preliminary inquiry', isCorrect: false },
                { answerText: 'Trial', isCorrect: false },
                { answerText: 'Investigation', isCorrect: true },
                { answerText: 'Inquiry', isCorrect: false },
            ],
        },
        {
            questionText: 'IPC is divided into how many sections?',
            answerOptions: [
                { answerText: '512', isCorrect: false },
                { answerText: '515', isCorrect: false },
                { answerText: '520', isCorrect: false },
                { answerText: '511', isCorrect: true },
            ],
        },
    ];

    const [currentQuestion, setCurrentQuestion] = useState(0);
    const [showScore, setShowScore] = useState(false);
    const [score, setScore] = useState(0);

    const handleAnswerOptionClick = (isCorrect) => {
        if (isCorrect) {
            setScore(score + 1);
        }

        const nextQuestion = currentQuestion + 1;
        if (nextQuestion < questions.length) {
            setCurrentQuestion(nextQuestion);
        } else {
            setShowScore(true);
        }
    };

    return (
        <div name='quiz' className='app w-full py-32 bg-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 relative items-center justify-center'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold p-3'>Quiz Section</h2>
                    <p class="text-center text-gray-600 p-2">Let's put your knowledge to test</p>
                </div>
                <div class="quiz-container" id="quiz" className='bg-white rounded-lg shadow-2xl w-full my-6 py-28'>
                    {showScore ? (
                        <div className='score-section text-center m-5'>
                            You scored {score} out of {questions.length}
                            {score > questions.length / 2 ? (
                                <div class="rating p-5 mx-4 py-28">
                                    <img src="https://media0.giphy.com/media/QWvra259h4LCvdJnxP/giphy.gif?cid=ecf05e477miawv5xxfdxax03lro8fzied4d9thwt55kmscix&rid=giphy.gif&ct=g"
                                        alt="Happy" className='max-w-[240px] max-h-[240px] cursor-pointer xsm:ml-[8%]  md:ml-[39%]' />
                                    <p className='text-green-500 my-4'>Damn! That was good!</p>
                                </div>
                            ) : (<>
                                {score === questions.length / 2 ? (
                                    <div class="rating p-4 mx-4 py-28">
                                        <img src="https://media1.giphy.com/media/j4l0mCdcTFRyY4Bc5s/giphy.gif?cid=ecf05e476g38ig2o1ygj8v5xkd0oo964pzj1p0dzowr4ie4q&rid=giphy.gif&ct=g"
                                            alt="Neutral" className='max-w-[240px] max-h-[240px] cursor-pointer xsm:ml-[8%]  md:ml-[39%]' />
                                        <p className='text-yellow-500 my-4'>That was decent!</p>
                                    </div>
                                ) : (
                                    <div class="rating p-4 mx-4 py-28">
                                        <img src="https://media2.giphy.com/media/xYJhVe7tIy8KUZCwkW/giphy.gif?cid=ecf05e4708ony0jdekbsf7oa6wto0o8u8g8sr5qped9p8fkf&rid=giphy.gif&ct=s"
                                            alt="Unhappy" className='max-w-[240px] max-h-[240px] cursor-pointer xsm:ml-[8%]  md:ml-[39%]' />
                                        <p className='text-red-500 my-4'>Try again!</p>
                                    </div>
                                )
                                }
                            </>)
                            }
                        </div>
                    ) : (
                        <>
                            <div className='question-section p-0'>
                                <div className='question-count p-2 text-center m-0'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text  p-4 text-center m-0 text-4xl'>{questions[currentQuestion].questionText}
                                </div>
                            </div>
                            <div className='answer-section py-4'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button className='p-3 block w-[50%] ml-[25%] rounded-md' onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
                                ))}
                            </div>
                        </>
                    )}

                </div>

            </div>
        </div>
    )
}

export default Quiz