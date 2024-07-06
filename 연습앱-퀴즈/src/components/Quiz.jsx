import React from 'react';
import { useState } from 'react';
import QUESTIONS from '../questions'
import quizCompleteImg from '../assets/quiz-complete.png'
import QuestionTimer from './QuestionTimer';
import { useCallback } from 'react';

const Quiz = () => {
    const [userAnswers, setUserAnswers] = useState([])

    const activeQuestionIndex = userAnswers.length
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    const handleSeclectAnswer = useCallback((selectedAnswer) => {
        setUserAnswers(prevSelectedAnswer => [...prevSelectedAnswer, selectedAnswer])
    })

    const handleSkipAnswer = useCallback(() => handleSeclectAnswer(null), [handleSeclectAnswer])


    if (quizIsComplete) {
        return (
            <div id='summary'>
                <img src={quizCompleteImg} alt="" />
                <h2>Quiz Completed</h2>
            </div>
        )
    }
    const shuffledAnswers = [...QUESTIONS[activeQuestionIndex].answers];
    shuffledAnswers.sort(() => Math.random() - 0.5)
    return (
        <div id='quiz'>
            <div id='question'>
                <QuestionTimer timeout={10000} onTimeout={handleSkipAnswer}></QuestionTimer>
                <h2>{QUESTIONS[activeQuestionIndex].text}</h2>
                <ul id='answers'>
                    {shuffledAnswers.map((answer) => (
                        <li key={answer} className='answer'>
                            <button onClick={() => handleSeclectAnswer(answer)}>{answer}</button>
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Quiz;