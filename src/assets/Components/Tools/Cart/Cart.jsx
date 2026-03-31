import React from 'react';
import CartItem from './CartItem/CartItem';

const Cart = ({cart}) => {

    let total = 0;
    for (let i = 0; i < cart.length; i++) {
        const product = cart[i];
        total += product.price;
    }
    return (
        <div className='p-10 max-w-300 mx-auto border-2 border-base-content/10 rounded-2xl space-y-6'>
            <h2 className='text-2xl font-bold'>Your Cart</h2>
            <div className='w-full space-y-4'>
                {
                    cart.map(product => <CartItem product={product} />)
                }
            </div>
            <div className='flex justify-between'>
                <small className='text-base-content/60 text-sm'>Total:</small>
                <h3 className='text-2xl font-bold'>${total}</h3>
            </div>
            <button className="brand-bg btn border-none text-base-100 py-6 text-xl w-full rounded-full">
                Proceed To Checkout
            </button>
        </div>
    );
};

export default Cart;