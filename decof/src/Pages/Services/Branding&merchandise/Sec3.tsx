import { HiCheckBadge } from "react-icons/hi2";
import { FaPalette } from "react-icons/fa";
import image from "../../../assets/branding6.png";
import img from "../../../assets/advance.png";

const Sec3 = () => {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Durable & Vibrant
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            Our prints are produced using durable materials and advanced technology
            to ensure sharp visuals, vibrant colors, and long-lasting finishes.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">

            {/* Item 1 */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-2xl shadow-md">
                <HiCheckBadge />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Precision
                </h4>
                <p className="text-gray-600 mt-2">
                  Using premium substrates and inks that resist fading and wear.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white shadow-md">
                <img src={img} alt="Advanced" className="h-6 w-6" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Advanced Technology
                </h4>
                <p className="text-gray-600 mt-2">
                  State-of-the-art printing equipment for precision and consistency.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-5 items-start bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition duration-300">
              <div className="flex items-center justify-center h-14 w-14 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-2xl shadow-md">
                <FaPalette />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Vibrant Colors
                </h4>
                <p className="text-gray-600 mt-2">
                  Sharp visuals and long-lasting finishes that maintain brand integrity.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Professional printing"
            className="rounded-2xl shadow-xl w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Sec3;
