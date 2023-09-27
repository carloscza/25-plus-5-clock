import React, { createContext, useContext, useState } from 'react';

const ClockContext = createContext({});

export default function ClockContextProvider({children})
{
    const initialState =
    {
        sessionLength: 25,
        breakLength: 5,
        timer: 25,
        seconds: 0,
        timerState: false,
        currTime: true
    };

    const [ state, setState ] = useState(initialState);

    const contextValue = 
    {
        state,
        setState,
        initialState
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


