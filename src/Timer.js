import React from 'react';
import '@fortawesome/fontawesome-free/css/all.css';
import './Clock.scss';
import { useClockContext } from './context';

export default function Timer()
{
    const { state, setState, initialState } = useClockContext();
    
    React.useEffect( () => 
    { 
        if (state.timerState)
        {
           const timerCountDown = setInterval( () => 
            {
                setState( (prevState) => ({...prevState, currTime: prevState.timer-1 < 0 && prevState.seconds-1 < 0 ? !prevState.currTime : prevState.currTime, timer: prevState.timer-1 < 0 && prevState.seconds-1 < 0 ? prevState.currTime ? prevState.breakLength : prevState.sessionLength : prevState.seconds === 0 ? prevState.timer-1 : prevState.timer, seconds: prevState.timer === 0 && prevState.seconds === 0 ? 0 : prevState.seconds-1 < 0 ? 59 : prevState.seconds-1}));
            }, 1000);

            return () => { clearInterval(timerCountDown); }
        }
    }, [state.timerState, setState]);

    const handleRefreshClick = () =>
    {
        document.getElementById('beep').pause();
        document.getElementById('beep').currentTime = 0;
        setState(initialState); 
    };

    const handlePlayPauseClick = () =>
    {
        setState( (prevState) => ({...prevState, timerState: !prevState.timerState}) );
    };

    const extraSecZero = state.seconds <= 9 ? "0" : "";
    const extraMinZero = state.timer < 10 && state.timer > -1 ? "0" : '';
    const timeName = state.currTime ? "Session" : "Break";
    const timerStyle = state.timer === 0 ? {color: "red"} : {};

    if ( state.timer === 0 && state.seconds === 0 )
        document.getElementById("beep").play();

    return (
        <>
            <div className="timer">
                <label id="timer-label">{timeName}</label>
                <p id="time-left" style={timerStyle}>{extraMinZero + state.timer + ":" + extraSecZero + state.seconds}</p>
                <audio id='beep' src='https://raw.githubusercontent.com/freeCodeCamp/cdn/master/build/testable-projects-fcc/audio/BeepSound.wav'></audio>
            </div>
            <div>
                <button id='start_stop' className='timer-control' onClick={handlePlayPauseClick}>
                    <i className='fa-solid fa-play'></i>
                    <i className='fa-solid fa-pause' ></i>
                </button>
                <button id='reset' className='timer-control' onClick={handleRefreshClick}>
                    <i className='fa-solid fa-arrows-rotate'></i>
                </button>
            </div>
        </>
    );
}