import React, { useEffect, useState } from 'react'



export default function Clock() {

    const [styleHours, setStyleHours] = useState();
    const [styleMinutes, setStyleMinutes] = useState();
    const [styleSeconds, setStyleSeconds] = useState();



    const scale = (num, in_min, in_max, out_min, out_max) => {
        return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
    }

    useEffect(() => {
        setInterval(setTime, 1000)
        return () => {
            clearInterval(setTime);
        }
    })

    const setTime = () => {
        const time = new Date();
        const hours = time.getHours();
        const hoursForClock = hours % 12;
        const minutes = time.getMinutes();
        const seconds = time.getSeconds();

        setStyleHours(`translate(-50%, -100%) rotate(${scale(hoursForClock, 0, 11, 0, 360)}deg)`)
        setStyleMinutes(`translate(-50%, -100%) rotate(${scale(minutes, 0, 59, 0, 360)}deg)`);
        setStyleSeconds(`translate(-50%, -100%) rotate(${scale(seconds, 0, 59, 0, 360)}deg)`);
    }

    return (
        <div className="clock-container">
            <div className="clock">
                <div style={{ transform: styleHours }} className="clock__needle clock__hour"></div>
                <div style={{ transform: styleMinutes }} className="clock__needle clock__minute"></div>
                <div style={{ transform: styleSeconds }} className="clock__needle clock__second"></div>
                <div className="clock__center-point"></div>
            </div>
        </div>
    )
}
