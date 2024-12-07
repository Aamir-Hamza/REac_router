import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { Route, Routes } from 'react-router-dom'
import {Home} from"./Component/Home"
import {About} from"./Component/About"
import {Contact} from"./Component/Contact"
import {Navbar} from  "./Component/Navbar"

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
    <Navbar/>
     <Routes>
      <Route path='/home' element= {<Home/>}/>
      <Route path='/about' element= {<About/>}/>
      <Route path='/contact' element= {<Contact/>}/>
     </Routes>

    </>
  )
}

export default App
