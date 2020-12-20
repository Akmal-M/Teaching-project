import React from 'react';
import './Footer.css';
import facebook from '../../img/assets/10524131591559031671-128.png';
import instagram from '../../img/assets/19042250241579774616-128.png';
import telegram from '../../img/assets/21399810441555589926-128.png';

const Footer = () => {
    return (
        <>
            <div className='footer'>
                <div className='footer__address'>
                    <h4>Samarqand viloyati,
                        <br/> Kattaqo'rg'on tum.
                        <br/>Payshanba sh.</h4>
                </div>
                <div className='footer__tel'>
                    Telefon:
                    <br/><a href="tel:+998913139211">+99 891 313 92 11</a>
                </div>
                <div className='footer__social'>
                    <p>
                        <a href="https://t.me/amazingrepetitor" className='footer__socialIco'>
                        <img alt="telegram" src={telegram} />
                    </a>
                    </p>

                    <p>
                        <a href="https://instagram.com/russkii140" className='footer__socialIco'>

                            <img  alt="instagram"  src={instagram} />
                        </a>
                    </p>

                    <p>
                        <a href="https://facebook.com/profile.php?id=100059904920338 " className='footer__socialIco'>
                            <img alt="facebook" src={facebook} />
                        </a>
                    </p>


                </div>
            </div>
            <div className='developer'>
                Powered by Akmal M.©
            </div>
        </>
    )
}

export default Footer;