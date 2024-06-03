import React, { useContext } from 'react'
import Item from './Item'
import { useCart } from '../Context/CartContext';

const Ecommerce = () => {
    // const cartContext = useContext(CartContext);
    const cartContext = useCart();

    return (
        <ul type="none" style={{ width: "20rem" }} >
            {
                cartContext.allItems.map(item => <li key={item.name} style={{ border: "1px solid black", margin: "0.5rem", padding: "0.5rem" }}>
                    <Item name={item.name} price={item.price} item={item} />
                </li>)
            }
        </ul>
    )
}

export default Ecommerce
