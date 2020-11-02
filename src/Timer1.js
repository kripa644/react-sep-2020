import React, { useEffect } from 'react';
import './Timer.css';
import useTimer from './useTimer';

const Timer1 = () => {
    const {counter, handleStart, handlePause, handleReset, handleButtonPressed} = useTimer(0);

    // useEffect(() => {
    //     handleButtonPressed();
    //     return () => clearInterval(interval);
    // })
    
    return (
        <div>
            <h1>count: {counter}</h1>
            <button className={"btn"} onClick={handleReset}>
                Reset
            </button>
            <button className={"btn"} onClick={handlePause}>
                Pause
            </button>
            <button onClick={handleStart}>
                Start
            </button>
    </div>
    );
}

export default Timer1;