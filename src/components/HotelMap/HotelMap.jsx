
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

const HotelMap = () => {
  const position = [51.505, -0.09]; // Replace with your hotel's coordinates

  return (
    <div className="w-full h-96 rounded-lg shadow-lg overflow-hidden">
      <h2 className="text-3xl font-bold text-center mb-6 mt-6">Our Location</h2>
      <MapContainer center={position} zoom={13} className="h-full w-full">
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>Your hotel is located here!</Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default HotelMap;
