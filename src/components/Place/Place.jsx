import { useEffect, useState } from 'react'
import './Place.scss'

const Place = () => {

    const [width, setWidth] = useState(0)
    const [height, setHeight] = useState(0)
    const [counter, setCounter] = useState(0)

    // console.log()

    const detectPosition = (e) => {
        setWidth(e.clientX)
        setHeight(e.clientY)
    }

    return (
        <div className='Place' onMouseMove={detectPosition}>
            <div className="container">
                <div className="Place-block">
                    <p>You clicked {counter} times</p>
                    <button onClick={() => setCounter(prevState => prevState + 1)}>Click me!</button>
                    <p>X position: {width}</p>
                    <p>Y position: {height}</p>
                </div>
            </div>
        </div>
    )
}

export default Place;