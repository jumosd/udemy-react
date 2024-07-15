import React from 'react';
import { useState } from 'react';

const ConfigureCounter = ({ onSet }) => {
    const [enteredNumber, setEnteredNumber] = useState(0)

    function handleChange(event) {
        setEnteredNumber(+event.target.value);
    }
    return (
        <section id="configure-counter">
            <h2>Set Counter</h2>
            <input type="number" onChange={handleChange} value={enteredNumber} />
            <button onClick={() => onSet(enteredNumber)}>Set</button>
        </section>
    );
};

export default ConfigureCounter;