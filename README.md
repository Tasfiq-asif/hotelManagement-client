# StayScape - Hotel Booking Website

StayScape is a MERN stack hotel booking website that allows users to book rooms, view their bookings, and add reviews. The platform uses Firebase for authentication, MongoDB to store booking data, and private routes to protect registered user-only sections. We have also implemented a dark/light theme using Daisy UI for a better user experience.

## Live Link
- **[Website](https://stayscape-324c9.firebaseapp.com/)**

## Server Link
- **[API](https://stayscape-two.vercel.app/)**

## Server GITHub Link
- **[API](https://github.com/Tasfiq-asif/hotelManagement-server.git/)**

## Features
- **Authentication**: Users can register and log in using Firebase Authentication.
- **Private Routes**: Access to "My Bookings" and "Room Details" pages are restricted to registered users only.
- **Booking System**: Users can book rooms, and once booked, the room becomes unavailable in the UI.
- **Reviews**: Users can add reviews for the rooms they have booked.
- **Dark/Light Mode**: Implemented using Daisy UI for a stylish and consistent look.
- **Backend**: Built using Express.js.

## Tech Stack
- **Frontend**: React, Vite, Daisy UI
- **Backend**: Express.js
- **Database**: MongoDB
- **Authentication**: Firebase

## How It Works
1. **User Authentication**:
   - Users register or log in via Firebase Authentication.
   - After logging in, they gain access to restricted routes such as "My Bookings" and "Room Details."

2. **Booking Rooms**:
   - Users can book rooms from the available listings.
   - Once booked, the room status will automatically update to "Unavailable" in the UI to reflect that it's no longer bookable.
  
3. **Manage Bookings**:
   - Registered users can view their bookings under the "My Bookings" section.
   - They can easily track, update, or cancel bookings if needed.

4. **Review Rooms**:
   - Users who have booked a room can add reviews in the "Room Details" section.

## Dark/Light Mode
- **Toggle Theme**: Users can switch between dark and light mode using the Daisy UI toggle button, allowing for a personalized interface.

## Database
- **Bookings** are stored in MongoDB using Mongoose, with relevant data such as booking information and user reviews.
- Data is protected and only accessible by authenticated users through private routes.

## Deployment
- The frontend of the application is hosted on Firebase.
- The backend services are deployed using Vercel.

## Contributions
Contributions are welcome! If you would like to help improve the application, feel free to open a pull request or reach out via the contact section.

---

### Contact
If you have any questions, feel free to reach out:
- **Email**: [tasfiq.asif.23@gmail.com]

