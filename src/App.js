import React from 'react';
import './App.css';
import Box from './Box'
import Counter from './Counter';
import Login from './Login';
import Counterbase from './Counterbase';
import Example from './Example';
import { readFromStorage, writeToStorage } from './Localstorage';
import Timer from './Timer';
import Timer1 from './Timer1';

const COUNTER_DISPLAYED = 'CounterDisplayed';

function App() {
  let [counter, setCounter] = React.useState(0);
  let flagFromStorage = readFromStorage(COUNTER_DISPLAYED);
  let [flag, setFlag] = React.useState(() => {
    flagFromStorage = JSON.parse(flagFromStorage);
    if (flagFromStorage == undefined) {
        return true;
    } else {
        return flagFromStorage;
      }
  });
  
  let shouldLocalStorageButtonBeDisabled = () => {
    if (flagFromStorage === null) {
      return "disabled";
    }
  }
  return (
    <div className="App">

      <Timer1/>
      {/* <Box rounded className="ThickBorder">
        <Box rectangle>
          Hello World
        </Box>
      </Box> */}

      {/* {flag && (
        <Counter
          counterCallback={(count) => {
            counter = count;
            setCounter(count);
          }}
        />
      )}
      <h1>The most recent value of the counter is : {counter}</h1>
      <button onClick={() => {
        // setFlag(!flag);
        // writeToStorage(COUNTER_DISPLAYED, !flag);
        setFlag(prevFlag => {
          let newFlag = !prevFlag;
          writeToStorage(COUNTER_DISPLAYED, newFlag);
          return newFlag;
        })
        }}>
          Toggle Counter
        </button><br/>
        <div className={"btn"}>
          <button id={"btn"} disabled={shouldLocalStorageButtonBeDisabled()} onClick={() => {
            localStorage.removeItem(COUNTER_DISPLAYED);
            }}
          >
            Clear Local Storage
          </button>
        </div>
      */}
      {/* <Counterbase/> */}

       {/* <Login/> */}

       {/* <Example/> */}
    </div>
  );
}

export default App;
