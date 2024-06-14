import React, { useState, useRef, useEffect } from 'react';
import ResultModal from './ResultModal';


const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const dialog = useRef()
    const [timeRemaining, setTimeRemaining] = useState(targetTime * 1000)

    const timerIsActive = timeRemaining > 0 && timeRemaining < targetTime * 1000

    if (timeRemaining <= 0) {
        clearInterval(timer.current)
        dialog.current.open()
    }
    const handleStart = () => {
        timer.current = setInterval(() => {
            setTimeRemaining(prevTimeRemaining => prevTimeRemaining - 10)
        }, 10)
    }
    const handleStop = () => {
        clearInterval(timer.current)
        dialog.current.open()
    }
    const handleReset = () => {
        setTimeRemaining(targetTime * 1000)
    }

    return (
        <>
            <ResultModal
                ref={dialog}
                result='졌음'
                targetTime={targetTime}
                remainingTime={timeRemaining}
                onReset={handleReset} />

            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challengs-time'>
                    {targetTime}초
                </p>
                <p>
                    <button onClick={timerIsActive ? handleStop : handleStart}>
                        {timerIsActive ? '멈춤' : '시작'}
                    </button>
                </p>

                <p className={timerIsActive ? 'active' : undefined}>
                    {timerIsActive ? "타이머를시작합니다." : "타이머가중단되었습니다."}
                </p>

            </section>
        </>
    );
};

export default TimerChallenge;