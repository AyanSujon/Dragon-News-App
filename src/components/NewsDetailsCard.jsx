import React from 'react';
import { FaArrowLeft} from 'react-icons/fa';
import { Link } from 'react-router';

const NewsDetailsCard = ({news}) => {
const {details, title, image_url, category_id} =news;
    console.log(news)
    return (
        <div className='space-y-5'>
            <figure className='w-full'>
                <img className='w-full object-cover rounded' src={image_url} alt={title} />
            </figure>
            <h2 className='font-bold text-2xl'>{news.title}</h2>
            <p>{details}</p>
            <Link className='btn btn-secondary' to={`/category/${category_id}`}> <span><FaArrowLeft/></span> All news in this category</Link>
        </div>
    );
};

export default NewsDetailsCard;