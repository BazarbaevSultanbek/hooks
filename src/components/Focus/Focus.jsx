import { useEffect, useRef } from 'react';
import './Focus.scss'


const Focus = () => {

    const input = useRef(null);

    const handleClick = () => {
        input.current.focus();
    }

    return (
        <div className='Focus'>
            <div className="container">
                <div className="Focus-block">
                    <input type="text" placeholder='Write text...' className='Focus-block-input' ref={input} />
                    <button className='Focus-block-btn' onClick={() => handleClick()}>Focus input</button>
                </div>
            </div>
        </div>
    )
}

export default Focus;