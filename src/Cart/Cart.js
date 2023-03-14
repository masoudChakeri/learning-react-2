import classes from "./Cart.module.css";

const Cart = () => {
    const cartItems = <ul className={classes['cart-items']}>
        {[].map(item => (
            <li>{item.name}</li>
        ))}
    </ul>

    return (
        <div>
            {cartItems}
            <div className={classes.total}>
                <span>ta</span>
                <span>am</span>
            </div>

            <div className={classes.actions}>
                <button className={classes['button--alt']}>Close</button>
                <button className={classes.button}>Order</button>
            </div>
        </div>
    )
}

export default Cart