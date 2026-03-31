import React, { use } from 'react';
import './Tools.css'
import Products from './Products/Products';
import axios from 'axios';

const productDataPromise = axios.get("/public/db/db.json")

const Tools = () => {

    const productData = use(productDataPromise)

    return (
        <div className='py-32 space-y-10 max-w-300 mx-auto'>
            <div className='text-center flex items-center flex-col gap-4'>
                <h2 className='font-extrabold text-5xl text-base-content/85'>
                    Premium Digital Tools
                </h2>
                <p className='text-base-content/50 w-[50%]'>
                    Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
                </p>
                <div className='mt-4'>
                    <button className="btn active-tab rounded-full  py-5 transition hover:-translate-y-0.5">
                        Explore Products
                    </button>
                    <button className="btn inactive-tab rounded-full  py-5 transition hover:-translate-y-0.5 hover:brand-bg">
                        Cart (0)
                    </button>
                </div>
            </div>
            <div className='w-full'>
                <Products productData={productData} />
            </div>
        </div>
    );
};

export default Tools;