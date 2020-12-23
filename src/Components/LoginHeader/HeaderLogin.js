import React, {useEffect} from 'react';
import {BrowserRouter as Link} from "react-router-dom";
import {auth} from "../../firebase";
import './HeaderLogin.css';
import {useStateValue} from "../../stateProvider";


const HeaderLogin = () => {


    const [{user, name}, dispatch] = useStateValue();

    const handleAuthentication = () => {
        if (user) {
            auth.signOut();
        }
    }

    return (
        <div className='header__login'>
            <Link to={!user && '/login'}>
                <div onClick={handleAuthentication} className='header__option'>
                    <div className='header__optionLineOne'>Salom {!user ? 'Mehmon' : user.email}</div>
                    <div className='header__optionLineTwo'>
                        {user ? "Chiqish" : "Kirish"}
                    </div>
                </div>
            </Link>
        </div>
    );
};

export default HeaderLogin;