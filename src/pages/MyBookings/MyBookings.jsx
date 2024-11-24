import { useState, useEffect } from "react";
import useAuth from "../../hooks/useAuth";
import Spinner from "../../components/Spinner/Spinner";

const MyBookings = () => {
  const { user } = useAuth();
  const [bookings, setBookings] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Check if the user is logged in and has an email
    if (!user.email) {
      setError("You must be logged in to see your bookings.");
      setLoading(false);
      return;
    }

    // Fetch the user's bookings from the backend
    const fetchBookings = async () => {
      try {
        const response = await fetch(
          `http://localhost:3000/my-bookings?email=${user.email}`
        );
        const data = await response.json();

        if (response.ok) {
          setBookings(data); // Set bookings if response is successful
        } else {
          setError(data.message); // Show error message if no bookings found
        }
      } catch (error) {
        setError("Error fetching bookings.");
      } finally {
        setLoading(false);
      }
    };

    fetchBookings();
  }, [user.email]);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div className="error-message">{error}</div>;
  }

  return (
    <div className="my-bookings">
      <h2 className="text-2xl font-bold mb-4">Your Bookings</h2>
      {bookings.length === 0 ? (
        <p>No bookings yet.</p>
      ) : (
        <div className="overflow-x-auto">
          <table className="min-w-full bg-white border border-gray-200 shadow-md text-black">
            <thead className="bg-gray-100">
              <tr>
                <th className="py-2 px-4 border-b text-left">Room Name</th>
                <th className="py-2 px-4 border-b text-left">Check-in Date</th>
                <th className="py-2 px-4 border-b text-left">Check-out Date</th>
                <th className="py-2 px-4 border-b text-left">Total Nights</th>
                <th className="py-2 px-4 border-b text-left">Total Cost</th>
              </tr>
            </thead>
            <tbody>
              {bookings.map((booking) => (
                <tr key={booking._id} className="hover:bg-gray-50">
                  <td className="py-2 px-4 border-b">{booking.roomName}</td>
                  <td className="py-2 px-4 border-b">
                    {new Date(booking.checkInDate).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">
                    {new Date(booking.checkOutDate).toLocaleDateString()}
                  </td>
                  <td className="py-2 px-4 border-b">{booking.totalNights}</td>
                  <td className="py-2 px-4 border-b">${booking.totalCost}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default MyBookings;
