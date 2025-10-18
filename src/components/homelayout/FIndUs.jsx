import React from 'react';
import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const FIndUs = () => {
    return (
        <div>
            <h2 className='font-bold mb-5'>Find Us On</h2>

            <div>
                <div className="join join-vertical w-full">
                <button className="btn bg-base-100 justify-start join-item"><FaFacebookF className='text-[#1877F2]'/> Facebook</button>
                <button className="btn bg-base-100 justify-start join-item"><FaTwitter className='text-[#1da1f2]'/> Twitter(X)</button>
                <button className="btn bg-base-100 justify-start join-item"> <FaInstagram className='text-[#C13584]'/> Instagram</button>
                </div>
            </div>
        </div>
    );
};

export default FIndUs;