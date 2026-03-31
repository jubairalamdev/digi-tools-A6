import React from 'react';
import './Product.css'

const Product = ({product, addProduct, cart}) => {
    const isPurchased = cart.some(p => p.id === product.id);

    let badgeColor = "";
    if (product.badge==="Best Seller") {
        badgeColor = "bg-warning/40 text-red-600";
    }
    else if (product.badge==="Popular"){
        badgeColor="bg-purple-200 text-purple-600"
    }
    else {
        badgeColor="bg-success/20 text-green-700"
    }


    return (
        <div className='px-6 pt-6 space-y-4 rounded-2xl border-3 border-base-content/10 relative '>
            <div className='p-3 rounded-full border-3 border-base-content/15 w-fit'>
                <img src={product.icon_url} alt={product.product_name} className='w-8' />
            </div>
            <div className='space-y-4'>
                <h3 className='font-bold text-2xl text-base-content/95'>{product.product_name}</h3>
                <p className='text-base-content/60 font-medium'>
                    {product.description}
                </p>
                <h3 className="text-2xl font-bold">
                    ${product.price}
                    <small className='text-base-content/60 font-light text-[16px]'>/{product.billing_cycle}</small>
                </h3>
                <ul className='text-base-content/70 font-medium'>
                    {
                        product.features.map(feature => <li>
                        <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                        <span>{feature}</span>
                    </li>)
                    }
                </ul>
                <button className={`btn ${
                    isPurchased
                    ? "inactive-btn"
                    : "active-btn"
                } rounded-full w-full p-3`} id={`buyBtn-${product.id}`} onClick={()=>{addProduct(product)}} disabled={
                    isPurchased
                    ? "disabled"
                    : null
                }>{
                    isPurchased
                    ? "Purchased"
                    : "Buy Now"
                }</button>
                <div className={`badge ${badgeColor} absolute top-3 rounded-full  font-extralight p-3 min-w-23.75 right-3`}>
                    {
                        product.badge
                    }
                </div>
            </div>
        </div>
    );
};

export default Product;