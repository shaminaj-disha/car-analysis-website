import React from 'react';
import useReviews from '../../hooks/useReviews';
import Reviews from '../Reviews/Reviews';

const ReviewStatic = () => {
    const [reviews] = useReviews();
    return (
        <div>
            <h1 className='text-4xl pb-20'>What our customers say!</h1>
            {reviews.map(review => <Reviews
            key = {review.id}
            review = {review}></Reviews>)}
        </div>
    );
};

export default ReviewStatic;