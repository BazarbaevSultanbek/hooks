import { useState } from 'react'
import './Delivery.scss'

const Delivery = () => {

    const [delivery, setDelivery] = useState(['in Progress', 'in Progress', 'in Progress'])
    const [count, setCount] = useState(0);

    const handleClick = () => {
        if (count < delivery.length) {
            const updatedDel = [...delivery];
            updatedDel[count] = 'Delivered';
            setDelivery(updatedDel);
            setCount(prevCount => prevCount + 1);
        }
    }
    return (
        <div className="Delivery">
            <div className="container">
                <div className="Delivery-block">
                    <div className="Delivery-block-inner">
                        {
                            delivery.map((item, index) => {
                                return (
                                    <p key={index}>{item}</p>
                                )
                            })
                        }
                        <button onClick={() => handleClick()}>Special Button</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Delivery;