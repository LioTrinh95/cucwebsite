import React from 'react'

export default function Timer({ time }) {

    return (
        <div className="timer">
            <span className="timer__span">
                <span className="timer__span-hours">
                    {("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:
                </span>
                <span className="timer__span-minutes">
                    {("0" + Math.floor((time / 60000) % 60)).slice(-2)}:
                </span>
                <span className="timer__span-seconds">
                    {("0" + Math.floor((time / 1000) % 60)).slice(-2)}
                </span>
                <span className="timer__span-miniseconds">
                    .{("0" + ((time / 10) % 100)).slice(-2)}
                </span>
            </span>
        </div>
    )
}
