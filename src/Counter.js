import './Counter.css';
import React, {useState, useEffect} from 'react';
import PropTypes from 'prop-types';
import { readFromStorage, writeToStorage } from './Localstorage';

import { useLocalStorageState } from './useLocalStorageState';

const COUNT = 'Count';
const Counter = ({counterCallback}) => {

   

    //Use lazy initialisation via a initialisation function as an argument to setState
    // rather than the actual value
    //let [count, setCount] = useState(0);
    // let [count, setCount] = useState(() => readFromStorage(COUNT) || 0); //useState(readFromStorage(COUNT) || 0); this was before (instaed of this use below line)
    
    let [count, setCount] = useLocalStorageState(0, COUNT);
    let [multiplier, setMultiplier] = useState(5);

    useEffect(() => {
        console.log("* component is rendered");
        return () => {
            console.log("$ component is unmounted");
        };
    },[]);

    useEffect(() => {
        document.title = `You clicked ${count} times`;
    },[count])
    return(
        <div className="Counter">
            <button onClick={() => {
                count = count - 1;
                console.log('- clicked', count)
                setCount(count);
                // writeToStorage(COUNT, count);
                counterCallback && counterCallback(count); 
            }}>
                -
            </button>

            <div className="Label">
               {count * multiplier}
            </div>

            <button onClick={() => {
                count = count + 1;
                console.log('+ clicked', count);
                setCount(count);
                // writeToStorage(COUNT, count);
                counterCallback && counterCallback(count);
            }}>
                +
            </button>
            <div className = "Multiplier">
                <label htmlFor = "multiplier">Multiplier</label>
                <input onChange={(event) => {
                        console.dir(event.target.value);
                        setMultiplier(Number(event.target.value));
                    }}type="text" id="multiplier" name="multiplier" defaultValue={multiplier}/>
            </div>
        </div>
    );
}

Counter.propTypes = {
    counterCallback : PropTypes.func,

}
export default Counter; 