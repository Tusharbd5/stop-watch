import React from 'react';
import './Timer.css';

const Timer = (props) => {

    const { hour, minute, second, milisecond } = props.time;
    const handleStart = props.handleStart;
    const handleStop = props.handleStop;
    const handleReset = props.handleReset;
    const status = props.status;
    return (
        <div className='display'>
            <div className='display-time'>
                <span>{(hour >= 10) ? hour : "0" + hour} :</span>
                <span>{(minute >= 10) ? minute : "0" + minute} :</span>
                <span>{(second >= 10) ? second : "0" + second} :</span>
                <span>{(milisecond >= 10) ? milisecond : "0" + milisecond}</span>
            </div>
            <div className='buttons'>
                {(status === 0) ? <button className='button' onClick={handleStart}>START</button> : <button className='dis-button' disabled>START</button>}
                <button className='button' onClick={handleReset}>RESET</button>
                <button className='button' onClick={handleStop}>STOP</button>
            </div>
        </div>
    );
};

export default Timer;