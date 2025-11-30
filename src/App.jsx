// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import './App.css'
import Banner from './components/Banner/Banner'
import Menubar from './components/Menubar/Menubar'
import Navbar from './components/Navbar/Navbar'

function App() {
  // const [count, setCount] = useState(0)

  return (
    <div className=' h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-button scrollbar-track-gray-100'>
      <Navbar></Navbar>
      <Menubar></Menubar>
      <Banner></Banner>
    </div>
  )
}

export default App
