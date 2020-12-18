import React, {Component} from "react";
import {Slide} from "react-slideshow-image";
import "./styles.css";
import "react-slideshow-image/dist/styles.css";

class SliderPhoto extends Component {
    constructor() {
        super();
        this.slideRef = React.createRef();
        this.back = this.back.bind(this);
        this.next = this.next.bind(this);
        this.state = {
            current: 0
        };
    }

    back() {
        this.slideRef.current.goBack();
    }

    next() {
        this.slideRef.current.goNext();
    }

    render() {
        const properties = {
            duration: 2000,
            autoplay: true,
            transitionDuration: 500,
            arrows: false,
            infinite: true,
            easing: "ease",
            indicators: (i) => <div className="indicator">{i + 1}</div>
        };
        const slideImages = [
            "https://pixabay.com/get/57e0dc404d57a414f6da8c7dda293e7a163cdce4564c704f752778d49e48c75a_1280.jpg",
           "https://pixabay.com/get/52e9d345435ba914f6da8c7dda293e7a163cdce4564c704f752778d49e45c65b_1280.jpg",
           "https://pixabay.com/get/54e5d044495ba514f6da8c7dda293e7a163cdce4564c704f752778d49e4bc351_1280.jpg",
            "https://pixabay.com/get/52e9d345435aae14f6da8c7dda293e7a163cdce4564c704f752778d49e45c25f_1280.jpg",
            "https://pixabay.com/get/54e8d3414e57b108f5d08460c621337d163ddfe04e5077497d2c7bdd9045c1_1280.jpg",
            "https://pixabay.com/get/54e0d3405753ae01f7c58574c32b347c143ac3e45551794a752672d096_1280.jpg",
            "https://pixabay.com/get/57e0d6444c52a514f6da8c7dda293e7a163cdce4564c704f752778d5974dc35b_1280.jpg",
            "https://pixabay.com/get/5fe3d6404c50b108f5d08460c621337d163ddfe04e5077497d2c7ad4944fc4_1280.jpg",
            "https://pixabay.com/get/54e6d5444b56aa14f6da8c7dda293e7a163cdce4564c704f752778d5974ecc5a_1280.jpg",
            "https://pixabay.com/get/52e0d6434852ae14f6da8c7dda293e7a163cdce4564c704f752778d5974cc55d_1280.jpg",
        ];
        return (
            <div className="slider__container">
                <div className="slide-container">
                    <Slide ref={this.slideRef} {...properties}>
                        {slideImages.map((each, index) => (
                            <div key={index} className="each-slide">
                                <img className="lazy" src={each} alt="sample"/>
                            </div>
                        ))}
                    </Slide>
                </div>
            </div>
        );
    }
}

export default SliderPhoto;