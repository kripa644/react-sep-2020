import React, {useState, useEffect} from 'react';
import './Timer.css';

const Timer = () => {
    const [counter, setCounter] = useState(0);
    const [isActive, setIsActive] = useState(false);

    useEffect(() => {
        let interval = null;
        if(isActive) {
            interval = setInterval(() => {
                setCounter(counter => counter + 1);
                }, 1000);
        } 
        else if (!isActive){
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isActive]);

    function reset() {
        setCounter(0);
        setIsActive(false);

    }

    // function pause() {
    //     clearInterval(interval);
    // }
    return (
        <div>
            <h1>count: {counter}</h1>
            <button className={"btn"} onClick={reset}>
                Reset
            </button>
            <button className={"btn"} onClick={() => {
                setIsActive(false);
            }}>
                Pause
            </button>
            <button onClick={() => {
                setIsActive(true);
            }}>
                Start
            </button>
    </div>
    );

}

export default Timer;