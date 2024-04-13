import { useEffect, useRef, useState } from 'react'
import './Background.scss'


const Background = () => {
    const [color, setColor] = useState()
    const main = useRef(null)

    useEffect(() => {
        main.current.style.background = color
    }, [color])
    return (
        <div className='Background' ref={main}>
            <div className="container" >
                <div className="Background-block">
                    <select name="color" id="color" onChange={(e) => setColor(e.target.value)}>
                        <option value="#fceeb5">Sand</option>
                        <option value="#a2ccb6">Sea</option>
                        <option value="#ee786e">Peach</option>
                    </select>
                </div>
            </div>

        </div>
    )
}

export default Background;