import React, { Suspense } from 'react';
import Categories from '../Categories';

const LeftAside = () => {
    return (
        <div>
            <Suspense fallback={<div className='flex justify-center mt-10'><span className="loading loading-dots loading-xl"></span></div>}>
                <Categories></Categories>
            </Suspense>
        </div>
    );
};

export default LeftAside;