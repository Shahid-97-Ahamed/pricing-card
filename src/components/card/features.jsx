import { CircleCheckBig } from 'lucide-react';
import React from 'react';

const Feature = ({features}) => {
    return (
        <div className=''>
            <li className='flex gap-2'><CircleCheckBig/>{features}</li>
        </div>
    );
};

export default Feature;