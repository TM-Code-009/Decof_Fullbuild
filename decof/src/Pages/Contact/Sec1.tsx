import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";
import { useState } from "react";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import img from "../../assets/contact.png"

const Sec1 = () => {
  const [service, setService] = useState("");

  return (
    <section className="py-20 px-6 bg-white">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-14">
        {/* LEFT SIDE */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-center md:text-left mb-10">
            Get in Touch
          </h2>

          <div className="space-y-8">
            {/* Email */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl">
                <FiMail />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Email</h3>
                <p className="text-gray-600">decofpublishers@gmail.com</p>
              </div>
            </div>

            {/* Social Media */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl">
                <FaInstagram />
              </div>
              <div>
                <h3 className="font-semibold text-lg">Social Media</h3>
                <p className="text-gray-600">@decofpublishers</p>
              </div>
            </div>

            {/* Office Hours */}
            <div className="flex items-start gap-4">
              <div className="w-12 h-12 rounded-xl bg-blue-500 text-white flex items-center justify-center text-2xl">
                <PiClockCounterClockwiseBold />

              </div>
              <div>
                <h3 className="font-semibold text-lg">Office Hours</h3>
                <p className="text-gray-600">
                  Monday – Friday <br />
                  8:00 AM – 5:00 PM
                </p>
              </div>
            </div>

            {/* Placeholder Image Box */}
            <div className="flex justify-center lg:justify-start">
          <img
            src={img}
            alt="Professionalism"
            className="rounded-2xl w-full  h-[270px] "
          />
        </div>
          </div>
        </div>

        {/* RIGHT SIDE — CONTACT FORM */}
        <div className="bg-gray-100 p-8 rounded-2xl shadow-md">
          <h3 className="text-xl md:text-2xl font-semibold mb-6">Send a Message</h3>

          <form className="space-y-5">
            {/* Name */}
            <div>
              <label className="block font-medium mb-1">Name</label>
              <input
                type="text"
                placeholder="Your full name"
                className="w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Email */}
            <div>
              <label className="block font-medium mb-1">Email</label>
              <input
                type="email"
                placeholder="Your@email.com"
                className="w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Service Interest */}
            <div>
              <label className="block font-medium mb-1">Service interest</label>
              <select
                value={service}
                onChange={(e) => setService(e.target.value)}
                className="w-full border rounded-md px-3 py-3 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500"
              >
                <option value="">Select Service</option>
                <option value="publishing">Publishing</option>
                <option value="editing">Editing</option>
                <option value="design">Book Design</option>
              </select>
            </div>

            {/* Message */}
            <div>
              <label className="block font-medium mb-1">Message</label>
              <textarea
                rows={5}
                placeholder="Tell us about your project..."
                className="w-full border rounded-md px-3 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
              ></textarea>
            </div>

            {/* Button */}
            <button
              type="submit"
              className="w-full py-3 rounded-md text-white font-semibold bg-gradient-to-r from-blue-600 to-sky-400 hover:opacity-90 transition"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Sec1;