import {useState, useEffect} from 'react';

const useTimer = (initialState = 0) => {
    const [counter, setCounter] = useState(initialState);
    const [isActive, setIsActive] = useState(false);

    let interval = null;
    const handleStart = () => {
        setIsActive(true);
    };

    const handlePause = () => {
        setIsActive(false);
    }

    const handleReset = () => {
        // clearInterval(interval);
        setIsActive(false);
        setCounter(0);
    }

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

    return { counter, handleStart, handlePause, handleReset};
}

export default useTimer;