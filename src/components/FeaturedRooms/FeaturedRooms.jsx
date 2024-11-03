import Button from "../Button";



const rooms = [
    {
        id: 1,
        name: "Premium Room",
        description: "Experience luxury in our spacious deluxe room equipped with all modern amenities.",
        imageUrl: "https://i.ibb.co.com/m47c7nV/Luxury-Mountain-Resort.jpg", // Replace with actual image URLs
    },
    {
        id: 2,
        name: "Family Suite",
        description: "Perfect for families, this suite features two bedrooms and a stunning view.",
        imageUrl: "https://i.ibb.co.com/w7cd6y9/Private-Beachfront-Villa.jpg",
    },
    {
        id: 3,
        name: "Executive Room",
        description: "Ideal for business travelers, our executive room offers a comfortable workspace.",
        imageUrl: "https://i.ibb.co.com/qWJNh7g/Mediterranean-Villa-Estate.jpg",
    },
];

const FeaturedRooms = () => {

   
  return (
    <div className="bg-transparent p-8 rounded-lg shadow-lg">
            <h2 className="text-3xl font-bold text-center mb-6 text-almostBlack">Featured Rooms</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {rooms.map(room => (
                    <div key={room.id} className="bg-white/30 backdrop-blur-md border border-gray-200 rounded-lg overflow-hidden shadow-md transition-transform transform hover:scale-105">
                        <img src={room.imageUrl} alt={room.name} className="w-full h-48 object-cover" />
                        <div className="p-4">
                            <h3 className="text-xl font-semibold mb-2">{room.name}</h3>
                            <p className="text-gray-600 mb-4">{room.description}</p>
                            <Button>
                                Book Now
                            </Button>
                        </div>
                    </div>
                ))}
            </div>
        </div>
  )
}

export default FeaturedRooms