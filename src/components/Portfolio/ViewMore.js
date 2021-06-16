import React, { createElement, useEffect, useState } from 'react'

export default function ViewMore( {handleClickViewMore}) {
    const [top, setTop] = useState(0);
    const [left, setLeft] = useState(0);

    const [span, setSpan] = useState(null);


    const handleClick = (e) => {
        handleRippleEffect(e);
        if(handleClickViewMore) handleClickViewMore(e);
    }

    const handleRippleEffect = (e) => {
        const x = e.pageX;
        const y = e.pageY;

        const btnTop = e.target.offsetTop;
        const btnLeft = e.target.offsetLeft;

        const xInside = x - btnLeft;
        const yInside = y - btnTop;

        setLeft(`${xInside}px`);
        setTop(`${yInside}px`);
    }

    useEffect(() => {
        setSpan(createElement('span'
            , { style: { top: top, left: left }, className: "viewmore__circle" }));
    }, [top, left])

    useEffect(() => {
        const id = setInterval(() => setSpan(null), 500)
        return () => {
            clearInterval(id);
        }
    }, [top, left])



    return (
        <div className="viewmore">
            <button onClick={handleClick}> View More
                <span className="viewmore__circle" style={{ left: '27px', top: '80px' }}></span>
                {span}
            </button>
        </div>
    )
}
