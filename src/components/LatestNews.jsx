import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = () => {
    return (
        <div className='flex items-center gap-5 bg-base-200 p-3'>
            <h4 className='text-base-100 bg-secondary px-3 py-2'>Latest</h4>
            
            <Marquee className='flex gap-5' pauseOnHover={true} speed={60}>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>
                <p className='font-bold'>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quo esse magni rerum tempora temporibus. Necessitatibus incidunt cum quod quo, autem assumenda repudiandae recusandae corrupti id voluptatum vitae ducimus earum explicabo.</p>

            </Marquee>
        </div>
    );
};

export default LatestNews;