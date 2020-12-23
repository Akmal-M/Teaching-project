import React, {useState} from 'react';
import {Link, useHistory} from "react-router-dom";
import './LoginPage.css';
import {auth} from "../../firebase";

const Login = () => {

    const history = useHistory();
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [name, setName] = useState('');

    const signIn = e => {
        e.preventDefault();
        auth
            .signInWithEmailAndPassword(email, password)
            .then(auth => {
                history.push('/')
            })
            .catch(error => alert("Email yoki parol xato kiritildi"))
    }

    const register = e => {
        e.preventDefault();

        auth
            .createUserWithEmailAndPassword(email, password)
            .then((auth) => {

                if (auth) {
                    history.push('/')
                }

            })
            .catch(error => alert("Email yoki parol xato kiritildi"))
    }

    return (
        <div className='login'>
            <Link to='/'>
                <img alt=''
                    className='login__logo'
                    src='https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/1024px-Amazon_logo.svg.png'
                />
            </Link>

            <div className='login__container'>
                <h1>Login</h1>
                <form action="">

                    <h5>Ism</h5>
                    <input type="text" value={name}
                           onChange={e => setName(e.target.value)}
                    />

                    <h5>E-mail</h5>
                    <input type="text" value={email}
                           onChange={e => setEmail(e.target.value)}
                    />

                    <h5>Parol</h5>
                    <input type="password" value={password}
                           onChange={e => setPassword(e.target.value)}
                    />

                    <button type="submit" onClick={signIn}
                            className='login__signInButton'>Kirish</button>
                </form>
                <p>
                  Yangi Akkaunt ochishdan avval repetitor bilan
                    maslahatlashishni unutmang. O'zboshimchalik bilan ochilgan
                    akkaunt data bazadan o'chiriladi va bloklanishiga olib keladi.
                    Iltimos o'zingizni ham moderatorlarning ham vaqtini behuda
                    sarflamang!
                </p>

                <button onClick={register}
                        className='login__registerButton'>Yangi akkaunt ochish</button>
            </div>
        </div>
    );
};

export default Login;