import { useEffect, useState } from 'react'
import './Name.scss'

const Name = () => {

    const [letter, setLetter] = useState('y')
    const [random, setRandom] = useState()
    const [counter, setCounter] = useState(0)

    const ChangeName = () => {
        setLetter(prevState => prevState + 'y')
        setCounter(prevState => prevState + 1)
    }

    const RandomNumber = () => {
        setRandom(Math.floor(Math.random() * 100))
    }

    return (
        <div className='Name'>
            <div className="container">
                <div className="Name-block">
                    <div className="Name-block-text">
                        <p>Welcome Cool Gu<span>{letter}</span> !</p>
                        <p>Your Lucky number is {random}</p>
                        <p>Name has changed {counter} times</p>
                    </div>
                    <div className="Name-block-navi">
                        <button onClick={() => ChangeName()}>Change name</button>
                        <button onClick={() => RandomNumber()}>Get New Lucky Number</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Name;