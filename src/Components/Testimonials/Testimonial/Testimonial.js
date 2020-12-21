import React from 'react';
import './Testimonial.css';

const Testimonial = ({img, name, rank, text}) => {
    return (
        <div>
            <div className='testimonials'>
                <div className='test__card'>
                    <img src={img} alt=''/>
                    <h2 className='test__name'>{name}</h2>
                    <h3 className='test__rank'>{rank}</h3>
                    <p className='test__text'>
                        {text}
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Testimonial;