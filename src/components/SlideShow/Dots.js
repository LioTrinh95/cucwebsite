import React from 'react'


function Dots({ data, activeSlide }) {
    return (
        <div className="dots">
            {data.map((data, index) => (
                <span key={index}
                    className={`dots__span ${activeSlide === index ? 'dots__span--active' : ''}`} />
            ))}
        </div>
    )
}

export default Dots
