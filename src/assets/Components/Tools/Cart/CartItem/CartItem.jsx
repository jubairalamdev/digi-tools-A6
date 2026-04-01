import React from 'react';

const CartItem = ({product, removeProduct}) => {

/**
 * [
  {
    "product_name": "AI Writing Pro",
    "icon_url": "/public/assets/products/writing_2327400 1.png",
    "badge": "Best Seller",
    "description": "Generate high-quality content, blogs, and marketing copy in seconds with advanced AI.",
    "price": "29",
    "billing_cycle": "Mo",
    "features": [
      "Unlimited AI generations",
      "50+ writing templates",
      "Grammar checker"
    ]
  },
 */
    
    return (
        <div className='flex justify-between p-4 bg-base-200 rounded-2xl items-center'>
            <div className='flex gap-4'>
                <div className='p-3 rounded-full bg-base-100'>
                    <img src={product.icon_url} alt="" />
                </div>
                <div className='space-y-2'>
                    <h2 className='font-bold text-xl text-base-content/95'>{product.product_name}</h2>
                    <p className='text-base-content/60'>${product.price}</p>
                </div>
            </div>
            <button className="btn btn-ghost text-error" onClick={()=>{removeProduct(product)}}>Remove</button>
        </div>
    );
};

export default CartItem;