import React from 'react';
import './Testimonials.css';
import one from '../../img/test/1.jpg'
import two from '../../img/test/2.jpg'
import three from '../../img/test/3.jpg'
import Testimonial from "./Testimonial/Testimonial";

const Testimonials = () => {

    return (
        <div className='testimonials' id='testimonials'>


            <Testimonial
                img={one}
                name={'petya'}
                rank={'tyotya'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    At dolorem ea eius fugiat nam placeat\n' +
                '                    quod reprehenderit sequi sit ut!'}
            />

            <Testimonial
                img={two}
                name={'petya'}
                rank={'tyotya'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    At dolorem ea eius fugiat nam placeat\n' +
                '                    quod reprehenderit sequi sit ut!'}
            />

            <Testimonial
                img={three}
                name={'petya'}
                rank={'tyotya'}
                text={'Lorem ipsum dolor sit amet, consectetur adipisicing elit.\n' +
                '                    At dolorem ea eius fugiat nam placeat\n' +
                '                    quod reprehenderit sequi sit ut!'}
            />
        </div>
    )
}
export default Testimonials;