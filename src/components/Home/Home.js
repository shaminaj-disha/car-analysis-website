import React from 'react';
import { useNavigate } from 'react-router-dom';
import useReviews from '../../hooks/useReviews';
import DynamicHome from '../DynamicHome/DynamicHome';

const Home = () => {
    const [reviews] = useReviews();
    const newReviews = reviews.slice(0,3);
    let navigate = useNavigate();
    const showAllReviews = () =>{
        const path = "/reviews";
        navigate(path);
    }
    return (
        <div>
            <div className='flex items-center justify-center'>
                <div>
                    <h1 className='text-6xl font-bold px-20'>Your next car</h1>
                    <h1 className='text-6xl font-bold text-sky-600 px-20'>Your best car</h1>
                    <p className='py-10 px-20'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt dolores sit voluptate voluptatem, sed, reiciendis repellat alias repellendus ad quasi culpa modi, quos omnis quod soluta quam non. Vitae, sed?</p>
                    <a href="https://youtu.be/0Ghjlt1GvSg" target="_blank" rel="noreferrer"><button className='bg-sky-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded'>Live Demo</button></a>
                </div>
                <div className='pr-20 w-full h-full'>
                    <img src="https://img.freepik.com/free-photo/white-premium-city-crossover-white_101266-526.jpg?w=900" alt="New Kia Sportage" />
                </div>
            </div>
            <div className='mt-40 mb-20'>
                <h1 className='text-3xl font-bold'>Customer Reviews ({newReviews.length})</h1>
            </div>
            {newReviews.map(review => <DynamicHome
                key={review.id}
                review={review}
            ></DynamicHome>)}
            <button onClick={showAllReviews} className='bg-sky-600 hover:bg-blue-700 text-white font-bold py-3 px-8 rounded my-20'>See all reviews</button>
        </div>
    );
};

export default Home;