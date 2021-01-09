import React from 'react';
import './Footer.css';
import {FaFacebook, FaInstagram, FaTelegram} from "react-icons/fa";


const Footer = () => {
    return (
        <>
            <div className='footer' id='contact'>
                <div className='footer__address'>
                    <h4>Tashkent,
                        <br/> No name str.
                        <br/>house 77/7</h4>
                </div>
                <div className='footer__tel'>
                    Telefon:
                    <br/><a href="tel:+998913139211">+99 891 777 77 77</a>
                </div>
                <div className='footer__social'>
                    <p>
                        <a href="https://t.me/amazingrepetitor" rel='noreferrer' target="_blank" className='footer__socialIco'>
                        <FaTelegram />
                    </a>
                    </p>

                    <p>
                        <a href="https://instagram.com/russkii140" rel='noreferrer' target="_blank" className='footer__socialIco'>
                           <FaInstagram/>
                        </a>
                    </p>

                    <p>
                        <a href="https://facebook.com/profile.php?id=100059904920338 " rel='noreferrer' target="_blank" className='footer__socialIco'>
                            <FaFacebook />
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