import React from 'react';
import swimmigImage from "../../assets/swimming.png";
import classImage from "../../assets/class.png";
import playImage from "../../assets/playground.png";


const Qzone = () => {
    return (
        <div className='bg-base-200 p-3'>
            <h3 className='font-bold mb-5'>Q-Zone</h3>
            <div className="space-y-5 mx-auto">
                <img className='mx-auto' src={swimmigImage} alt="swimmig mage" />
                <img className='mx-auto' src={classImage} alt="class Image" />
                <img className='mx-auto' src={playImage} alt="play Image" />
            </div>
        </div>
    );
};

export default Qzone;

