import React from 'react';
import './Testimonial.css';
import data from '../../../data';

const Testimonial = () => {
    return (

        <div className='testimonials'>
            {
                data.testimonials.map((testimonial) =>
                    <div className='testimonial'>
                        <div className='test__card'>
                            <img  style={{width: '200px'}} src={testimonial.img} alt=''/>
                            <h2 className='test__name'>{testimonial.name}</h2>
                            <h3 className='test__rank'>{testimonial.rank}</h3>
                            <p className='test__text'>
                                {testimonial.text}
                            </p>
                        </div>
                    </div>
                )
            }

        </div>

    );
};

export default Testimonial;