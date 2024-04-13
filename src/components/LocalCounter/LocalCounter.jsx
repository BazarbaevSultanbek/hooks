import { useEffect, useState } from 'react'
import './LocalCounter.scss'


const LocalCounter = () => {
    const [count, setCount] = useState(JSON.parse(localStorage.getItem('Counter') || 0))
    const localStore = localStorage.setItem('Counter', count)
    const increment = () => {
        setCount(prevState => prevState + 1)
    }

    useEffect(() => {
        localStorage.setItem('Counter', count)
    })
    const decrement = () => {
        setCount(prevState => prevState - 1)
    }

    const Reset = () => {
        setCount(0)
    }

    return (
        <div className='LocalCounter'>
            <div className="container">
                <div className="LocalCounter-block">
                    <div className="LocalCounter-block-inner">
                        <h1>{count}</h1>
                        <div>
                            <button onClick={() => decrement()}>-1</button>
                            <button onClick={() => increment()}>+1</button>
                        </div>
                        <div>
                            <button onClick={() => Reset()}>Reset</button>
                        </div>
                        <p>Counter from LocalStorage</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default LocalCounter;