import React, { use } from 'react';
import PriceCrad from './priceCrad';

const PricingCard = ({ pricingPromise }) => {
    const pricingData = use(pricingPromise);
    // console.log(pricingData);
    return (
        <div>
            <h1 className='text-3xl font-bold text-center pt-3'>Subscribe to our Plan</h1>
            <div className='grid md:grid-cols-3'>
                {pricingData.pricing_options.map((prices,index) => <PriceCrad
                key={index}
                prices={prices}></PriceCrad>)}
            </div>
        </div>
    );
};

export default PricingCard;