import React, { useMemo, useState } from 'react';
import data from '../../data';
import SlideShow from '../SlideShow';
import MusicPlay from './MusicPlay';

function Music() {
    //set state
    const [musicList, setMusicList] = useState([]);
    const [images, setImages] = useState([]);

    useMemo(() => {
        try {
            setMusicList(data.songs)
        }
        catch {
            console.log("get data error")
        }
    }, [])

    useMemo(() => {
        try {
            setImages(data.images)
        }
        catch {
            console.log("get data error")
        }
    }, [])

    return (
        <div className="motivationalmusic">
            <div className="grid wide">
                <div className="row">
                    <div className="col l-6 m-12 c-12">
                        <div className="motivationalmusic__content">
                                <MusicPlay data={musicList} />
                        </div>
                    </div>
                    <div className="col l-6 m-12 c-12">
                        <div className="motivationalmusic__card">
                            <SlideShow data={images} />
                        </div>
                    </div>
                </div>
               
            </div>
        </div>
    )
}

export default Music
