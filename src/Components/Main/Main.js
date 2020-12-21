import React from 'react';
import './Main.css';
import img from '../../img/hero.jpg';

const Main = () => {
    return (
        <div className='content__wrapper'>
        <div className='content'>
                <section className='hero'>
                    <img src={img} alt=''/>
                    <div className='hero-content'>
                        <h2>RUS TILI </h2>
                        <h2>REPETITOR</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur enim illum itaque iure modi, molestiae nulla numquam
                            obcaecati placeat quas, ratione repellendus saepe sequi velit veniam.
                            A assumenda autem consectetur distinctio dolor dolorem exercitationem
                        </p>
                        <a className='action-btn'>Murojaat</a>

                    </div>
                </section>
            <div/>
        </div>
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" >
                <path fill="#c7eb6a" fillOpacity="1"
                      d="M0,32L48,58.7C96,85,192,139,288,170.7C384,203,
                         480,213,576,213.3C672,213,768,203,864,186.7C960,171,
                          1056,149,1152,128C1248,107,1344,85,1392,74.7L1440,64L1440,
                          320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,
                          320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,
                          320,48,320L0,320Z">
                </path></svg>
    </div>
    )
}



export default Main;