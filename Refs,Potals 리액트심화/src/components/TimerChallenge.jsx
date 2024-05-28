import React, { useState } from 'react';

const TimerChallenge = ({ title, targetTime }) => {
    const [timerStarted, setTimerStarted] = useState(false)
    const [timerExpired, setTimerExpired] = useState(false)

    const handleStart = () => {
        setTimerStarted(true)
        setTimeout(() => {
            setTimerExpired(true)
        }, targetTime * 1000)
    }
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            {timerExpired && <p>실패 했어요!</p>}
            <p className='challengs-time'>
                {targetTime}초
            </p>
            <p>
                <button onClick={handleStart}>
                    {timerStarted ? '멈춤' : '시작'}
                </button>
            </p>

            <p className={timerStarted ? 'active' : undefined}>
                {timerStarted ? "타이머를시작합니다." : "타이머가중단되었습니다."}
            </p>

        </section>
    );
};

export default TimerChallenge;