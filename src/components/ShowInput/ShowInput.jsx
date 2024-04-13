import { useEffect, useRef, useState } from 'react'
import './ShowInput.scss'

const ShowInput = () => {
    const [visible, setVisible] = useState(true)
    const InputShow = useRef(null)


    useEffect(() => {
        if (visible) {
            InputShow.current.style.display = 'block'
        } else {
            InputShow.current.style.display = 'none'
        }
    })

    return (
        <div className="ShowInput">
            <div className="container">
                <div className="ShowInput-block">
                    <div className="ShowInput-block-inner">
                        <div>
                            <button onClick={() => setVisible(!visible)}>{visible ? 'Hide' : 'Show'}</button>
                        </div>
                        <p>Input</p>
                        <input type="text" ref={InputShow} />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ShowInput;