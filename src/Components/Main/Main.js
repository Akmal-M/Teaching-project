import React from 'react';
import './Main.css';
import img from '../../img/hero.jpg';

const Main = () => {
    return (
        <div className='content'>
                <section className='hero'>
                    <img src={img} alt=''/>
                    <div className='hero-content'>
                        <h2>RUS TILI <br/>
                        Repetitor</h2>
                        <p>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                            Consequatur enim illum itaque iure modi, molestiae nulla numquam
                            obcaecati placeat quas, ratione repellendus saepe sequi velit veniam.
                            A assumenda autem consectetur distinctio dolor dolorem exercitationem
                            facere impedit minima obcaecati perferendis praesentium,
                            provident quia quo quos repudiandae vitae. Alias in modi rem.
                        </p>
                        <a className='action-btn'>Murojaat</a>
                    </div>
                </section>
            <div/>
        </div>
    )
}



export default Main;