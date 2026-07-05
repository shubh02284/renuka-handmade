import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import { useLocation } from "react-router-dom";

function Orders() {
  const location = useLocation();
  const selectedArtwork =
  location.state?.artwork || "";
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
    email: "",
    artwork: selectedArtwork,
    description: "",
  });

  const [loading, setLoading] = useState(false);
  const [imageFile, setImageFile] = useState(null);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);
    let imageData = "";

  if (imageFile) {
    imageData = await new Promise((resolve) => {
      const reader = new FileReader();

      reader.onload = () => {
        resolve(reader.result);
      };

      reader.readAsDataURL(imageFile);
    });
  }

    try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbwQsxgeF07naA26gfe0Uux_G6UrMa7G4a2rAzQ-elGVt8OsXcGJJoFF7mlCBspnWzAISw/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify({
  ...formData,
  imageData,
}),
  }
);

      setSubmitted(true);
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
      setFormData({
        name: "",
        phone: "",
        instagram: "",
        email: "",
        artwork: selectedArtwork,
        description: "",
      });
      setImageFile(null);
    } catch (error) {
      alert("Something went wrong. Please try again.");
      console.error(error);
    }

    setLoading(false);
  };

  return (
    <>
      <Navbar />

      <section className="bg-amber-50 py-20 min-h-screen">
        <div className="max-w-3xl mx-auto px-6">
          <h1 className="text-5xl font-bold text-center text-amber-900">
            Custom Orders
          </h1>

          <p className="text-center text-amber-700 mt-4">
            Tell us about your dream artwork and we'll create something special
            for you.
          </p>

          {submitted && (
            <div className="mb-6 bg-green-100 border border-green-300 text-green-800 p-4 rounded-lg">
              <h3 className="font-bold text-lg">
                ✅ Order Request Submitted
              </h3>
          
              <p className="mt-1">
                Thank you for contacting Renuka Handmade.
                We have received your order request and will get back to you soon.
              </p>
            </div>
          )}

          <form
            onSubmit={handleSubmit}
            className="bg-white shadow-lg rounded-2xl p-8 mt-10"
          >
            <div className="mb-5">
              <label className="block mb-2 font-medium text-amber-900">
                Full Name *
              </label>

              <input
                type="text"
                name="name"
                required
                value={formData.name}
                onChange={handleChange}
                className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter your full name"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-amber-900">
                Phone Number *
              </label>

              <input
                type="tel"
                name="phone"
                required
                value={formData.phone}
                onChange={handleChange}
                className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Enter phone number"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-amber-900">
                Instagram Username
              </label>

              <input
                type="text"
                name="instagram"
                value={formData.instagram}
                onChange={handleChange}
                className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="@username"
              />
            </div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-amber-900">
                Email *
              </label>

              <input
              type="email"
              name="email"
              required
              value={formData.email}
              onChange={handleChange}
              className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
              placeholder="example@email.com"
              />
            </div>

            <div className="mb-5">
  <label className="block mb-2 font-medium text-amber-900">
    Selected Artwork
  </label>

  <input
    type="text"
    value={selectedArtwork}
    readOnly
    className="w-full border border-amber-200 rounded-lg p-3 bg-gray-100"
  />
</div>

            <div className="mb-5">
              <label className="block mb-2 font-medium text-amber-900">
                Order Description *
              </label>

              <textarea
                rows="5"
                required
                name="description"
                value={formData.description}
                onChange={handleChange}
                className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="Describe your artwork requirement"
              ></textarea>
            </div>

            <div className="mb-6">
              <label className="block mb-2 font-medium text-amber-900">
                Reference Image
              </label>

              <input
  type="file"
  accept="image/*"
  onChange={(e) => {
    const file = e.target.files[0];

    if (file && file.size > 5 * 1024 * 1024) {
      alert("Please upload an image smaller than 5MB");
      return;
    }

    setImageFile(file);
  }}
  className="w-full border border-amber-200 rounded-lg p-3"
/>

              {imageFile && (
              <p className="text-green-600 mt-2">
                Selected: {imageFile.name}
              </p>
              )}

            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full bg-amber-800 text-white py-3 rounded-lg font-semibold hover:bg-amber-900 transition duration-300 disabled:opacity-50"
            >
              {loading ? "Submitting..." : "Submit Order Request"}
            </button>
          </form>
        </div>
      </section>

      <Footer />
    </>
  );
}

export default Orders;