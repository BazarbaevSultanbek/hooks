import { useState } from 'react';
import './Click.scss'


const Click = () => {
    const [buttonText, setButtonText] = useState('Click the Button');

    const handleButtonClick = () => {
        setButtonText('Button is clicked');
    };
    return (
        <div className='Click'>
            <div className="container">
                <div className="Click-logo">
                    <h3>Click</h3>
                </div>
                <div className="Click-block">
                    <button onClick={handleButtonClick}>Click me!</button>
                    <p>{buttonText}</p>
                </div>
            </div>
        </div>
    )
}

export default Click;