import React from 'react';

const Facts = () => {
    return (
        <div className='brand-bg py-16 w-full text-base-100'>
            <div className='flex justify-around max-w-300 mx-auto items-center flex-col md:flex-row space-y-5'>
                <div>
                    <h3 className='text-6xl font-extrabold'>50K+</h3>
                    <p className='text-2xl text-base-300/70'>Active Users</p>
                </div>
                <div className='bg-base-300/50 p-0.5 h-0.5 w-20 md:w-0.5 md:h-20 rounded-full'>
                    {/* Vertical Line */}
                </div>
                <div>
                    <h3 className='text-6xl font-extrabold'>200+</h3>
                    <p className='text-2xl text-base-300/70'>Premium Tools</p>
                </div>
                <div className='bg-base-300/50 p-0.5 h-0.5 w-20 md:w-0.5 md:h-20 rounded-full'>
                    {/* Vertical Line */}
                </div>
                <div>
                    <h3 className='text-6xl font-extrabold'>4.9</h3>
                    <p className='text-2xl text-base-300/70'>Rating</p>
                </div>
            </div>
            
        </div>
    );
};

export default Facts;