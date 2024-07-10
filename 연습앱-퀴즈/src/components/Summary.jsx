// @ts-nocheck
import React from 'react';
import quizCompleteImg from '../assets/quiz-complete.png'
import QUESTION from '../questions'
import { css } from 'styled-components';


const Summary = ({ userAnswers }) => {

    const skippedAnswer = userAnswers.filter(answer => answer === null)
    const correctedAnswer = userAnswers.filter((answer, index) => answer === QUESTION[index].answers[0])

    const skippedAnswerRate = Math.round(skippedAnswer.length / userAnswers.length * 100)
    const correctedAnswerRate = Math.round(correctedAnswer.length / userAnswers.length * 100)
    const wrongAnswerRate = 100 - skippedAnswerRate - correctedAnswerRate


    return (
        <div id='summary'>
            <img src={quizCompleteImg} alt="" />
            <h2>Quiz Completed</h2>
            <div id='summary-stats'>
                <p>
                    <span className='number'>{skippedAnswerRate}%</span>
                    <span className='text'>스킵율</span>
                </p>
                <p>
                    <span className='number'>{correctedAnswerRate}%</span>
                    <span className='text'>정답율</span>
                </p>
                <p>
                    <span className='number'>{wrongAnswerRate}%</span>
                    <span className='text'>오답율</span>
                </p>
            </div>
            <ol>
                {userAnswers.map((answer, index) => {
                    let cssClass = 'user-answer'
                    if (answer === null) {
                        cssClass += ' skipped'
                    } else if (answer === QUESTION[index].answers[0]) {
                        cssClass += ' correct'
                    } else {
                        cssClass += ' wrong'
                    }
                    //key값을 index 로주는것을 위험하지만 현재 컴포넌트는  리렌더링이 일어날 일이 없으므로 index를 사용하였다.
                    return (
                        <li key={index}>
                            <h3>{index + 1}</h3>
                            <p className='question'>{QUESTION[index].text}</p>
                            <p className={cssClass}>{answer ?? '건너뜀'}</p>
                        </li>)
                })}
            </ol>
        </div>
    );
};

export default Summary;