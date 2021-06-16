import React, { useEffect, useState } from 'react'

function Navbar() {
    const [iconState, setIconState] = useState(false);

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
    }, [])

    const handleScroll = () => {
        if (window.scrollY > 80) {
            setIconState(true);
        } else {
            setIconState(false);
        }
    }

    return (
        <div className={`navbar ${iconState ? 'whiteBg' : 'transparent'}`}>
            <div className="grid wide">
                <div className="navbar__content">

                    <div className="navbar__left">
                        <img src={require(`../../images/${iconState ? 'logo-dark.png' : 'logo-light.png'}`).default} alt="" />
                    </div>
                    <ul className="navbar__right">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Portfolio</a></li>
                        <li><a href="/">Relax</a></li>
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Navbar
