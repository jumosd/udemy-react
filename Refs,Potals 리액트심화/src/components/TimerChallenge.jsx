import React from 'react';

const TimerChallenge = ({ title, targetTime }) => {
    return (
        <section className='challenge'>
            <h2>{title}</h2>
            <p className='challengs-time'>
                {targetTime}초
            </p>
            <p>
                <button>시작</button>
            </p>

            <p className=''>
                타이머를시작합니다/타이머가중단되었습니다.
            </p>

        </section>
    );
};

export default TimerChallenge;