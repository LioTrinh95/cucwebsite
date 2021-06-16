import React from 'react'

function TimerButton({ active, handleSplit, handleStartPause, handleReset }) {
    return (
        <div className="timerbutton">
            <button className={`timerbutton__start ${active ? 'timerbutton__start--active' : ''}`} onClick={handleStartPause}>{!active ? 'Start' : 'Pause'}</button>
            <button
                className="timerbutton__split"
                disabled={!active}
                onClick={handleSplit}  >Split</button>
            <button className="timerbutton__reset" onClick={handleReset}>Reset</button>
        </div>
    )
}

export default TimerButton
