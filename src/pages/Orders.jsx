import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

function Orders() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    instagram: "",
    email: "",
    description: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true);

    try {
    await fetch(
  "https://script.google.com/macros/s/AKfycbwYdH0hd_Fv07jI_o2ro_ZhLdd5qp4oXJgsTuVspqXI0WMfDjXfxYnohHWlbp1B-UTADw/exec",
  {
    method: "POST",
    mode: "no-cors",
    body: JSON.stringify(formData),
  }
);

      alert(
        "Thank you for your interest in Renuka Handmade. Your custom order request has been received."
      );

      setFormData({
        name: "",
        phone: "",
        instagram: "",
        email: "",
        description: "",
      });
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
                Email (Optional)
              </label>

              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full border border-amber-200 rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-amber-500"
                placeholder="example@email.com"
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
                className="w-full border border-amber-200 rounded-lg p-3"
              />
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