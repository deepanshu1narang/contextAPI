import React, { useContext } from 'react'
import CartContext, { useCart } from '../Context/CartContext'

const Item = (props) => {
    // const cartContext = useContext(CartContext);
    const cartContext = useCart();
    function addToCart(item) {
        cartContext.setItems([...cartContext.items, item]);
    }

    return (
        <>
            <div>
                name: {props.name}
            </div>
            <div>
                price: $ {props.price}
            </div>
            <button onClick={() => addToCart(props.item)}>Add to Cart</button>
        </>
    )
}

export default Item
