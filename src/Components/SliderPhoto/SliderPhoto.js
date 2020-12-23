import React, {Component} from "react";
import {Slide} from "react-slideshow-image";
import "./styles.css";
import "react-slideshow-image/dist/styles.css";
import imgOne from '../../img/sliderImage/1.jpg';
import imgTwo from '../../img/sliderImage/2.jpg';
import imgThree from '../../img/sliderImage/3.jpg';
import imgFour from '../../img/sliderImage/4.jpg';
import imgFive from '../../img/sliderImage/5.jpg';
import imgSix from '../../img/sliderImage/6.jpg';
import imgSeven from '../../img/sliderImage/7.jpg';
import imgEight from '../../img/sliderImage/8.jpg';
import imgNine from '../../img/sliderImage/9.jpg';
import imgTen from '../../img/sliderImage/10.jpg';

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
                imgOne, imgFour, imgThree, imgEight , imgFive, imgSix, imgTwo,  imgSeven, imgNine, imgTen
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