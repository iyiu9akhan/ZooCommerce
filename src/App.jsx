import Banner from './components/Banner/Banner'
import Menubar from './components/Menubar/Menubar'
import Navbar from './components/Navbar/Navbar'
import './App.css'
import Trending from './components/Trending/Trending'
import Offer from './components/Offer/Offer'
import Categories from './components/Categories/Categories'
import ImgProduct from './components/ImgProduct/ImgProduct'
import MegaMenu from './components/Menubar/MegaMenu'

function App() {

  return (
    <div className='h-screen overflow-y-scroll scrollbar-thin scrollbar-thumb-button scrollbar-track-gray-100'>
      <Navbar />
      {/* <Menubar /> */}
      <MegaMenu/>
      <Banner />
      <Categories />
      <Trending />
      <Offer />
      <ImgProduct />
    </div>
  )
}

export default App
