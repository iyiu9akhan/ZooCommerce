// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
import Banner from './components/Banner/Banner'
import Menubar from './components/Menubar/Menubar'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Trending from './components/Trending/Trending'

function App() {
  // const [count, setCount] = useState(0)
  
  return (
    <div className=' h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-button scrollbar-track-gray-100'>
      <Navbar></Navbar>
      <Menubar></Menubar>
      <Banner></Banner>
      <Trending></Trending>
    </div>
  )
}

export default App
