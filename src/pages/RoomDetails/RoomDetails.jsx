
import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from '../../components/Spinner/Spinner';

const RoomDetails = () => {
  // const jobs = useLoaderData();
  // const {user}= useAuth();
  const { id } = useParams();
  const [room, setRoom] = useState(null);
  const [reviews, setReviews] = useState([]);
  const [showReviewPopup, setShowReviewPopup] = useState(false);
  const [reviewForm, setReviewForm] = useState({
    name: "",
    rating: 1,
    comment: "",
  });
  const [showBookingForm, setShowBookingForm] = useState(false);
  const [bookingForm, setBookingForm] = useState({
    checkInDate: new Date(),
    checkOutDate: new Date(),
    name: "",
    email: "",
  });
  const [bookingDetails, setBookingDetails] = useState(null);

  useEffect(() => {
    const fetchRoomDetails = async () => {
      try {
        const roomResponse = await axios.get(
          `http://localhost:3000/rooms/${id}`
        );
        const reviewsResponse = await axios.get(
          `http://localhost:3000/rooms/${id}/reviews`
        );
        setRoom(roomResponse.data);
        setReviews(reviewsResponse.data);
      } catch (error) {
        console.error("Error fetching room details:", error);
      }
    };
    fetchRoomDetails();
  }, [id]);

  const handleReviewSubmit = async () => {
    try {
      await axios.post(`http://localhost:3000/rooms/${id}/reviews`, reviewForm);
      setReviews([...reviews, reviewForm]);
      setShowReviewPopup(false);
    } catch (error) {
      console.error("Error submitting review:", error);
    }
  };

  const handleBookingSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        `http://localhost:3000/rooms/${id}/book`,
        bookingForm
      );
      setBookingDetails(response.data);
      setShowBookingForm(false);
    } catch (error) {
      console.error("Error booking room:", error);
    }
  };
  // Close modals on ESC key press
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowReviewPopup(false);
        setShowBookingForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    // Cleanup listener on component unmount
    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!room)
    return (
      <div>
        <Spinner></Spinner>
      </div>
    );
  return (
    <div className="p-8">
      <h2 className="text-3xl font-bold">{room.roomDescription}</h2>
      <img
        src={room.roomImages[0]}
        alt="Room"
        className="w-full h-80 object-cover my-4"
      />
      <p>{room.specialOffers}</p>
      <p>Price per night: ${room.pricePerNight}</p>
      <p>Room Size: {room.roomSize}</p>
      <p
        className={`text-${
          room.availability ? "green" : "red"
        }-500 font-medium`}
      >
        {room.availability ? "Available" : "Not Available"}
      </p>

      <h3 className="text-2xl font-semibold mt-8">Reviews</h3>
      <div className="mt-4">
        {reviews.map((review, index) => (
          <div key={index} className="border-b py-2">
            <p className="font-semibold">{review.name}</p>
            <p>Rating: {review.rating} / 5</p>
            <p>{review.comment}</p>
          </div>
        ))}
        <button
          onClick={() => setShowReviewPopup(true)}
          className="btn btn-secondary mt-4"
        >
          Add Review
        </button>
      </div>

      <button
        onClick={() => setShowBookingForm(true)}
        className="btn btn-primary mt-8"
      >
        Book Now
      </button>

      {/* Review Popup */}
      {showReviewPopup && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-xl font-bold mb-4">Submit Review</h2>
            <input
              type="text"
              placeholder="Your Name"
              className="input input-bordered w-full mb-2"
              value={reviewForm.name}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, name: e.target.value })
              }
            />
            <select
              className="select select-bordered w-full mb-2"
              value={reviewForm.rating}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, rating: e.target.value })
              }
            >
              {[1, 2, 3, 4, 5].map((value) => (
                <option key={value} value={value}>
                  {value}
                </option>
              ))}
            </select>
            <textarea
              placeholder="Comment"
              className="textarea textarea-bordered w-full mb-2"
              value={reviewForm.comment}
              onChange={(e) =>
                setReviewForm({ ...reviewForm, comment: e.target.value })
              }
            />
            <button
              onClick={handleReviewSubmit}
              className="btn btn-primary w-full"
            >
              Submit
            </button>
          </div>
        </div>
      )}

      {/* Booking Popup */}
      {showBookingForm && (
        <div className="modal modal-open">
          <div className="modal-box">
            <h2 className="text-xl font-bold mb-4">Book Room</h2>
            <form onSubmit={handleBookingSubmit}>
              <label>Check-In Date</label>
              <DatePicker
                selected={bookingForm.checkInDate}
                onChange={(date) =>
                  setBookingForm({ ...bookingForm, checkInDate: date })
                }
                className="input input-bordered w-full mb-2"
              />
              <label>Check-Out Date</label>
              <DatePicker
                selected={bookingForm.checkOutDate}
                onChange={(date) =>
                  setBookingForm({ ...bookingForm, checkOutDate: date })
                }
                className="input input-bordered w-full mb-2"
              />
              <input
                type="text"
                placeholder="Your Name"
                className="input input-bordered w-full mb-2"
                value={bookingForm.name}
                onChange={(e) =>
                  setBookingForm({ ...bookingForm, name: e.target.value })
                }
              />
              <input
                type="email"
                placeholder="Your Email"
                className="input input-bordered w-full mb-2"
                value={bookingForm.email}
                onChange={(e) =>
                  setBookingForm({ ...bookingForm, email: e.target.value })
                }
              />
              <button type="submit" className="btn btn-primary w-full">
                Book Room
              </button>
            </form>
          </div>
        </div>
      )}

      {bookingDetails && (
        <div className="mt-8 p-6 bg-gray-100 rounded-lg shadow-md">
          <h3 className="text-2xl font-semibold mb-2">Booking Confirmation</h3>
          <p>Name: {bookingDetails.name}</p>
          <p>Email: {bookingDetails.email}</p>
          <p>
            Check-In:{" "}
            {new Date(bookingDetails.checkInDate).toLocaleDateString()}
          </p>
          <p>
            Check-Out:{" "}
            {new Date(bookingDetails.checkOutDate).toLocaleDateString()}
          </p>
          <p>Total Nights: {bookingDetails.totalNights}</p>
          <p>Total Cost: ${bookingDetails.totalCost}</p>
        </div>
      )}
    </div>
  );
}

export default RoomDetails