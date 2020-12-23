import './App.css';
import React, {useEffect, useState} from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import SliderPhoto from "./Components/SliderPhoto/SliderPhoto";
import Favourite from "./Components/Favourite/Favourite";

import {
    Route
} from 'react-router-dom';
import LoginPage from "./Components/Login/LoginPage";
import {useStateValue} from "./stateProvider";
import {auth} from "./firebase";

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
                dispatch({
                    type: 'SET_NAME',
                    name: authUser
                })

            } else {
                dispatch({
                    type: 'SET_USER',
                    user: null
                })

                dispatch({
                    type: 'SET_NAME',
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
            <Testimonials/>
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
