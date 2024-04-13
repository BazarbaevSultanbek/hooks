import { useEffect, useState } from 'react'
import './Time.scss'


const Time = () => {
    const [time, setTime] = useState(new Date())
    const [hours, setHours] = useState(new Date().getHours())
    const [minutes, setMinutes] = useState(new Date().getMinutes())
    const [seconds, setSeconds] = useState(new Date().getSeconds())


    useEffect(() => {
        const interval = setInterval(() => {
            setHours(new Date().getHours().toString().padStart(2, '0'))
            setMinutes(new Date().getMinutes().toString().padStart(2, '0'))
            setSeconds(new Date().getSeconds().toString().padStart(2, '0'))
        }, 1000)
    })
    return (
        <div className='Time'>
            <div className="container">
                <div className="Time-block">
                    <div className="Time-block-inner">
                        <p>The time is</p>
                        <div>
                            <span>{hours}</span>
                            <span>:</span>
                            <span>{minutes}</span>
                            <span>:</span>
                            <span>{seconds}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}


export default Time;