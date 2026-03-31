import React, { Suspense, use, useState } from 'react';
import './Tools.css'
import Products from './Products/Products';
import axios from 'axios';
import Cart from './Cart/Cart';

const productDataPromise = axios.get("/public/db/db.json")

const Tools = () => {

    const [tab, setTab] = useState("Products");
    const [cart, setCart] = useState([]);

    const productData = use(productDataPromise);

    const switchTabs = () => {
        const CartTabBtn = document.getElementById("CartTabBtn");
        const productsTabBtn = document.getElementById("productsTabBtn");
        if (tab==="Cart"){
            setTab("Products")
            CartTabBtn.classList.replace("active-tab", "inactive-tab")
            productsTabBtn.classList.replace("inactive-tab", "active-tab")
        }
        else {
            setTab("Cart")
            productsTabBtn.classList.replace("active-tab", "inactive-tab")
            CartTabBtn.classList.replace("inactive-tab", "active-tab")
        }

    }

    const addProduct = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        // console.log(newCart)
        const buyBtn = document.getElementById(`buyBtn-${product.id}`);
        buyBtn.setAttribute("disabled", "")
        buyBtn.classList.replace("active-btn", "inactive-btn");
        buyBtn.innerText = "Purchased";
        // toast.success("Model Subscribed Successfully!")
    }

    return (
        <div className='py-32 space-y-10 max-w-300 mx-auto'>
            <div className='text-center flex items-center flex-col gap-4'>
                <h2 className='font-extrabold text-5xl text-base-content/85'>
                    Premium Digital Tools
                </h2>
                <p className='text-base-content/50 w-[50%]'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
                <div className='mt-4 space-x-2'>
                    <button className="btn active-tab rounded-full  py-5 transition hover:-translate-y-0.5" id='productsTabBtn' onClick={()=> {switchTabs()}}>
                        Explore Products
                    </button>
                    <button className="btn inactive-tab rounded-full  py-5 transition hover:-translate-y-0.5 hover:brand-bg" id="CartTabBtn" onClick={()=> {switchTabs()}}>
                        Cart ({cart.length})
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <Suspense fallback={<span className="loading loading-spinner text-primary"></span>}>
                    {
                        tab === "Products"
                        ? <Products productData={productData} addProduct={addProduct} cart={cart}/>
                        : <Cart cart={cart} />
                        
                    }
                </Suspense>
            </div>
        </div>
    );
};

export default Tools;