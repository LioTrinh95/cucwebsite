import React, { useState } from 'react'

function Song({ song, index, trackIndex, onClick }) {

    const [songActive, setSongActive] = useState(index);

    const handleClick = (e) => {
        setSongActive(Number(e.target.value));
        if (onClick) onClick(Number(e.target.value))
    }

    return (
        <div className={`song ${songActive === trackIndex ? 'song--active' : ''}`}>
            <h6>{song.name} - {song.singer}</h6>

            {songActive !== trackIndex &&
                <button
                    className='song__play'
                    value={index}
                    onClick={handleClick}> Play
                </button>}
        </div>
    )
}

export default Song
