import { HiSwatch } from "react-icons/hi2";
import { HiArrowPath } from "react-icons/hi2";
import { HiSquares2X2 } from "react-icons/hi2";
import { HiComputerDesktop } from "react-icons/hi2";

import image from "../../../assets/brand4.png";

const Sec2 = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Creativity Meets <br /> Strategy
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            Our design approach combines creativity with strategy. We ensure
            that every brand element is distinctive, cohesive, and adaptable
            across both print and digital platforms.
          </p>

          {/* FEATURE GRID */}
          <div className="mt-12 grid sm:grid-cols-2 gap-6">

            {/* Card 1 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiSwatch />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Creative Excellence
              </h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Innovative design solutions that capture attention
              </p>
            </div>

            {/* Card 2 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiArrowPath />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Strategic Focus
              </h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Every element serves a clear business purpose
              </p>
            </div>

            {/* Card 3 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiSquares2X2 />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Cohesive Systems
              </h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Unified brand experience across all touchpoints
              </p>
            </div>

            {/* Card 4 */}
            <div className="bg-white p-6 rounded-2xl shadow-md hover:shadow-lg transition duration-300">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiComputerDesktop />
              </div>
              <h4 className="mt-4 text-lg font-semibold text-gray-900">
                Adaptable Design
              </h4>
              <p className="text-gray-600 mt-2 text-sm leading-relaxed">
                Flexible solutions for print and digital platforms
              </p>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Creative Strategy"
            className="rounded-2xl shadow-lg w-full max-w-md h-[480px] object-cover"
          />
        </div>

      </div>
    </section>
  );
};

export default Sec2;