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
        // {
        //     questionText: "The offense of theft becomes robbery when it is: ",
        //     answerOptions: [
        //         {
        //             answerText: " Coupled with force",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Coupled with imminent danger to life.",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: " Committed by five or more persons",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Committed by two or more but less than five persons",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: " A obtains property from B by saying that “your child is in the hands of my gang and will be put to death unless you send us ten lac rupees”. A commits...",
        //     answerOptions: [
        //         {
        //             answerText: "Criminal breach of trust",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "Robbery",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "Extortion",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: "Theft",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: "Which one of the following statements correctly defines the offense of criminal breach of trust? ",
        //     answerOptions: [
        //         {
        //             answerText: " Whoever dishonestly misappropriated any property for his own use, is guilty of criminal breach of trust",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "  Whoever is entrusted with the dominion of property dishonestly converts it as his property is guilty of criminal breach of trust.",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: "Whoever uses any movable property in violation of law or legal contract commits criminal breach of trust.",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "None of the above.",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: "The offense of theft becomes robbery when it is: ",
        //     answerOptions: [
        //         {
        //             answerText: " Coupled with force",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Coupled with imminent danger to life.",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: " Committed by five or more persons",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Committed by two or more but less than five persons",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: "Which one of the following is associated with Common intention?",
        //     answerOptions: [
        //         {
        //             answerText: "  Similar intention",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Premeditated concert",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Same intention",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Unanimous decision in a meeting to do a particular act",
        //             isCorrect: true
        //         }
        //     ],
        // },
        // {
        //     questionText: "When a criminal act is done by several persons in furtherance of the common intention of all each one of them is liable: ",
        //     answerOptions: [
        //         {
        //             answerText: "For an attempt to commit the act",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Only for the part, each one has done",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "  For an abetment to commit the act",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " As if it was done by each one of them in a singular capacity",
        //             isCorrect: true
        //         }
        //     ],
        // },
        // {
        //     questionText: "The principle of proximity to the crime under criminal law is irrelevant while deciding the homicide and murder: ",
        //     answerOptions: [
        //         {
        //             answerText: " Kidnapping and abduction",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Theft and dacoity",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Abetment and conspiracy ",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: "  Culpable homicide and murder",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: "Which one of the following statements correctly distinguishes theft from extortion?",
        //     answerOptions: [
        //         {
        //             answerText: "In extortion, there is dishonest intention whereas in theft it is not there.",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "  In theft, there is dishonest intention whereas in extortion it is not there.",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " In theft, there is taking of property whereas in extortion there is the delivery of property. ",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: " In theft, there is dishonest intention, whereas in extortion it is fraudulent intention.",
        //             isCorrect: false
        //         }
        //     ],
        // },
        // {
        //     questionText: "If Actus non facit reum nisi mens sit rea is a cardinal principle of criminal law, then which one of the following statements correctly reflects the above principle? ",
        //     answerOptions: [
        //         {
        //             answerText: " CTo constitute a crime there must be actus reus and mens rea",
        //             isCorrect: true
        //         },
        //         {
        //             answerText: " Mens rea is an essential element of a crime and there cannot be a crime without mens rea.",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: " Criminal liability under Indian Law always implies mens rea",
        //             isCorrect: false
        //         },
        //         {
        //             answerText: "  None of the Above.",
        //             isCorrect: false
        //         }
        //     ],
        // }
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