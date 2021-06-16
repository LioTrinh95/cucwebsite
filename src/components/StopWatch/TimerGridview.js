import React from 'react'

export default function TimerGridview({ intervalList }) {
    return (
        <table className="timergridview" border="1">
            <thead>
                <tr>
                    <td></td>
                    <td>Interval</td>
                </tr>
            </thead>
            <tbody>
                {intervalList && intervalList.map((interval, index) => (
                    <tr key={index}>
                        <td>#{index + 1}</td>
                        <td>{interval.interval}</td>
                    </tr>
                ))}

            </tbody>

        </table>
    )
}
