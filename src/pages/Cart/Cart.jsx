import React from 'react'
import DeleteOutlinedIcon from '@mui/icons-material/DeleteOutlined'
import './Cart.scss';
import { useDispatch, useSelector } from 'react-redux';
import { clearCart, removeItem } from '../../cart/cartReducer';
import {loadStripe} from '@stripe/stripe-js';
import { makeRequest } from '../../makeRequest'

const Cart = () => {

    const products = useSelector(state => state.cart.products);
    const dispatch = useDispatch();

    const totalPrice = () => {
        let total = 0;
        products?.forEach(item => {
            total += item.price * item.quantity;
        });
        return total.toFixed(2);
    }

    const stripePromise = loadStripe(import.meta.env.VITE_APP_STRIPE_PUBLIC_KEY);

    const handlePayment = async () => {
        try {
            const stripe = await stripePromise;

            const res = await makeRequest.post(`/orders`, {
                products
            });

            await stripe.redirectToCheckout({
                sessionId: res.data.stripeSession.id
            });

            dispatch(clearCart());

        } catch (error) {
            console.log(error)
        }
    }

    return (
        <div className='cart'>
            <h1>Your Cart</h1>
            {products?.map((item) => (
                <div className="item" key={item.id}>
                    <img src={import.meta.env.VITE_APP_UPLOAD_URL + item?.img} alt="" />
                    <div className="details">
                        <h1>{item.title}</h1>
                        <p>{item.desc.substring(0, 100)}</p>
                        <div className="price">{item?.quantity} x ${item.price}</div>
                    </div>
                    <DeleteOutlinedIcon className='delete' onClick={() => dispatch(removeItem(item.id))}/>
                </div>
            ))}
            <div className="total">
                <span>Subtotal</span>
                <span>${totalPrice()}</span>
            </div>
            <button onClick={handlePayment}>CHECKOUT</button>
            <span className="reset" onClick={() => dispatch(clearCart())}>Clear Cart</span>
        </div>
    )
}

export default Cart