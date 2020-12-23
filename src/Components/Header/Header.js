import React, {useEffect} from 'react';
import './Header.css';
import {Link} from "react-scroll";
import HeaderLogin from "../LoginHeader/HeaderLogin";


const Header = () => {



    return (
        <>
            <div className='header'>
                <a href="https://us05web.zoom.us/j/9277961791?pwd=YXRFUGMrOWtRcjhOYTZ5V2RmZlBpdz09"
                   target="_blank">Online</a>
                <a href='https://t.me/joinchat/MTUE8xndl7pJ8XLGnJnEMg' target="_blank">Chat</a>
                <Link to="testimonials" smooth={true} duration={1000}>Fikrlar</Link>
                <Link to="contact" smooth={true} duration={1000}>Manzil</Link>
                <HeaderLogin/>
            </div>


        </>
    )
}

export default Header;