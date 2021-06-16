import React from 'react'

export default function PomodoroTimer({ time, mode }) {

    const formatTime = (time) => {
        let minites = Math.floor(time / 60);
        if (minites < 10) {
            minites = "0" + minites
        }
        let seconds = Math.floor(time - Math.floor(time / 60) * 60);
        if (seconds < 10) {
            seconds = "0" + seconds;
        }
        return `${minites}:${seconds}`
    }

    return (
        <div className="pomodorotimer">
            <div className="pomodorotimer__content">
                <h4 className="pomodorotimer__content-mode">
                    {mode}
                </h4>
                <p className="pomodorotimer__content-timer">
                    {formatTime(time.currentTime)}
                </p>
            </div>
        </div>
    )
}
