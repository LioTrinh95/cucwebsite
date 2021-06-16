import React from 'react'

export default function PomodoroButton({ active, handleStart, handleRefresh }) {
    return (
        <div className='pomodorobutton'>
            <button
                className={`pomodorobutton__start ${active ? 'pomodorobutton__start--active' : ''}`}
                onClick={handleStart}
            >
                {!active ? 'Start' : 'Pause'}
            </button>
            <button
                className='pomodorobutton__refresh'
                onClick={handleRefresh}
            >
                Refresh
            </button>
        </div>
    )
}
