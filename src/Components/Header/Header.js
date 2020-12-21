import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='sidebar'>
            <a href="https://us05web.zoom.us/j/9277961791?pwd=YXRFUGMrOWtRcjhOYTZ5V2RmZlBpdz09" target="_blank">Online</a>
            <a href='https://t.me/joinchat/MTUE8xndl7pJ8XLGnJnEMg' target="_blank">Chat</a>
            <Link to="/testimonial">Fikrlar</Link>
            <Link to="/contact">Manzil</Link>
        </div>
    )
}

export default Header;