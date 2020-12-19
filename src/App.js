import './App.css';
import React from "react";
import Header from "./Components/Header/Header";
import Main from "./Components/Main/Main";
import Footer from "./Components/Footer/Footer";
import Testimonials from "./Components/Testimonials/Testimonials";
import SliderPhoto from "./Components/SliderPhoto/SliderPhoto";
import Favourite from "./Components/Favourite/Favourite";

function App() {
    return (
        <>
            <div className="container">
                <Header/>
                <Main/>
            </div>
            <SliderPhoto/>
            <Favourite/>
            <Testimonials/>
            <Footer/>

        </>
    );
}

export default App;
