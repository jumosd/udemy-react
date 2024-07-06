import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeout }) => {
    const [remainingTime, setRemainingTime] = useState(timeout)

    useEffect(() => {

        setTimeout(onTimeout, timeout)
    }, [onTimeout, timeout])

    useEffect(() => {
        setInterval(() => {
            setRemainingTime(prevTime => prevTime - 100)
        }, 100)
    }, [])
    return (
        <progress id="question-time" value={remainingTime} max={timeout} />
    );
};

export default QuestionTimer;