import React from 'react'

function Section({ card }) {
    const { img, name, content,link } = card;
    return (
       
            <div className="section">
                <a href={link} alt={name}>
                    <img src={img} alt={name} />
                    <div className="section__heading">
                        <h3>{name}</h3>
                    </div>
                    <div className="section__overview">
                        <h3>Overview</h3>
                        {content}
                    </div>
                </a>
            </div>
       
        
    )
}

export default Section
