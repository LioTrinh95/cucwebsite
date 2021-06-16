import React from 'react';

function Slide({ slide }) {

    const { content, author, path } = slide;
    return (
        <>
            <div className="slide">
                <img src={path} alt={author} className="slide__img" />
                <div className="slide__content">
                    <h4>{content}</h4>
                    <p >{author}</p>
                </div>
            </div>

        </>

    )
}

export default Slide
