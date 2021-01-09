import React  from 'react';
import './Header.css';
import {Link} from "react-scroll";
import HeaderLogin from "../LoginHeader/HeaderLogin";
import {useStateValue} from "../../stateProvider";


const Header = () => {

    const [{user, }] = useStateValue();

    return (
        <>
            <div className='header'>
                {user ? <a href="https://us05web.zoom.us/j/9277961791?pwd=YXRFUGMrOWtRcjhOYTZ5V2RmZlBpdz09"
                          rel='noreferrer' target="_blank">Online</a> :
                    <p  style={{color: '#a3a0a0'}}>Online</p>}
                {user ? <a href='https://t.me/joinchat/MTUE8xndl7pJ8XLGnJnEMg' rel='noreferrer' target="_blank">Chat</a> :
                    <p  style={{color: '#a3a0a0'}}>Chat</p> }
                <Link to="testimonials" smooth={true} duration={1000}>Fikrlar</Link>
                <Link to="contact" smooth={true} duration={1000}>Manzil</Link>
                <HeaderLogin/>
            </div>


        </>
    )
}

export default Header;