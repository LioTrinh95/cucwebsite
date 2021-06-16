import React, { useEffect, useState } from 'react'
import Timer from './Timer'
import TimerButton from './TimerButton'
import TimerGridview from './TimerGridview';
import * as FileSaver from "file-saver";
import * as XLSX from "xlsx";




export const StopWatch = () => {

    const [isActive, setIsActive] = useState(false);
    const [time, setTime] = useState(0);
    const [intervalList, setIntervalList] = useState([]);



    useEffect(() => {
        let interval = null;

        if (isActive) {
            interval = setInterval(() => {
                setTime((time) => time + 100)
            }, 100);
        } else {
            clearInterval(interval);
        }

        return () => {
            clearInterval(interval);
        }
    }, [isActive])

    const handleStartPause = () => {
        setIsActive(!isActive);
    };

    const handleReset = () => {
        setIsActive(false);
        setTime(0);
        setIntervalList([])
    };

    const handleSplit = () => {
        setIntervalList(prevInterval => ([...prevInterval, {
            interval: `${("0" + Math.floor((time / 3600000) % 60)).slice(-2)}:${("0" + Math.floor((time / 60000) % 60)).slice(-2)}:${("0" + Math.floor((time / 1000) % 60)).slice(-2)}.${("0" + ((time / 10) % 100)).slice(-2)}`,
        }])
        )
    }

    const fileType =
        "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet;charset=UTF-8";
    const fileExtension = ".xlsx";


    const exportToCSV = () => {
        const ws = XLSX.utils.json_to_sheet(intervalList);
        const wb = { Sheets: { data: ws }, SheetNames: ["data"] };
        const excelBuffer = XLSX.write(wb, { bookType: "xlsx", type: "array" });
        const data = new Blob([excelBuffer], { type: fileType });
        FileSaver.saveAs(data, 'IntervalSplit' + fileExtension);
    }


    return (

        <div className="stopwatch">
            <div className="stopwatch__content">
                <div className="stopwatch__content-timer">
                    <Timer time={time} />
                </div>
                <div className="stopwatch__content-button">
                    <TimerButton
                        active={isActive}
                        handleStartPause={handleStartPause}
                        handleSplit={handleSplit}
                        handleReset={handleReset}
                    />
                </div>
                <div className="stopwatch__content-gridview">
                    <TimerGridview intervalList={intervalList} />
                    <button onClick={exportToCSV}>Export results as text</button>
                </div>
            </div>

        </div>
    )
}
