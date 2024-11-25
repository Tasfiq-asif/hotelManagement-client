
import Banner from '../../components/Banner/Banner'
import NewsLetter from '../../components/NewsLetter/NewsLetter'
import FeaturedRooms from '../../components/FeaturedRooms/FeaturedRooms'
import HotelMap from '../../components/HotelMap/HotelMap'

const Home = () => {
  return (
    <div>
      <Banner/>
      <FeaturedRooms/>
      <HotelMap/>
      <NewsLetter/>
      
    </div>
  )
}

export default Home