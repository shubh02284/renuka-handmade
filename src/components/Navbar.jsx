import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="sticky top-0 z-50 bg-white shadow-sm border-b">
      <div className="max-w-7xl mx-auto px-6 py-4">

        <div className="text-center mb-4">
          <h1 className="text-2xl md:text-3xl font-bold text-amber-900">
            Renuka Handmade
          </h1>

          <p className="text-xs md:text-sm text-amber-700">
            Inspired by Art, Crafted by Hand, Made with Heart
          </p>
        </div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-8 text-sm md:text-base">
          <Link to="/" className="hover:text-amber-700">
            Home
          </Link>

          <Link to="/gallery" className="hover:text-amber-700">
            Gallery
          </Link>

          <Link to="/about" className="hover:text-amber-700">
            About
          </Link>

          <Link to="/orders" className="hover:text-amber-700">
            Orders
          </Link>

          <Link to="/contact" className="hover:text-amber-700">
            Contact
          </Link>
          <Link to="/admin" className="hover:text-amber-700">
            Admin
          </Link>
        </div>

      </div>
    </nav>
  );
}

export default Navbar;