import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Spinner from "../../components/Spinner/Spinner";
import Button from "../../components/Button";

const RoomDetails = () => {
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
          `https://stayscape-two.vercel.app/rooms/${id}`
        );
        const reviewsResponse = await axios.get(
          `https://stayscape-two.vercel.app/rooms/${id}/reviews`
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
      await axios.post(`https://stayscape-two.vercel.app/rooms/${id}/reviews`, reviewForm);
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
        `https://stayscape-two.vercel.app/rooms/${id}/book`,
        bookingForm
      );
      setBookingDetails(response.data);
      setShowBookingForm(false);
    } catch (error) {
      console.error("Error booking room:", error);
    }
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === "Escape") {
        setShowReviewPopup(false);
        setShowBookingForm(false);
      }
    };

    window.addEventListener("keydown", handleKeyDown);

    return () => {
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  if (!room) return <Spinner />;

  return (
    <div className="p-8 max-w-5xl mx-auto ">
      <h2 className="text-4xl font-bold ">{room.roomDescription}</h2>

      <div className="relative my-4">
        <img
          src={room.roomImages[0]}
          alt="Room"
          className="w-full h-80 object-cover rounded-lg shadow-md"
        />
        <Button
          onClick={() => setShowBookingForm(true)}
          className="absolute top-4 right-4 px-6 py-2 rounded-md shadow-lg  transition"
        >
          Book Now
        </Button>
      </div>

      <p className="text-lg font-medium  mt-2">{room.specialOffers}</p>
      <p className="text-xl  mt-4">
        Price per night:{" "}
        <span className="font-semibold">${room.pricePerNight}</span>
      </p>
      <p className="text-lg mt-2">Room Size: {room.roomSize}</p>

      <p
        className={`text-${
          room.availability ? "green" : "red"
        }-500 font-semibold mt-4`}
      >
        {room.availability ? "Available" : "Not Available"}
      </p>

      <div className="mt-10">
        <h3 className="text-2xl font-semibold ">Reviews</h3>
        <div className="space-y-6 mt-6">
          {reviews.map((review, index) => (
            <div key={index} className="border-t pt-4">
              <p className="font-semibold ">{review.name}</p>
              <p className="text-sm ">Rating: {review.rating} / 5</p>
              <p className=" mt-2">{review.comment}</p>
            </div>
          ))}
          <Button
            onClick={() => setShowReviewPopup(true)}
            className=" mt-6"
          >
            Add Review
          </Button>
        </div>
      </div>

      {/* Review Popup */}
      {showReviewPopup && (
        <div className="modal modal-open">
          <div className="modal-box ">
            <h2 className="text-2xl font-bold mb-4">Submit Review</h2>
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
            <Button onClick={handleReviewSubmit} className=" w-full">
              Submit
            </Button>
          </div>
        </div>
      )}

      {/* Booking Popup */}
      {showBookingForm && (
        <div className="modal modal-open">
          <div className="modal-box w-90 max-w-2xl p-12 h-[550px]">
            <h2 className="text-2xl font-bold mb-4">Book Room</h2>
            <form className="flex flex-col" onSubmit={handleBookingSubmit}>
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
              <Button type="submit" className=" w-full">
                Book Room
              </Button>
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
};

export default RoomDetails;
