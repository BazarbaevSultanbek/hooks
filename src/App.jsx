import { useState } from 'react'
import List from './components/List/List.jsx'
import './App.css'
import Click from './components/Click/Click.jsx'
import Counter from './components/Counter/Counter.jsx'
import Focus from './components/Focus/Focus.jsx'
import Scroll from './components/Scroll/Scroll.jsx'
import PasswordReset from './components/PasswordRest/PasswordReset.jsx'
import Name from './components/Name/Name.jsx'
import Place from './components/Place/Place.jsx'
import Background from './components/Background/Background.jsx'
import LocalCounter from './components/LocalCounter/LocalCounter.jsx'
import ShowInput from './components/ShowInput/ShowInput.jsx'
import Delivery from './components/Delivery/Delivery.jsx'
import Items from './components/Items/Items.jsx'
import Time from './components/Time/Time.jsx'

function App() {
  const [page, setPage] = useState('List')

  const ChangingPage = () => {
    switch (page) {
      case 'List':
        return <List />;
      case 'Click':
        return <Click />;
      case 'Counter':
        return <Counter />;
      case 'Focus':
        return <Focus />;
      case 'Scroll':
        return <Scroll />;
      case 'PasswordReset':
        return <PasswordReset />;
      case 'Name':
        return <Name />;
      case 'Place':
        return <Place />;
      case 'Background':
        return <Background />;
      case 'LocalCounter':
        return <LocalCounter />;
      case 'ShowInput':
        return <ShowInput />;
      case 'Delivery':
        return <Delivery />;
        case 'Items':
        return <Items />;
        case 'Time':
          return <Time />;

    }
  }

  return (
    <div className='App'>
      <div className="container">
        <div className="App-logo">
          <h3>Hooks</h3>
        </div>
        <div className="App-block">
          <ul>
            <li onClick={() => setPage('List')}>List</li>
            <li onClick={() => setPage('Click')}>Click</li>
            <li onClick={() => setPage('Counter')}>Counter</li>
            <li onClick={() => setPage('Focus')}>Focus</li>
            <li onClick={() => setPage('Scroll')}>Scroll</li>
            <li onClick={() => setPage('PasswordReset')}>PasswordReset</li>
            <li onClick={() => setPage('Name')}>Name</li>
            <li onClick={() => setPage('Place')}>Place</li>
            <li onClick={() => setPage('Background')}>Background</li>
            <li onClick={() => setPage('LocalCounter')}>LocalCounter</li>
            <li onClick={() => setPage('ShowInput')}>ShowInput</li>
            <li onClick={() => setPage('Delivery')}>Delivery</li>
            <li onClick={() => setPage('Items')}>Items</li>
            <li onClick={() => setPage('Time')}>Time</li>
          </ul>
        </div>
        <div className="page-content">
          {ChangingPage()}
        </div>
      </div>
    </div>
  )
}

export default App;
