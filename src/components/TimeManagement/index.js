import React, { useState } from 'react'
import Pomodoro from '../Pomodoro'
import { StopWatch } from '../StopWatch'

export default function TimeManagement() {
    const [tab, setTab] = useState(true)
    return (
        <div className="grid wide">
            <div className="row">
                <div className="col l-6 m-12 c-12">
                    <div className='timemanagement'>
                    <div className="timemanagement__content">
                        <div className='timemanagement__tab'>
                                <button 
                                    className={`timemanagement__tab-stopwatch ${tab ? 'timemanagement__tab-pomodoro--active' : ''}`} 
                                    onClick={() => setTab(true)} >
                                    <span>Online StopWatch</span>
                                </button>
                                <button 
                                    className={`timemanagement__tab-pomodoro ${!tab ? 'timemanagement__tab-pomodoro--active' : ''}`} 
                                    onClick={() => setTab(false)} >
                                    <span>Pomodoro Timer</span>
                                </button>
                            </div>
                            {tab ? <StopWatch /> : <Pomodoro />}
                        </div>
                    </div>

                </div>
            </div>
        </div>
    )
}
