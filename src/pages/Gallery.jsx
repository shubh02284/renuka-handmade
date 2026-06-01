import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
const artworks = [
  {
    title: "Khatu Shyam Handmade Artwork",
    image:
      "/images/khatuji.jpeg",
  },
  {
    title: "Pearl Embellished Painting",
    image:
      "https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800",
  },
  {
    title: "Decorative Mirror Art",
    image:
      "https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800",
  },
  {
    title: "Stone Craft Design",
    image:
      "https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=800",
  },
  {
    title: "Customized Wall Art",
    image:
      "https://images.unsplash.com/photo-1547891654-e66ed7ebb968?q=80&w=800",
  },
  {
    title: "Handmade Creative Piece",
    image:
      "https://images.unsplash.com/photo-1518998053901-5348d3961a04?q=80&w=800",
  },
];

function Gallery() {
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

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {artworks.map((item, index) => (
              <div
                key={index}
                className="bg-white rounded-xl overflow-hidden shadow-md hover:shadow-2xl hover:-translate-y-2 transition duration-300"
              >
                <img
  src={item.image}
  alt={item.title}
  className="w-full h-64 object-cover hover:scale-110 transition duration-500"
/>

                <div className="p-5">
                  <h3 className="text-xl font-semibold text-amber-900">
                    {item.title}
                  </h3>

                  <p className="mt-2 text-amber-700">
                    Made on Request
                  </p>

                  <Link
  to="/orders"
  className="inline-block mt-4 bg-amber-800 text-white px-4 py-2 rounded-lg hover:bg-amber-900 transition"
>
  Request Similar Artwork
</Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Gallery;