import React from 'react';
import StarRatings from 'react-star-ratings/build/star-ratings';

const Reviews = (props) => {
    const { img, name, rating, reviewer, review } = props.review;
    return (
        <div>
            <hr className='w-5/6 mx-auto'></hr>
            <div className='lg:grid lg:gap-y-50 lg:grid-cols-2 lg:justify-items-stretch lg:content-center md:flex md:flex-col border-0 w-10/12 mx-auto my-10 rounded-md'>
                <div className='m-0 p-0'>
                    <img src={img} className='object-fill h-full w-full border-0 rounded-full' alt="" />
                </div>
                <div className='flex flex-col items-center justify-center p-10'>
                    <h3 className='text-3xl font-bold my-2'>{name}</h3>
                    <p className='my-2'><span className='font-bold'>Review By:</span> {reviewer}</p>
                    <p className='my-2'><span className='font-bold'>Rating: </span> <StarRatings
                        rating={rating}
                        starRatedColor="blue"
                        starDimension="20px"
                        starSpacing="15px"
                    /></p>
                    <p className='my-2'><span className='font-bold'>Review:</span> {review}</p>
                </div>
            </div>
            <hr className='w-5/6 mx-auto'></hr>
        </div>
    );
};

export default Reviews;