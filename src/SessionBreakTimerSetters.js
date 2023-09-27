import React from 'react';
import TimeSetter from './TimeSetter';
import './Clock.scss';
import { useClockContext } from './context';

export default function SessionBreakTimerSetters()
{
  const { state, setState } = useClockContext(); 

  const handleBreakDecrementClick = () =>
  {
    if( (state.breakLength > 1 && state.breakLength <= 60) && !state.timerState ) 
        setState( (prevState) => ( {...prevState, seconds: !prevState.currTime? 0 : prevState.seconds, breakLength: prevState.breakLength-1, timer: !prevState.currTime ? Math.abs(prevState.breakLength-1) : prevState.timer}) );
  };

  const handleBreakIncrementClick = () =>
  {
    if ( (state.breakLength >= 1 && state.breakLength < 60) && !state.timerState )
        setState( (prevState) => ({...prevState, seconds: !prevState.currTime? 0 : prevState.seconds, breakLength: prevState.breakLength+1, timer: !prevState.currTime ? prevState.breakLength+1 : prevState.timer}) );
  };

  const handleSessionDecrementClick = () =>
  {
    if ( (state.sessionLength > 1 && state.sessionLength <= 60) && !state.timerState )
        setState( (prevState) => ({...prevState, seconds: prevState.currTime ? 0 : prevState.seconds, sessionLength: prevState.sessionLength-1, timer: prevState.currTime ? Math.abs(prevState.sessionLength-1) : prevState.timer}) );
  };

  const handleSessionIncrementClick = () =>
  {
    if ( (state.sessionLength >= 1 && state.sessionLength < 60) && !state.timerState )
        setState( (prevState) => ({...prevState, seconds: prevState.currTime ? 0 : prevState.seconds, sessionLength: prevState.sessionLength+1, timer: prevState.currTime ? prevState.sessionLength+1 : prevState.timer}) );
  };

  return (
      <div className='setter-controls-container'>
        <TimeSetter 
          timerName='Break'  
          lengthName='break' 
          time={state.breakLength} 
          onDecrementClick={handleBreakDecrementClick}
          onIncrementClick={handleBreakIncrementClick}
        />
        <TimeSetter 
          timerName='Session' 
          lengthName='session'
          time={state.sessionLength} 
          onDecrementClick={handleSessionDecrementClick}
          onIncrementClick={handleSessionIncrementClick}
        />
      </div>
  );
}