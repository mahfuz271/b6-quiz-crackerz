import React from 'react';
import slide1 from '../../img/slide.jpg'

const Slider = () => {
    return (
        <div id="myCarousel" className="carousel slide mb-5" data-bs-ride="carousel">
            <div className="carousel-inner">
                <div className="carousel-item active rounded overflow-hidden">
                    <img className="bg-placeholder-img w-100" src={slide1} />
                    <div className="bg-carousel-image"></div>
                    <div
                        className="carousel-caption text-center h-100 d-flex align-items-center justify-content-center flex-column bottom-0">
                        <h1>Unlock your potential.</h1>
                        <p>With our platform, you can quantify your skills, grow in your role and stay relevant on critical topics.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Slider;