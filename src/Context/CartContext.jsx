import { createContext, useState, useContext } from "react";

const CartContext = createContext(null);

// creating a custom hook
export const useCart = () => {
    const cartContext = useContext(CartContext);
    return cartContext;
}

export const CartContextProvider = (props) => {

    const [items, setItems] = useState([]);
    const allItems = [
        {
            name: "Macbook Pro",
            price: 10000
        },
        {
            name: "Macbook Air",
            price: 8000
        },
        {
            name: "Iphone 15 Pro",
            price: 5000
        },
        {
            name: "One Plus Nord 2T",
            price: 2000
        }
    ];


    const contextValues = { items, setItems, allItems };

    return (
        <CartContext.Provider value={contextValues}>
            {props.children}
        </CartContext.Provider>
    );
}

export default CartContext;