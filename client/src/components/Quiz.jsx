import React, { useState } from 'react'

const Quiz = () => {

    const questions = [
        {
            questionText: "The Maxim 'Actus non facit rea nisi sit rea' means?",
            answerOptions: [
                { answerText: 'Crime has to be coupled with guilty mind', isCorrect: false },
                { answerText: 'There can be no crime without a guilty mind', isCorrect: true },
                { answerText: 'Crime is the result of guilty mind', isCorrect: false },
                { answerText: 'Criminal mind leads to crime', isCorrect: false },
            ],
        },
        {
            questionText: 'Section 84 of IPC provides for?',
            answerOptions: [
                { answerText: 'Legal insanity', isCorrect: true },
                { answerText: 'Medical insanity', isCorrect: false },
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
                { answerText: '511', isCorrect: true },
                { answerText: '512', isCorrect: false },
                { answerText: '515', isCorrect: false },
                { answerText: '520', isCorrect: false },
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
        <div name='quiz' className='app w-full bg-slate-100 bg-gradient-to-r from-cyan-500 to-blue-500 flex items-center justify-center'>
            <div className='max-w-[1240px] mx-auto'>
                <div className='text-center'>
                    <h2 className='text-5xl font-bold p-4'>Quiz Section</h2>
                    <p class="m-2 text-center text-gray-600 p-2">Let's put your knowledge to test</p>
                </div>
                <div class="quiz-container" id="quiz" className='bg-white rounded-lg shadow-lg w-full'>
                    {showScore ? (
                        <div className='score-section'>
                            You scored {score} out of {questions.length}
                        </div>
                    ) : (
                        <>
                            <div className='question-section'>
                                <div className='question-count'>
                                    <span>Question {currentQuestion + 1}</span>/{questions.length}
                                </div>
                                <div className='question-text'>{questions[currentQuestion].questionText}</div>
                            </div>
                            <div className='answer-section'>
                                {questions[currentQuestion].answerOptions.map((answerOption) => (
                                    <button onClick={() => handleAnswerOptionClick(answerOption.isCorrect)}>{answerOption.answerText}</button>
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