import { useState } from 'react';
import './Counter.scss'


const Counter = () => {
    const [number, setNumber] = useState(0)
    return (
        <div className='Counter'>
            <div className="container">
                <div className="Counter-block">
                    <button onClick={() => setNumber(prevState => prevState + 1)}>Increment</button>
                    <p>{number}</p>
                    <button onClick={() => setNumber(prevState => prevState - 1)}>Decrement</button>
                </div>
            </div>
        </div>
    )
}

export default Counter;