import { useState } from 'react'
import './Items.scss'


const Items = () => {
    const [items, setItems] = useState(['Items 0', 'Items 1', 'Items 2'])
    const [count, setCount] = useState(3)
    const [show, setShow] = useState()

    const addItem = () => {        
        const newItems = [...items]
        newItems.push(`Items ${count}`)
        setItems(newItems)
        setCount(count => count + 1)
    }
    return (
        <div className='Items'>
            <div className="container">
                <div className="Items-block">
                    <div className="Items-block-inner">
                        <p>Clicked to {show}</p>
                        <ul>
                            {
                                items.map((e, index) => (
                                    <li onClick={() => setShow(e)} key={index}>{e}</li>
                                ))
                            }
                        </ul>

                        <button onClick={() => addItem()}>Add</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Items;