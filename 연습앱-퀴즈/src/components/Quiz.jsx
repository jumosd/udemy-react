import React, { useState } from 'react';

import QUESTIONS from '../questions'

import { useCallback } from 'react';
import { css } from 'styled-components';
import Question from './Question';
import Summary from './Summary';

const Quiz = () => {
    const [answerState, setAnswerState] = useState('')
    const [userAnswers, setUserAnswers] = useState([])
    console.log(userAnswers)
    // handleSeclectAnswer() 함수가 작동하게되면 1초후에 정답과 오답으로 나뉘어지게 되어있는데 userAnswers 상태는 handleSeclectAnswer()함수를 실행시키자마자 바로 상태값이 변화됨.그래서 숫자를 맞추기위해 -1한값이 있어야함
    const activeQuestionIndex = answerState === '' ? userAnswers.length : userAnswers.length - 1
    const quizIsComplete = activeQuestionIndex === QUESTIONS.length

    //답변선택시 답변
    const handleSelectAnswer = useCallback((selectedAnswer) => {
        // @ts-ignore
        setUserAnswers(prevSelectedAnswer => [...prevSelectedAnswer, selectedAnswer])

    }, [])

    const handleSkipAnswer = useCallback(() => handleSelectAnswer(null), [handleSelectAnswer])


    if (quizIsComplete) {
        return (
            <Summary userAnswers={userAnswers} />
        )
    }

    return (
        <div id='quiz'>
            <Question
                key={activeQuestionIndex}
                index={activeQuestionIndex}
                onSelectAnswer={handleSelectAnswer}
                onSkipAnswer={handleSkipAnswer}
            />
        </div >
    );
};

export default Quiz;