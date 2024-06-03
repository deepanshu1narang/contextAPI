import React, { useContext } from 'react';
import { CounterContext } from '../Context/CounterContext';
import CartContext from '../Context/CartContext';

const Counter = () => {
    const counterContext = useContext(CounterContext);
    const cartContext = useContext(CartContext);
    console.log(counterContext);
    console.log(cartContext);
    function increment() {
        counterContext.setCount(() => counterContext.count + 1);
    }
    function decrement() {
        counterContext.setCount(() => counterContext.count - 1);
    }

    return (
        <div style={{ border: "1px solid black", width: "15rem", margin: "0.1rem" }}>
            <button onClick={increment} style={{ margin: "0.5rem" }}>+ Increament</button>
            <button onClick={decrement} style={{ margin: "0.5rem" }}>- Decreament</button>
        </div>
    );
};

export default Counter;
