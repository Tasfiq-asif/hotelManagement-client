import { useEffect, useState } from "react";
import Button from "../Button";
import Spinner from "../Spinner/Spinner";
import useAuth from "../../hooks/useAuth";
import { Link } from "react-router-dom";

const FeaturedRooms = () => {
  const [rooms, setRooms] = useState([]);
  const [loading, setLoading] = useState(true);
const {user} =useAuth()

  // Fetch rooms data from the API
  useEffect(() => {
    const fetchRooms = async () => {
      try {
        const response = await fetch("https://stayscape-two.vercel.app/rooms");
        const data = await response.json();


        const availableRooms = data.filter(
          (room) => room.availability === true
        );
        const randomRooms = availableRooms
          .sort(() => 0.5 - Math.random())
          .slice(0, 3); // Select 3 random rooms
        setRooms(randomRooms);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching rooms:", error);
        setLoading(false);
      }
    };

    fetchRooms();
  }, []);

  if (loading) {
    return <Spinner/>;
  }

  return (
    <div className="bg-transparent p-8 rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold text-center mb-6">Featured Rooms</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {rooms.map((room) => (
          <div
            key={room.id}
            className=" backdrop-blur-md border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105 flex flex-col"
          >
            <img
              src={room.roomImages[0]} // Display the first image
              alt={room.roomType}
              className="w-full h-48 object-cover"
            />
            <div className="p-4 flex flex-col flex-grow justify-between">
              <h3 className="text-xl font-semibold mb-2">{room.roomType}</h3>
              <p className=" mb-4 flex-grow">
                {room.roomDescription}
              </p>
              <div className="mt-auto ">
                {user && user.email ? (
                  <Link to={`/rooms/${room._id}`}>
                    <Button className="btn-xs ">details</Button>
                  </Link>
                ) : (
                  <Link to="/login">
                    <Button className="btn-xs ">Login to view details</Button>
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

export default FeaturedRooms;
