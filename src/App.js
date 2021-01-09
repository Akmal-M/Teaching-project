import './App.css';
import React, {useEffect} from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import SliderPhoto from "./Components/SliderPhoto/SliderPhoto";
import Favourite from "./Components/Favourite/Favourite";

import {
    Route
} from 'react-router-dom';
import LoginPage from "./Components/Login/LoginPage";
import {useStateValue} from "./stateProvider";
import {auth} from "./firebase";
import Testimonial from "./Components/Testimonials/Testimonial/Testimonial";

const App = () => {
    
    const [{}, dispatch] = useStateValue();

    useEffect(() => {
        //will only run once when the app component loads..
        auth.onAuthStateChanged(authUser => {
            if(authUser) {
                dispatch({
                    type: 'SET_USER',
                    user: authUser
                })


            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })

            }
        })
    }, [])

    return (
        <>
        <div>  <Route exact path='/'>
            <div className="container__app">
                <Header/>
                <Main/>
                  </div>
            <SliderPhoto/>
            <Favourite/>
            <Testimonial/>
            <Footer/>
        </Route>
        </div>
            <Route exact path='/login'>
                <Header/>
                <LoginPage/>
                <Footer/>
            </Route>
            </>
    );
}

export default App;
