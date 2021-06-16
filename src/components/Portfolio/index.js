import React, { useEffect, useState } from 'react'
import Section from './Section';
import ViewMore from './ViewMore';
import data from '../../data';

export default function Portfolio() {
    const [cards, setCards] = useState([]);

    const [viewMore, setViewMore] = useState(
        {
            total: data.cards.length,
            limit: 3,
        }
    )

    useEffect(() => {
        try {
            setCards(data.cards.slice(0,viewMore.limit));
        } catch (error) {
            console.log("Error", error);
        }
    }, [viewMore])

    const handleClickViewMore = () => {
        setViewMore( {
            ...viewMore,
            limit: viewMore.limit + 3,
        })

    }
    return (
        <div className="portfolio">
            <div className="grid wide">
                <div className="row portfolio__content">
                        {cards.map((card, index) => (
                            <div className='col l-4 m-6 c-12' key={index} >
                                <Section card={card} />
                            </div>
                        ))}
                    </div>
                {viewMore.total >= viewMore.limit &&  <ViewMore handleClickViewMore = {handleClickViewMore}/>}
            </div>
        </div>
       
    )
}
