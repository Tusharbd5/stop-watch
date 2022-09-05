import React, { useState } from 'react';
import Timer from '../Timer/Timer';
import './Function.css';

const Functions = () => {
    const [time, setTime] = useState({ hour: 0, minute: 0, second: 0, milisecond: 0 });
    const [interV, setInterV] = useState();
    const [status, setStatus] = useState(0);

    const handleStart = () => {
        run();
        setInterV(setInterval(run, 10));
        setStatus(1);
    }
    const handleStop = () => {
        clearInterval(interV);
        setStatus(0)
    }
    const handleReset = () => {
        clearInterval(interV);
        setStatus(0);
        setTime({ hour: 0, minute: 0, second: 0, milisecond: 0 });
    }

    let updatedHour = time.hour, updatedMinute = time.minute, updatedSecond = time.second, updatedMilisecond = time.milisecond;

    const run = () => {
        if (updatedMinute === 60) {
            updatedHour++;
            updatedMinute = 0;
        }
        if (updatedSecond === 60) {
            updatedMinute++;
            updatedSecond = 0;
        }
        if (updatedMilisecond === 100) {
            updatedSecond++;
            updatedMilisecond = 0;
        }
        updatedMilisecond++;
        return setTime({ hour: updatedHour, minute: updatedMinute, second: updatedSecond, milisecond: updatedMilisecond });
    }
    return (
        <div className='function'>
            <div>
                <h1>STOP WATCH</h1>
            </div>
            <Timer time={time}
                handleStart={handleStart}
                handleStop={handleStop}
                handleReset={handleReset}
                status={status}
                setStatus={setStatus}>
            </Timer>
        </div>
    );
};

export default Functions;