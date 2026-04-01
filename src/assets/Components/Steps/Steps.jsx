import React from 'react';
import Step from './Step/Step';

const Steps = () => {
    return (
        <div className=' bg-base-200 w-full'>
            <div className='max-w-300 mx-auto py-10 lg:py-32 space-y-10'>
                <div className='text-center flex items-center flex-col gap-4'>
                    <h2 className='font-bold text-4xl lg:text-5xl text-base-content/85'>
                        Get Started in 3 Steps
                    </h2>
                    <p className='text-base-content/50 w-[50%]'>
                        Start using premium digital tools in minutes, not hours.
                    </p>
                </div>
                <div className='grid px-5 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8'>
                    <Step stepImg="/assets/user.png" stepHeading="Create Account" stepPara="Sign up for free in seconds. No credit card required to get started." stepNo="01"/>
                    <Step stepImg="/assets/package.png" stepHeading="Choose Products" stepPara="Browse our catalog and select the tools that fit your needs." stepNo="02"/>
                    <Step stepImg="/assets/rocket.png" stepHeading="Start Creating" stepPara="Download and start using your premium tools immediately." stepNo="03"/>
                </div>
            </div>
        </div>
    );
};

export default Steps;