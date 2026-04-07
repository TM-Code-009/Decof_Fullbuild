import { useState } from "react";
import { Link } from "react-router-dom";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import logo from "../../assets/logo.png";

const Header = () => {
  const [open, setOpen] = useState(false); // mobile menu
  const [servicesOpen, setServicesOpen] = useState(false); // services dropdown

  // Close dropdowns & optionally mobile menu
  const closeDropdowns = () => {
    setServicesOpen(false);
    setOpen(false);
  };

  return (
    <header className="h-[80px] w-full bg-white shadow-sm relative">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Logo */}
        <Link to="/" className="flex items-center gap-2" onClick={closeDropdowns}>
          <img src={logo} alt="" width={35} height={35} />
          <span className="text-[35px] font-bold text-blue-600">Decof</span>
        </Link>

        {/* Desktop Nav */}
        <div className="flex items-center gap-10">
          <nav className="hidden md:flex items-center gap-8 text-gray-700 font-medium relative">

            {/* Services Dropdown */}
            <div className="relative">
              <button
                onClick={() => setServicesOpen(!servicesOpen)}
                className="flex items-center gap-1 hover:text-blue-600"
              >
                Services <FiChevronDown />
              </button>

              {servicesOpen && (
                <div className="absolute top-10 left-0 w-56 bg-white rounded-xl shadow-lg py-4 z-50">
                  <Link
                    to="/services/corporateprinting"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Corporate Printing
                  </Link>
                  <Link
                    to="/services/branding&merchandise"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Branding & Merchandise
                  </Link>
                  <Link
                    to="/services/largeformat&singage"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Large Format & Singnage
                  </Link>
                  <Link
                    to="/services/branddesignstudio"
                    className="block px-6 py-2 hover:bg-gray-100"
                    onClick={closeDropdowns}
                  >
                    Brand Design studio
                  </Link>
                </div>
              )}
            </div>

            {/* Other Links */}
            <Link to="/porfolio" className="hover:text-blue-600" onClick={closeDropdowns}>
              Portfolio
            </Link>
            <Link to="/about" className="hover:text-blue-600" onClick={closeDropdowns}>
              About Us
            </Link>
            <Link to="/contactus" className="hover:text-blue-600" onClick={closeDropdowns}>
              Contact
            </Link>

          </nav>

          {/* CTA Button */}
          <div className="hidden md:block">
            <button className="px-5 py-2 rounded-lg bg-gradient-to-r from-blue-500 to-cyan-500 text-white font-semibold hover:opacity-90 transition">
              Get a Quote
            </button>
          </div>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-2xl text-gray-700"
          onClick={() => setOpen(!open)}
        >
          {open ? <FiX /> : <FiMenu />}
        </button>
      </div>

      {/* Mobile Menu */}
      {open && (
        <div className="absolute top-[80px] left-0 w-full bg-white md:hidden px-6 py-6 space-y-4 text-gray-700 font-medium shadow-md">

          {/* Mobile Services Dropdown */}
          <div>
            <button
              onClick={() => setServicesOpen(!servicesOpen)}
              className="flex items-center gap-1"
            >
              Services <FiChevronDown />
            </button>

            {servicesOpen && (
              <div className="mt-3 ml-4 space-y-2">
                <Link to="/services/corporateprinting" className="block" onClick={closeDropdowns}>
                  Corporate Printing
                </Link>
                <Link to="/services/branding&merchandise" className="block" onClick={closeDropdowns}>
                  Branding & Merchandise
                </Link>
                <Link to="/services/largeformat&singage" className="block" onClick={closeDropdowns}>
                  Large Format & Singnage
                </Link>
                <Link to="/services/branddesignstudio" className="block" onClick={closeDropdowns}>
                  Brand Design studio
                </Link>
              </div>
            )}
          </div>

          {/* Other Links */}
          <Link to="/porfolio" className="block" onClick={closeDropdowns}>
            Portfolio
          </Link>
          <Link to="/about" className="block" onClick={closeDropdowns}>
            About Us
          </Link>
          <Link to="/contactus" className="block" onClick={closeDropdowns}>
            Contact
          </Link>

          {/* Mobile CTA */}
          <button className="w-full mt-4 px-5 py-2 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white font-semibold">
            Get a Quote
          </button>
        </div>
      )}
    </header>
  );
};

export default Header;
