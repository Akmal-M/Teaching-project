import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='sidebar'>
            <Link to="/online">Online</Link>
            <Link to="/chat">Chat</Link>
            <Link to="/testimonial">Fikrlar</Link>
            <Link to="/contact">Manzil</Link>
        </div>
    )
}

export default Header;