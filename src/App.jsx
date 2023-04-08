import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navber from './components/Navber/Navber'
import PriceList from './components/price/PriceList'
import Deshboards from './components/Deshboard/Deshboards'
import PhonesBars from './components/PhonesBars/PhonesBars'



function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="App">
      <Navber></Navber>
      <h1 className='text-8xl text-purple-600'>Hello from tailwind yex</h1>
    <PriceList></PriceList>
    <Deshboards></Deshboards>
   <PhonesBars></PhonesBars>
    </div>
  )
}

export default App
