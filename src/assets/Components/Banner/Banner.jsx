import { CircleDotDashed } from 'lucide-react';
import React from 'react';
import play from '/public/assets/play.png'
import banner from '/public/assets/banner.png'

const Banner = () => {
    return (
        <div className='flex gap-16 py-16 items-center px-5 xl:px-0 flex-col-reverse md:flex-row max-w-300 mx-auto'>
            <div className='space-y-4 flex-1'>
                <div className="badge bg-primary/10 text-primary py-4 rounded-full font-semibold ">
                    <CircleDotDashed className='w-4' />
                    <p className='brand-text'>
                        New: AI-Powered Tools Available
                    </p>
                </div>
                <h2 className='font-extrabold text-6xl text-base-content/85'>
                    Supercharge Your
                    Digital Workflow
                </h2>
                <p className='text-base-content/50 w-[80%]'>
                    Access premium AI tools, design assets, templates, and productivity software—all in one place. Start creating faster today. Explore Products
                </p>
                <div className='mt-4 space-x-4'>
                    <button className="btn brand-bg shadow-md rounded-full  py-5 transition hover:-translate-y-0.5 text-base-100">
                        Explore Products
                    </button>
                    <button className="btn btn-outline btn-primary rounded-full  py-5 transition hover:-translate-y-0.5 hover:brand-bg hover:text-base-100">
                        <img src={play} alt="playBtn" />
                        Watch Demo
                    </button>
                </div>
            </div>
            <div className='flex-1'>
                <img src={banner} alt="" />
            </div>
        </div>
    );
};

export default Banner;