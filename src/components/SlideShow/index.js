import React from 'react';
import Dots from './Dots';
import useSlider from './hooks/useSlider';
import Slide from './Slide';

function SlideShow({ data }) {

    //use addItem for anything that needs loading confirmation
    //like imges or embeds
    const { offset, prevSlide, nextSlide } = useSlider({
        total: data.length,
        enabled: true,
        useLoaded: false,
        speed: 5000,
    });

    return (
        <div className="slideshow">
            <div className="slideshow__content"
                style={{
                    transform: `translate3d(-${offset * 500}px,0,0)`,
                    width: `${data.length * 500}px`
                }}
            >
                {data.map((slide, index) => (
                    <Slide key={index} slide={slide} />
                ))}
            </div>
            <div className="slideshow__button">
                <button
                    className="slideshow__button-left"
                    onClick={prevSlide}
                >
                    <i className="fas fa-chevron-left"></i>
                </button>
                <button
                    className="slideshow__button-right"
                    onClick={nextSlide}
                >
                    <i className="fas fa-chevron-right"></i>

                </button>
            </div>
            <div className="slideshow__dots">
                <Dots data={data} activeSlide={offset} />
            </div>
        </div>


    )
}

export default SlideShow
