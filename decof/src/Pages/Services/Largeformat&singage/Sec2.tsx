import eye from "../../../assets/eye.png"
import image from "../../../assets/large2.png";
import { MdOutlineShield } from "react-icons/md";
import { FaPalette } from "react-icons/fa";

const Sec2 = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">
        
        {/* Heading */}
        <h2 className="text-4xl md:text-5xl font-bold text-center text-gray-900 mb-16">
          Superior Print Quality
        </h2>

        <div className="grid lg:grid-cols-2 gap-16 items-center">

          {/* LEFT IMAGE */}
          <div className="flex justify-center lg:justify-start">
            <img
              src={image}
              alt="Print Quality"
              className="rounded-2xl w-full max-w-md h-[420px] object-cover"
            />
          </div>

          {/* RIGHT FEATURES */}
          <div className="space-y-6">

            {/* Card 1 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex gap-5 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <img src={eye} height={20} width={20} alt="" />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Sharp Visuals
                </h4>
                <p className="text-gray-600 mt-2">
                  Our prints are produced using advanced printing technology
                  to ensure sharp visuals.
                </p>
              </div>
            </div>

            {/* Card 2 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex gap-5 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <FaPalette />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Vibrant Colours
                </h4>
                <p className="text-gray-600 mt-2">
                  We guarantee vibrant colours that capture attention.
                </p>
              </div>
            </div>

            {/* Card 3 */}
            <div className="bg-white rounded-2xl p-6 shadow-md hover:shadow-lg transition duration-300 flex gap-5 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <MdOutlineShield />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Long-Lasting
                </h4>
                <p className="text-gray-600 mt-2">
                  We use durable materials to ensure long-lasting finishes
                  that withstand the elements.
                </p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default Sec2;
