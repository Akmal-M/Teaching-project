import React from 'react';
import './Header.css';
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <div className='sidebar'>
            <nav>
                <ul>
                    <li><Link to="/table">Online</Link></li>
                    <li><Link to="/chat">Chat</Link></li>
                    <li><Link to="/testimonial">Fikrlar</Link></li>
                    <li><Link to="/contact">Manzil</Link></li>
                </ul>
            </nav>
        </div>
    )
}

export default Header;