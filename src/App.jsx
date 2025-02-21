import { Outlet } from 'react-router-dom'
import './App.css'
import Banner from './home/Banner'
import Footer from './home/Footer'
import Navbar from './home/Navbar'
import WhyUse from './home/WhyUse'

function App () {
  return (
    <>
    <Navbar></Navbar>
    <Outlet></Outlet>
    <Footer></Footer>
    </>
  )
}

export default App
