import React from 'react'

export default function PomodoroTimeController({ durationId, changeTimer, type, label, timer }) {

    let totalTimer = timer[type];

    const handleChangeTimer = (operator) => {
        let result = 0;

        if (timer.mode === type) {
            if (operator === 'decrement' && totalTimer > 60) {
                totalTimer = totalTimer - 60;
                result = {
                    type: type,
                    typeValue: totalTimer,
                    time: {
                        currentTime: totalTimer,
                        startingTime: totalTimer,
                    }
                }

            }
            if (operator === 'increment' && totalTimer < 3600) {
                totalTimer = totalTimer + 60;
                result = {
                    type: type,
                    typeValue: totalTimer,
                    time: {
                        currentTime: totalTimer,
                        startingTime: totalTimer,
                    }
                }
            }
            if (changeTimer) changeTimer(result);

        } else {
            if (operator === 'decrement' && totalTimer > 60) {
                totalTimer = totalTimer - 60;
                result = {
                    type: type,
                    typeValue: totalTimer,
                    time: {
                        currentTime: timer.time.currentTime,
                        startingTime: timer.time.startingTime,
                    }
                }

            }
            if (operator === 'increment' && totalTimer < 3600) {
                totalTimer = totalTimer + 60;
                result = {
                    type: type,
                    typeValue: totalTimer,
                    time: {
                        currentTime: timer.time.currentTime,
                        startingTime: timer.time.startingTime,
                    }
                }
            }
            if (changeTimer) changeTimer(result);
        }
    };

    return (
        <div className='pomodorotimecontroller'>
            <button
                onClick={() => handleChangeTimer('decrement')}
                className="pomodorotimecontroller__button"
            > - </button>
            <div className='pomodorotimecontroller__timer'>
                <h4 className='pomodorotimecontroller__timer-mode'>{label}</h4>
                <span className='pomodorotimecontroller__timer-mins'>{timer[type] / 60} mins</span>
            </div>

            <button
                onClick={() => handleChangeTimer('increment')}
                className="pomodorotimecontroller__button"
            > + </button>
        </div>
    )
}
