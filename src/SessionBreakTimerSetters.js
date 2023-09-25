import React from 'react';
import TimeSetter from './TimeSetter';
import './Clock.scss';
import { useClockContext } from './context';

export default function SessionBreakTimerSetters()
{
  const { sessionLength, breakLength, setSessionLength, setBreakLength, setTimer } = useClockContext(); 

  const handleDecrementClick = ({target}) =>
  {
    if ( target.id === 'breakDecrement' && (breakLength > 1 && breakLength <= 60) )
    {
      setBreakLength( (prev) => prev - 1 );
      setTimer((prev) => prev - 1);
    }
      

    if ( target.id === 'sessionDecrement' && (sessionLength >1 && sessionLength <= 60) )
    {
      setSessionLength( (prev) => prev - 1 );
      setTimer((prev) => prev - 1);
    }
  };

  const handleIncrementClick = ({target}) =>
  {
    if ( target.id === 'breakIncrement' && (breakLength >= 1 && breakLength < 60) )
      setBreakLength( (prev) => prev + 1 );

    if ( target.id === 'sessionIncrement' && (sessionLength >= 1 && sessionLength < 60) )
      setSessionLength( (prev) => prev + 1 );
  };

  return (
      <div className='setter-controls-container'>
        <TimeSetter buttonId="break" timerName='Break'   time={breakLength} onDecrementClick={handleDecrementClick} onIncrementClick={handleIncrementClick} />
        <TimeSetter buttonId="session" timerName='Session' time={sessionLength} onDecrementClick={handleDecrementClick} onIncrementClick={handleIncrementClick}/>
      </div>
  );
}