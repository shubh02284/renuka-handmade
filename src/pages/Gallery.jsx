import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

const featuredArtworks = [
  {
    title: "Khatu Shyam Handmade Artwork",
    image: "/images/khatuji.jpeg",
    price: "Starting From ₹4,999",
  },
  {
    title: "Pearl Embellished Painting",
    image: "/images/2.jpeg",
    price: "Starting From ₹1,999",
  },
  {
    title: "Decorative Mirror Art",
    image: "/images/mirror.png",
    price: "Starting From ₹2,499",
  },
  {
    title: "Stone Craft Design",
    image: "/images/stone.png",
    price: "Starting From ₹1,799",
  },
  {
    title: "Handmade Creative Piece",
    image: "/images/handmade.jpeg",
    price: "Starting From ₹3,999",
  },
  {
    title: "Mixed Media Peacock Wall Art",
    image: "/images/5.jpeg",
    price: "Starting From ₹3,999",
  },
];

const otherArtworks = [
  {
    title: "Festival Artwork",
    image: "/images/1.jpg",
    price: "Starting From ₹1,499",
  },
  {
    title: "Custom Gift Art",
    image: "/images/Custom.png",
    price: "Starting From ₹999",
  },
  {
    title: "Texture Artwork",
    image: "/images/download.png",
    price: "Starting From ₹2,499",
  },
  {
    title: "Decor Piece",
    image: "/images/wall.png",
    price: "Starting From ₹1,299",
  },
  {
    title: "FrontPage Design",
    image: "/images/frontpage.png",
    price: "Starting From ₹1,799",
  },
  {
    title: "Personalized Artwork",
    image: "/images/personalized.png",
    price: "Starting From ₹1,999",
  },
];

function Gallery() {
  const [showAll, setShowAll] = useState(false);

  return (
    <>
      <Navbar />

      <section className="bg-amber-50 py-20">
        <div className="max-w-6xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-amber-900">
            Gallery
          </h1>

          <p className="text-center text-amber-700 mt-4">
            Explore handmade creations crafted with creativity and care.
          </p>

          {/* Featured Creations */}
          <h2 className="text-3xl font-bold text-amber-900 mt-12 mb-8">
            Featured Creations
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {featuredArtworks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <div className="overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                  />
                </div>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-lg font-bold text-green-700">
                  {item.price}
                  </p>

                  <p className="mt-2 text-amber-700">
                    Made on Request
                  </p>

                  <Link
                    to="/orders"
                    state={{ artwork: item.title }}
                    className="inline-block mt-4 bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
                  >
                    Request Similar Artwork
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* View More Button */}
          <div className="text-center mt-10">
            <button
              onClick={() => setShowAll(!showAll)}
              className="bg-amber-800 text-white px-6 py-3 rounded-lg hover:bg-amber-900 transition"
            >
              {showAll ? "Show Less" : "View More Creations"}
            </button>
          </div>

          {/* Other Creations */}
          {showAll && (
            <>
              <div className="text-center mt-16">
                <h2 className="text-3xl font-bold text-amber-900">
                  All Other Handmade Creations
                </h2>

                <p className="text-amber-700 mt-3">
                  Explore more custom artwork, décor pieces and creative handmade designs.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-8 mt-10">
                {otherArtworks.map((item, index) => (
                  <div
                    key={index}
                    className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
                  >
                    <div className="overflow-hidden">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-64 object-cover hover:scale-110 transition duration-500"
                      />
                    </div>

                    <div className="p-5">
                      <h3 className="text-xl font-semibold text-amber-900">
                        {item.title}
                      </h3>

                      <p className="mt-2 text-lg font-bold text-green-700">
                      {item.price}
                      </p>
                      
                      <p className="mt-2 text-amber-700">
                        Made on Request
                      </p>

                      <Link
                        to="/orders"
                        state={{ artwork: item.title }}
                        className="inline-block mt-4 bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
                      >
                        Request Similar Artwork
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </>
          )}
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;