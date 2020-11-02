import React, { useState, useEffect } from 'react';
import './Counter.css';
import {readFromStorage, writeToStorage} from './Localstorage';

const COUNT = 'Count';

function Example() {
  // let [count, setCount] = useState(0);
  let [count, setCount] = useState(() => readFromStorage(COUNT) || 0);

  useEffect(() => {
    document.title = `count is: ${count}`;
  }, [count]);

//console.log(localStorage.getItem("count"));

  return (
    <div className="Counter">
      <button 
        onClick={() => {
            count--;
            setCount(count);
            // localStorage.setItem("count", count);
            writeToStorage(COUNT, count);
        }}>
        -
      </button>
      <div className="Label">{count}</div>
      <button 
        onClick={() => {
            count++;
            setCount(count);
            // localStorage.setItem("count", count);
            writeToStorage(COUNT, count);
        }}>
        +
      </button>
    </div>
  );
}

export default Example;