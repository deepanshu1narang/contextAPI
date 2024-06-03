import React, { useContext, useEffect, useState } from 'react'
import CartContext, { useCart } from '../Context/CartContext'

const Cart = () => {
    // const cartContext = useContext(CartContext);
    const cartContext = useCart();
    const [cartPrice, setCartPrice] = useState(0);
    // console.log(cartContext.items);

    useEffect(() => {
        let price = cartContext.items.reduce((acc, cum) => {
            acc += cum.price;
            return acc;
        }, 0);
        setCartPrice(price);

    }, [cartContext.items]);

    return (
        <div style={{ border: "1px solid red", width: "20rem", margin: "0.5rem", padding: "0.5rem", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            <div>
                <div>
                    items:
                    <ol type='1'>
                        {
                            cartContext.items.map(item => <li>
                                {item.name} -- {item.price}
                            </li>)
                        }
                    </ol>
                </div>
                <div>
                    total: $ {cartPrice}
                </div>
            </div>
            <div style={{ display: "flex", flexDirection: "row", justifyContent: "center", gap: 10 }}>
                <button>Buy</button>
                <button onClick={() => cartContext.setItems([])}>Clear Cart</button>
            </div>
        </div>
    )
}

export default Cart
