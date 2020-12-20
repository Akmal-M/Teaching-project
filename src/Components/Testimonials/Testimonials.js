import React from 'react';

import Testimonial from "./Testimonial/Testimonial";
import './Testimonials.css';

const Testimonials = () => {

    return (
        <div className='testimonials'>
          <Testimonial/>
          <Testimonial/>
          <Testimonial/>
        </div>
    );
};

export default Testimonials;