import React from 'react';
import './Testimonials.css';
import one from '../../img/test/1.jpg'
import two from '../../img/test/2.jpg'
import three from '../../img/test/3.jpg'
const Testimonials = () => {

    return (
        <div className='testimonials'>
            <div className='test__card'>
                <img src={one} alt=''/>
                <h2 className='test__name'>Ryan Gosling</h2>
                <h3 className='test__rank'>Onasi</h3>
                <p  className='test__text'>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At dolorem ea eius fugiat nam placeat
                    quod reprehenderit sequi sit ut!"
                </p>
            </div>

            <div className='test__card'>
                <img src={two} alt=''/>
                <h2 className='test__name'>Ryan Gosling</h2>
                <h3 className='test__rank'>Onasi</h3>
                <p  className='test__text'>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At dolorem ea eius fugiat nam placeat
                    quod reprehenderit sequi sit ut!"
                </p>
            </div>

            <div className='test__card'>
                <img src={three} alt=''/>
                <h2 className='test__name'>Ryan Gosling</h2>
                <h3 className='test__rank'>Onasi</h3>
                <p  className='test__text'>
                    "Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                    At dolorem ea eius fugiat nam placeat
                    quod reprehenderit sequi sit ut!"
                </p>
            </div>
        </div>
    );
};

export default Testimonials;