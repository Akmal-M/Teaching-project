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
                    <br/> +99 891 313 92 11
                </div>
                <div className='footer__social'>
                        <img src={telegram} alt="telegram"/>
                        <img src={instagram} alt="instagram"/>
                        <img src={facebook} alt="facebook"/>
                </div>
            </div>
            <div className='developer'>
                Powered by Akmal M.©
            </div>
        </>
    )
}

export default Footer;