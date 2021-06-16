import React, { useEffect, useRef, useState } from 'react';
import PomodoroButton from './PomodoroButton';
import PomodoroTimeController from './PomodoroTimeController';
import PomodoroTimer from './PomodoroTimer';

export default function Pomodoro() {
    const [timer, setTimer] = useState({
        session: 1500,
        break: 300,
        mode: 'session',
        time: { currentTime: 1500, startingTime: 1500 },
        active: false,
        name: 'Pomodoro Timer',
    });

    //Create ref for the audio
    const beep = useRef();

    useEffect(() => {
        if (timer.active && timer.time.currentTime > 0) {
            const interval = setInterval(() => {
                setTimer({
                    ...timer,
                    time: {
                        startingTime: timer.time.startingTime,
                        currentTime: timer.time.currentTime - 1
                    }
                })
            }, 1000)
            return () => clearInterval(interval);

        } else if (timer.time.currentTime === 0) {
            beep.current.play();
            beep.current.currentTime = 0;
            if (timer.mode === 'session') {
                setTimer({
                    ...timer,
                    time: {
                        currentTime: timer.break,
                        startingTime: timer.break,
                    },
                    mode: 'break'
                })
            }
            if (timer.mode === 'break') {
                setTimer({
                    ...timer,
                    time: {
                        currentTime: timer.session,
                        startingTime: timer.session,
                    },
                    mode: 'session'
                })
            }

        }
    }, [timer])

    useEffect(() => {
        if (timer.playPause) {
            beep.current.pause();
            beep.current.currentTime = 0;
        }
    })

    const handleStart = () => {
        setTimer({
            ...timer,
            active: !timer.active
        })
    }
    const handleRefresh = () => {
        setTimer({
            session: 1500,
            break: 300,
            mode: 'session',
            time: { currentTime: 1500, startingTime: 1500 },
            active: false,
            name: 'Pomodoro Timer',
        });
        beep.current.pause();
        beep.current.currentTime = 0;
    }
    const changeTimer = (result) => {
        if (!result) return null;
        setTimer({
            ...timer,
            [result.type]: result.typeValue,
            time: {
                currentTime: result.time.currentTime,
                startingTime: result.time.startingTime,
            }
        })
    }


    return (
        <div className="pomodoro">
            <div className="pomodoro__content">
                <div className="pomodoro__content-timer">
                    <PomodoroTimer time={timer.time} mode={timer.mode} />
                </div>

                <div className="pomodoro__content-controller">
                    <PomodoroTimeController
                        durationId={timer.session}
                        changeTimer={changeTimer}
                        type="session"
                        label={"Session"}
                        timer={timer}
                    />
                    <PomodoroTimeController
                        durationId={timer.break}
                        changeTimer={changeTimer}
                        type="break"
                        label={"Break"}
                        timer={timer}
                    />
                </div>
                <div className="pomodoro__content-button">
                    <PomodoroButton
                        active={timer.active}
                        handleStart={handleStart}
                        handleRefresh={handleRefresh}
                    />
                </div>
                <audio
                    id="beep"
                    preload="auto"
                    src="https://www.soundjay.com/misc/sounds/bell-ringing-05.mp3"
                    ref={beep}
                ></audio>
            </div>
        </div>
    )
}
