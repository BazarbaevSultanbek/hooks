import { useState } from 'react';
import './List.scss';
import data from '../users.json';

const List = () => {
    const [users, setUsers] = useState(data);
    const [expandedItemId, setExpandedItemId] = useState(null);

    const toggleAccordion = (id) => {
        if (expandedItemId === id) {
            setExpandedItemId(null);
        } else {
            setExpandedItemId(id);
        }
    };

    const removeUser = (id) => {
        setUsers(users.filter((user) => user.id !== id))
    };

    return (
        <div className='List'>
            <div className="container">
                <div className="List-logo">
                    <h3>Information List</h3>
                </div>
                <div className="List-block">
                    <ul>
                        {users.map(item => (
                            <li key={item.id} id={item.id} className={`List-block-item ${expandedItemId === item.id ? 'expanded' : ''}`}>
                                <div className='List-block-item-face'>
                                    <h3>{item.name}</h3>
                                    <div>
                                        <input type="radio" name='acc' id={`radio-${item.id}`} onChange={() => toggleAccordion(item.id)} checked={expandedItemId === item.id} />
                                        <label htmlFor={`radio-${item.id}`}>
                                            <i className="fas fa-chevron-down" style={{ transform: expandedItemId === item.id ? 'rotate(180deg)' : 'rotate(0deg)' }}></i>
                                        </label>
                                    </div>
                                </div>
                                <div className='List-block-item-inner'>
                                    <div>
                                        <img src={item.photo} alt={item.name} />
                                    </div>
                                    <div>
                                        <p>Name: <span>{item.name}</span></p>
                                        <p>Date of Birth: <span>{item.date_of_birth}</span></p>
                                        <p>Email: <span>{item.email}</span></p>
                                    </div>
                                    <button onClick={() => removeUser(item.id)} id='remover'>X</button>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    );
};

export default List;
