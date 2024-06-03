import React, { createContext, useState } from 'react';

export const CounterContext = createContext(null);

export const CounterProvider = (props) => {
    const [count, setCount] = useState(1);

    const contextValues = {
        count, setCount, name: "Deepanshu Narang"
    }

    return (
        <CounterContext.Provider value={{ count, setCount, name: "Deepanshu Narang" }}>
            {props.children}
        </CounterContext.Provider>
    )
}