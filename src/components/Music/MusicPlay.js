import React, { useEffect, useRef, useState } from 'react';
import Song from './Song';

function MusicPlay({ data = [] }) {
    const [more, setMore] = useState(true);

    // State
    const [trackIndex, setTrackIndex] = useState(2);
    const [trackProgress, setTrackProgress] = useState(0);
    const [isPlaying, setIsPlaying] = useState(false);
    const [repeat, setRepeat] = useState(false);
    const [ramdom, setRamdom] = useState(false);

    // Destructure for conciseness
    const { name, path } = data[trackIndex];

    // Refs
    const audioRef = useRef(new Audio(path));
    const intervalRef = useRef();
    const isReady = useRef(false);

    // Destructure for conciseness
    const { duration } = audioRef.current;

    const currentPercentage = duration
        ? `${(trackProgress / duration) * 100}%`
        : "0%";

    const trackStyling = `-webkit-gradient(linear, 0% 0%, 100% 0%, color-stop(${currentPercentage}, #fff), color-stop(${currentPercentage}, #777))`;

    const startTimer = () => {
        // Clear any timers already running
        clearInterval(intervalRef.current);

        intervalRef.current = setInterval(() => {
            if (audioRef.current.ended) {
                if (repeat) {
                    setTrackIndex(trackIndex)
                    audioRef.current.play();
                } else if (ramdom) {
                    toRamdomTract();
                }
                else {
                    toNextTrack();
                }
            } else {
                setTrackProgress(audioRef.current.currentTime);
            }
        }, [1000]);
    };

    //track Progress
    const onScrub = (value) => {
        //Clear any timers already running
        clearInterval(intervalRef.current);
        audioRef.current.currentTime = value;
        setTrackProgress(audioRef.current.currentTime);

    }
    const onScrubEnd = () => {
        //If not already playing start
        if (!isPlaying) setIsPlaying(true);
        startTimer();

    }

    const toPrevTrack = () => {
        if (ramdom) {
            toRamdomTract();
        } else {
            if (trackIndex - 1 < 0) {
                setTrackIndex(data.length - 1)
            } else {
                setTrackIndex(trackIndex - 1)
            }
        }
    }

    const toNextTrack = () => {
        if (ramdom) {
            toRamdomTract();
        } else {
            if (trackIndex < data.length - 1) {
                setTrackIndex(trackIndex + 1);
            } else {
                setTrackIndex(0);
            }
        }
    };
    const setRepeatTract = () => {
        setRamdom(false);
        setRepeat(!repeat);
    }
    const setRandomTract = () => {
        setRepeat(false);
        setRamdom(!ramdom);
    }

    const toRamdomTract = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * data.length);
        } while (newIndex === trackIndex);
        setTrackIndex(newIndex);
    }

    useEffect(() => {
        if (isPlaying) {
            audioRef.current.play()
                .catch(error => {
                    console.log("error", error);
                });
            startTimer();
        } else {
            audioRef.current.pause();
        }
    }, [isPlaying]);

    useEffect(() => {
        audioRef.current.pause();

        audioRef.current = new Audio(path);

        if (isReady.current) {
            audioRef.current.play();
            setIsPlaying(true);
        }
        else {
            isReady.current = true;
        }

    }, [trackIndex])

    useEffect(() => {
        // Pause and clean up on unmount
        return () => {
            audioRef.current.pause();
            clearInterval(intervalRef.current);
        };
    }, []);

    const handleClickSong = (value) => {
        setTrackIndex(value)
    }
    return (
        <>
            <div className="musicplay">
                <h6 className="musicplay__name">Now playing: {name}</h6>
                <div className="musicplay__button">
                    <div className={`btn btn-repeat ${repeat ? 'active' : ''}`} onClick={setRepeatTract}>
                        <i className="fas fa-redo"></i>
                    </div>
                    <div className="btn btn-prev" onClick={toPrevTrack}>
                        <i className="fas fa-step-backward"></i>
                    </div>
                    <div className="btn btn-toggle-play" onClick={() => setIsPlaying(!isPlaying)} >
                        {isPlaying && <i className="fas fa-pause icon-pause"></i>}
                        {!isPlaying && <i className="fas fa-play icon-play"></i>}
                    </div>
                    <div className="btn btn-next" onClick={toNextTrack}>
                        <i className="fas fa-step-forward"></i>
                    </div>
                    <div className={`btn btn-random ${ramdom ? 'active' : ''}`} onClick={setRandomTract}>
                        <i className="fas fa-random"></i>
                    </div>
                </div>
                <div className="musicplay__content">
                    <input
                        type="range"
                        value={trackProgress}
                        step="1"
                        min="0"
                        max={duration ? duration : `${duration}`}
                        className="musicplay__content-progress"
                        onChange={(e) => onScrub(e.target.value)}
                        onMouseUp={onScrubEnd}
                        onKeyUp={onScrubEnd}
                        style={{ background: trackStyling }}
                    />
                    <audio id="audio" src=""></audio>
                </div>
                <div className="musicplay__list">
                    {!more ? <i className="fas fa-chevron-circle-down" onClick={() => setMore(true)}></i>
                        : <>{data.map((song, index) => (
                            <Song
                                key={index}
                                song={song}
                                index={index}
                                onClick={handleClickSong}
                                trackIndex={trackIndex} />
                        ))}
                            <i className="fas fa-chevron-circle-up" onClick={() => setMore(false)}></i></>}
                </div>

            </div>


        </>

    );
}

export default MusicPlay;