import React, {useState} from 'react';
import './Counter.css';
import Proptypes from 'prop-types';

const Counterbase = ({counterBase, lowerLimit, upperLimit}) => {
    let [count, setCount] = useState(0);
    let [multiplier, setMultiplier] = useState(10);
    [lowerLimit] = useState(0);
    [upperLimit] = useState(10);
    return (
        <div className="Counter">
            <button 
                onClick={() => {
                    counterBase = count-1;
                    if(count <= upperLimit && count > lowerLimit) {
                        console.log('- clicked', count);
                        setCount(counterBase);
                    }
                }}
            > 
                - 
            </button>
            <div className="Label">{count * multiplier}</div>
            <button 
                onClick={() => {
                    counterBase = count + 1;
                    if(count < upperLimit && count >= lowerLimit) {
                        console.log('+ clicked', count);
                        setCount(counterBase);
                    }
                 }}
            > 
                +
            </button>
            <div className="Multiplier">
                 <label htmlFor="multiplier">Multiplier</label>
                 <input
                    onChange={(event) => {
                        console.dir(event.target.value);
                        setMultiplier(Number(event.target.value));
                    }}
                    type="text"
                    id="multiplier"
                    name="multiplier"
                    defaultValue={multiplier}
                 />
            </div>
        </div>
    );
};

const propTypes = {
    counterBase: Proptypes.number,
    upperLimit: Proptypes.number,
    lowerLimit: Proptypes.number,
};
// Proptypes.checkPropTypes(propTypes, Counterbase, 'counterBase', 'lowerLimit', 'upperLimit');
export default Counterbase;