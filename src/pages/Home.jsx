import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
function Home() {
  return (
    <>
      <Navbar />

      <section
  className="min-h-screen bg-cover bg-center flex items-center justify-center"
  style={{
    backgroundImage:
      "url('https://images.unsplash.com/photo-1513364776144-60967b0f800f?q=80&w=1600')",
  }}
>
  <div className="bg-black/40 w-full min-h-screen flex items-center justify-center">
    <div className="text-center px-6">
      <h1 className="text-6xl md:text-8xl font-bold text-white">
        Renuka Handmade
      </h1>

      <p className="mt-4 text-xl md:text-2xl text-white max-w-2xl mx-auto">
        Inspired by Art, Crafted by Hand, Made with Heart
      </p>

      <div className="mt-10 flex gap-4 justify-center flex-wrap">
       <Link
  to="/gallery"
  className="bg-white text-amber-900 px-6 py-3 rounded-lg font-semibold hover:scale-105 transition duration-300"
>
  View Gallery
</Link>

        <Link
  to="/orders"
  className="border border-white text-white px-6 py-3 rounded-lg hover:bg-white hover:text-amber-900 transition duration-300"
>
  Order Now
</Link>
      </div>
    </div>
  </div>
</section>

<section className="py-20 bg-white">
  <div className="max-w-6xl mx-auto px-6">
    <h2 className="text-4xl font-bold text-center text-amber-900">
      Featured Creations
    </h2>

    <p className="text-center text-amber-700 mt-3">
      Handmade artwork crafted with creativity and care.
    </p>

    <div className="grid md:grid-cols-3 gap-8 mt-12">

      <div className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?q=80&w=800"
          alt="Artwork"
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-amber-900">
            Handmade Painting
          </h3>
          <p className="text-amber-700 mt-2">
            Made on Request
          </p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?q=80&w=800"
          alt="Artwork"
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-amber-900">
            Decorative Art
          </h3>
          <p className="text-amber-700 mt-2">
            Custom Order Available
          </p>
        </div>
      </div>

      <div className="bg-amber-50 rounded-xl overflow-hidden shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300">
        <img
          src="https://images.unsplash.com/photo-1517694712202-14dd9538aa97?q=80&w=800"
          alt="Artwork"
          className="w-full h-64 object-cover"
        />
        <div className="p-5">
          <h3 className="text-xl font-semibold text-amber-900">
            Pearl & Stone Art
          </h3>
          <p className="text-amber-700 mt-2">
            Made on Request
          </p>
        </div>
      </div>

    </div>
  </div>
</section>
<section className="py-20 bg-amber-50">
  <div className="max-w-6xl mx-auto px-6">
    <div className="grid md:grid-cols-2 gap-12 items-center">

      <div>
        <img
          src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1200"
          alt="Artist"
          className="rounded-2xl shadow-lg w-full"
        />
      </div>

      <div>
        <h2 className="text-4xl font-bold text-amber-900">
          Meet the Artist
        </h2>

        <p className="mt-6 text-lg text-amber-700 leading-relaxed">
          Hi, I'm Renuka, a passionate artist who loves transforming simple
          ideas into meaningful handmade creations. From detailed paintings
          to decorative art pieces, every creation is crafted with patience,
          creativity, and attention to detail.
        </p>

        <p className="mt-4 text-lg text-amber-700 leading-relaxed">
          Renuka Handmade is a space where art, creativity, and craftsmanship
          come together to create beautiful personalized pieces.
        </p>
      </div>

    </div>
  </div>
</section>
      <Footer />
    </>
  );
}

export default Home;