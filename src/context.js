import React, { createContext, useContext, useState } from 'react';

const ClockContext = createContext({});

export default function ClockContextProvider({children})
{
    const [ sessionLength, setSessionLength ] = useState(25);
    const [ breakLength,   setBreakLength   ] = useState(5);
    const [ timer, setTimer ] = useState(sessionLength);

    const contextValue = 
    {
        sessionLength,
        setSessionLength,
        breakLength,
        setBreakLength,
        timer,
        setTimer
    };

    return (
        <ClockContext.Provider value={contextValue}>
            {children}
        </ClockContext.Provider>
    );
}

// Custom Hook for accessing context easier.
export function useClockContext()
{
    const clock = useContext(ClockContext);

    if ( clock === undefined)
        throw new Error("useClockContext() must be used with ClockContext.");

    return clock;
}


