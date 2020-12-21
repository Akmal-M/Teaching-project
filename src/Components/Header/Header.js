import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='sidebar'>
            <Link to="/online">Online</Link>
            <a href='https://t.me/joinchat/MTUE8xndl7pJ8XLGnJnEMg' target="_blank">Chat</a>
            <Link to="/testimonial">Fikrlar</Link>
            <Link to="/contact">Manzil</Link>
        </div>
    )
}

export default Header;