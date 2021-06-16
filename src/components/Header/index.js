import React from 'react'
import Clock from '../Clock'

function Header() {
    return (
        <div className='header'>
            <div className="header__content">
                <div className="header__content-header">
                    <Clock />
                    <h1 className="header__content-h1">
                        Lio's Blog
                    </h1>
                </div>

                <div className="header__content-links">
                    <a href="/">Home</a>
                    <span className="header__content-span"></span>
                    <a href="/">About me</a>
                </div>
            </div>
        </div>
    )
}

export default Header
