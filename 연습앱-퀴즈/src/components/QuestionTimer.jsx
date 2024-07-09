import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

const QuestionTimer = ({ timeout, onTimeout, mode }) => {
    const [remainingTime, setRemainingTime] = useState(0)

    useEffect(() => {
        const timer = setTimeout(onTimeout, timeout)
        return () => clearTimeout(timer)
    }, [onTimeout, timeout])

    useEffect(() => {
        const interval = setInterval(() => {
            setRemainingTime(prevTime => {

                if (prevTime > timeout) {
                    return
                } else {
                    return prevTime + 10
                }
            })
        }, 10)
        return () => clearInterval(interval)
    }, [])
    return (
        <progress id="question-time" value={remainingTime} max={timeout} className={mode} />
    );
};

export default QuestionTimer;