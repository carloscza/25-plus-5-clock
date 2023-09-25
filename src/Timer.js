import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Clock.scss';
import { useClockContext } from './context';

export default function Timer()
{
    const { timer } = useClockContext();
    return (
        <>
            <div id="time-left" className="timer">
                <label id="timer-label">Session</label>
                <p id="time-left">{timer + ":11"}</p>
            </div>
            <div>
                <button className='timer-control'><i className='fa-solid fa-play'></i><i className='fa-solid fa-pause'></i></button>
                <button className='timer-control'><i className='fa-solid fa-arrows-rotate'></i></button>
            </div>
        </>
    );
}