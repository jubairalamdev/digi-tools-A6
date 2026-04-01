import React from 'react';

const Pricing = ({ pricing }) => {


    /**
     * [
      {
        "id": 1,
        "plan_name": "Starter",
        "description": "Perfect for getting started",
        "price": "0",
        "billing_cycle": "Month",
        "features": [
          "Access to 10 free tools",
          "Basic templates",
          "Community support",
          "1 project per month"
        ],
        "button_text": "Get Started Free",
        "is_popular": false
      },
     */

    let cardStyle = "";
    let btnStyle = "";
    let paraColor = "";
    if (pricing.is_popular) {
        cardStyle = "brand-bg text-base-100"
        btnStyle = "bg-base-100 text-primary";
    }
    else {
        cardStyle = "bg-base-200";
        btnStyle = "brand-bg text-base-100";
        paraColor = "text-base-content/60"
    }


    return (
        <div className={`p-6 flex flex-col ${cardStyle} border-base-300 border-2 justify-between space-y-6 rounded-2xl relative`}>
            <div className='w-full flex justify-center -mt-9'>
                {
                pricing.is_popular
                    ? <div className="badge bg-[#FEF3C6] text-[#BB4D00] border-0 rounded-full">
                        Most Popular
                    </div>
                    : null
            }
            </div>
            

            <div className='space-y-6'>
                <div className='space-y-2'>
                    <h3 className='text-2xl font-medium'>{pricing.plan_name}</h3>
                    <p className={paraColor}>{pricing.description}</p>
                </div>
                <div className='flex items-end'>
                    <h2 className='text-4xl font-bold'>${pricing.price}</h2>
                    <p className={paraColor}>/Month</p>
                </div>
                <ul className={`${paraColor} font-medium`}>
                    {
                        pricing.features.map(feature => <li>
                            <svg xmlns="http://www.w3.org/2000/svg" className="size-4 me-2 inline-block text-success" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" /></svg>
                            <span>{feature}</span>
                        </li>)
                    }
                </ul>
            </div>
            <button className={`btn w-full ${btnStyle} py-6 text-xl rounded-full`}>{pricing.button_text}</button>
            

        </div>
    );
};

export default Pricing;