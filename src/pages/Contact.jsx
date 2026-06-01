import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Contact() {
  return (
    <>
      <Navbar />

      <section className="bg-amber-50 min-h-screen py-20">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h1 className="text-5xl font-bold text-amber-900">
            Contact Us
          </h1>

          <p className="mt-4 text-lg text-amber-700">
            For custom artwork and handmade creations, connect with us on Instagram.
          </p>

          <div className="mt-10 bg-white p-10 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-semibold text-amber-900">
              Instagram Profile
            </h2>

            <p className="mt-3 text-amber-700">
              @tejra___renuka
            </p>

            <a
              href="https://instagram.com/tejra___renuka"
              target="_blank"
              rel="noreferrer"
              className="inline-block mt-6 bg-amber-800 text-white px-6 py-3 rounded-lg"
            >
              Visit Instagram
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Contact;