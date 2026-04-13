import React from 'react';
import Features from './features';
import Feature from './features';

const PriceCrad = ({ prices }) => {
    // console.log(price)
    const {plan_id,price,features} =prices;
    return (
        <div className=''>
         <div className="card w-96 bg-base-100 shadow-sm">
  <div className="card-body">
    <span className="badge badge-xs badge-warning">Most Popular</span>
    <div className="flex justify-between">
      <h2 className="text-3xl font-bold">{plan_id}</h2>
      <span className="text-xl">{price}</span>
    </div>
    <ul className="mt-6 flex flex-col gap-2 text-xs">
      {
        features.map((features,index) => <Feature
        key={index}
        features={features}></Feature>)
      }
    </ul>
    <div className="mt-6">
      <button className="btn btn-primary btn-block">Subscribe</button>
    </div>
  </div>
</div>
            </div>
    );
};

export default PriceCrad;