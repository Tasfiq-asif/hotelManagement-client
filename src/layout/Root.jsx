
import Navbar from '../components/Navbar/Navbar'
import { Outlet } from 'react-router-dom'
import Footer from '../components/Footer/Footer'

const Root = () => {
  return (
    <div className='max-w-7xl mx-auto' >
        <Navbar/>
        <div className="min-h-[calc(100vh-306px)]">
            <Outlet/>
        </div>
        <Footer/>
    </div>
  )
}

export default Root