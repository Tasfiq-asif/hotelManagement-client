import { Link } from "react-router-dom";


const About = () => {
  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-6 py-12">
        {/* Section Header */}
        <div className="text-center">
          <h1 className="text-5xl font-bold  animate-fade-in">
            Welcome to Stayscape
          </h1>
          <p className="mt-4 text-lg text-gray-700 max-w-2xl mx-auto animate-slide-up">
            Discover unforgettable stays and exceptional service with us. Your
            comfort and experience are at the heart of everything we do.
          </p>
        </div>

        {/* About Section */}
        <div className="mt-12 flex flex-col lg:flex-row items-center gap-12">
          {/* Image */}
          <div className="w-full lg:w-1/2">
            <img
              src="https://i.ibb.co.com/CssWcKT/1.jpg"
              alt="Luxurious Hotel"
              className="rounded-lg shadow-lg animate-scale-up"
            />
          </div>

          {/* Content */}
          <div className="w-full lg:w-1/2 space-y-6">
            <h2 className="text-3xl font-semibold ">
              Your Gateway to Unforgettable Stays
            </h2>
            <p className="text-gray-600">
              At <span className="font-bold">Stayscape</span>, we bring you a
              curated collection of the best rooms, offering both comfort and
              convenience. From boutique rooms in bustling cities to serene
              resorts by the beach, we cater to every kind of traveler.
            </p>
            <p className="text-gray-600">
              Founded on the principles of trust and excellence, Stayscape
              ensures that every booking experience is seamless and
              personalized, helping you make memories that last a lifetime.
            </p>
            <Link to={'/rooms'}>
              <button className="btn btn-primary btn-lg shadow-md animate-bounce mt-10 hover:scale-105 transition-transform">
                Explore Stays
              </button>
            </Link>
          </div>
        </div>

        {/* Vision & Mission */}
        <div className="mt-16 text-center">
          <h2 className="text-4xl font-bold">
            Our Vision & Mission
          </h2>
          <p className="mt-4 text-gray-700 max-w-4xl mx-auto animate-slide-up">
            To create a world where travel feels effortless, connections grow
            stronger, and every stay leaves you inspired. We aim to transform
            the hospitality experience with innovation, reliability, and heart.
          </p>
        </div>

        {/* Animation */}
        <div className="mt-12 flex justify-center">
          <div className="relative w-48 h-48">
            <div className="absolute top-0 left-0 w-48 h-48 bg-blue-100 rounded-full animate-pulse"></div>
            <div className="absolute top-6 left-6 w-36 h-36 bg-blue-200 rounded-full animate-spin-slow"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
