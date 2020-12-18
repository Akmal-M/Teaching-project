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
                        <p> Я работала с более ста учениками. Среди моих учеников есть
                            одаренные, средные, и тупые конечено, как ваши дети например.
                            Если надоела мучатся с ними дай репетитору своего шалопая и
                            он станет нормальним ребенком.
                            Я очень люблю свою работу и детей, особенно тупых детей
                        </p>
                        <a className='action-btn'>Murojaat</a>
                    </div>
                </section>
            <div/>
        </div>
    )
}



export default Main;