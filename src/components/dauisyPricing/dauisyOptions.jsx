import React from 'react';
import DauisyPricing, { pricingData } from './dauisyPricing';

const DauisyOptions = () => {
    return (
        <div className="card grid md:grid-cols-2 lg:grid-cols-3 w-96 bg-base-100 shadow-sm">
            {
                pricingData.map(pricing=> <DauisyPricing key={pricing.plan_id} pricing={pricing} />)
            }
        </div>
    );
};

export default DauisyOptions;