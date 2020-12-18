import React from 'react';
import testimonial from '../../../img/test/C9EWvnFXkAAH3fP.jpg';
import './Testimonial.css';

const Testimonial = () => {
    return (
        <div className='test__card'>
          <img src={testimonial} alt=''/>
          <h2 className='test__name'>Ryan Gosling</h2>
            <h3 className='test__rank'>Falonchani onasi</h3>
            <p  className='test__text'>
                "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                At dolorem ea eius fugiat nam placeat
                quod reprehenderit sequi sit ut!"
            </p>
        </div>
    );
};

export default Testimonial;