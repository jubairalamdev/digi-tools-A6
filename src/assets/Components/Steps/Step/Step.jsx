import React from 'react';

const Step = ({stepImg, stepHeading, stepPara, stepNo}) => {
    return (
        <div className='bg-base-100 px-6 py-20 space-y-4 flex flex-col items-center text-center rounded-2xl border-2 border-base-content/10 relative'>
            <div className='p-5 bg-purple-200 rounded-full w-fit'>
                <img src={stepImg} alt="" />
            </div>
            <h3 className='text-2xl font-bold'>{stepHeading}</h3>
            <p className='text-base-content/60'>{stepPara}</p>
            <div className="badge brand-bg rounded-full absolute top-3 right-3 py-5 text-xl text-base-100">{stepNo}</div>
        </div>
    );
};

export default Step;