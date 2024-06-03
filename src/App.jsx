import { useContext } from 'react';
import './App.css';
import Counter from './components/Counter';
import { CounterContext } from './Context/CounterContext';
import Ecommerce from './components/Ecommerce';
import Cart from './components/Cart';
import { CartContextProvider } from './Context/CartContext';

function App() {
  // we'll be using context of CounterContext not CounterContextProvider.
  const counterState = useContext(CounterContext);
  console.log("context", counterState);

  return (
    <div style={{ margin: "0.5rem" }}>
      <h1>React Context API</h1>
      <h3>Count is {counterState.count}</h3>
      <Counter />

      <div style={{ display: "flex", flexDirection: "row", alignItems: "flex-start", justifyContent: "flex-start" }}>
        <CartContextProvider>
          <Ecommerce />
          <Cart />
        </CartContextProvider>
      </div>


    </div>
  )
}

export default App
