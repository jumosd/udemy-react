import React, { useState, useRef } from 'react';
import ResultModal from './ResultModal';


const TimerChallenge = ({ title, targetTime }) => {
    const timer = useRef()
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = () => {
        timer.current = setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
        setTimerStarted(true)
    }
    const handleStop = () => {
        clearTimeout(timer.current)
    }

    return (
        <>
            {timerExpired && <ResultModal result='졌음' targetTime={targetTime} />}

            <section className='challenge'>
                <h2>{title}</h2>
                <p className='challengs-time'>
                    {targetTime}초
                </p>
                <p>
                    <button onClick={timerStarted ? handleStop : handleStart}>
                        {timerStarted ? '멈춤' : '시작'}
                    </button>
                </p>

                <p className={timerStarted ? 'active' : undefined}>
                    {timerStarted ? "타이머를시작합니다." : "타이머가중단되었습니다."}
                </p>

            </section>
        </>
    );
};

export default TimerChallenge;