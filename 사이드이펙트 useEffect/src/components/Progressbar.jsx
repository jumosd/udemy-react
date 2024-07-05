import React, { useState, useEffect } from 'react';

const Progressbar = ({ Timer, }) => {
    const [remainingTime, setRemainingTime] = useState(Timer)
    useEffect(() => {

        const interval = setInterval(() => {
            setRemainingTime(prevTime => prevTime - 10)
        }, 10)
        return () => {
            clearInterval(interval)
        }
    }, [])

    return (
        <div>
            <progress value={remainingTime} max={Timer} />
        </div>
    );
};

export default Progressbar;