import React, { useState, useEffect } from 'react';

const Progressbar = ({ timer, }) => {
    const [remainingTime, setRemainingTime] = useState(timer)
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
            <progress value={remainingTime} max={timer} />
        </div>
    );
};

export default Progressbar;