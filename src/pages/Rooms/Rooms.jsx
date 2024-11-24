import { useEffect, useState } from "react";
import Spinner from "../../components/Spinner/Spinner";
import axios from "axios";
import useAuth from "../../hooks/useAuth";
import Button from "../../components/Button";
import { Link } from "react-router-dom";

const Rooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [sortOrder, setSortOrder] = useState(''); // State for sorting order

  const {user} = useAuth()
  // Fetch rooms data with optional price filtering and sorting
  const fetchRooms = async () => {
    setLoading(true);
    try {
      const response = await axios.get('http://localhost:3000/rooms', {
        params: { minPrice, maxPrice, sortOrder }  // Pass query parameters for price range and sort order
      });
      setRooms(response.data);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching rooms:", error);
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchRooms(); // Fetch all rooms on component mount
  }, []);

  // Handle filter change
  const handleFilterSubmit = (e) => {
    e.preventDefault();
    fetchRooms(); // Fetch rooms with the selected filters
  };

  if (loading) {
    return <Spinner />;
  }

  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold text-center mb-8">Available Rooms</h2>

      {/* Filter and Sort Form */}
      <form onSubmit={handleFilterSubmit} className="flex flex-col items-center gap-4 mb-8 md:flex-row md:justify-center">
        <input
          type="number"
          placeholder="Min Price"
          value={minPrice}
          onChange={(e) => setMinPrice(e.target.value)}
          className="input input-bordered w-32"
        />
        <input
          type="number"
          placeholder="Max Price"
          value={maxPrice}
          onChange={(e) => setMaxPrice(e.target.value)}
          className="input input-bordered w-32"
        />
        
        {/* Sorting Dropdown */}
        <select
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className="select select-bordered w-40"
        >
          <option value="">Sort By</option>
          <option value="asc">Lowest Price</option>
          <option value="desc">Highest Price</option>
        </select>
        
        <Button type="submit" >Filter</Button>
      </form>

      {/* Rooms Grid */}
      <div className="grid gap-6 grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {rooms.map((room, index) => (
          <div 
            key={index} 
            className="card bg-background shadow-xl transform transition duration-300 hover:scale-105 text-black"
          >
            <figure>
              <img src={room.roomImages[0]} alt="Room" className="h-48 w-full object-cover" />
            </figure>
            <div className="card-body">
              <h2 className="card-title">{room.roomDescription}</h2>
              <p>Size: {room.roomSize}</p>
              <p>Price: ${room.pricePerNight} per night</p>
              <p className={`text-${room.availability ? 'green' : 'red'}-500 font-medium`}>
                {room.availability ? "Available" : "Not Available"}
              </p>
              <p className="text-purple-500 text-sm mt-1">{room.specialOffers}</p>
              <div className="card-actions justify-end">
              {user && user.email ? (
  <Link to={`/rooms/${room._id}`}>
    <Button className="btn-xs ">
      details
    </Button>
  </Link>
) : (
  <Link to="/login">
    <Button className="btn-xs ">
      Login to view details
    </Button>
  </Link>
)}

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Rooms;
