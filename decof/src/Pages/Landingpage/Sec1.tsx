import { FiShield, FiCheckSquare } from "react-icons/fi";
import { LuArrowDownUp } from "react-icons/lu";
import img from "../../assets/landingpage11.png"

const Sec1 = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* TOP HEADING */}
        <div className="mb-12 w-full flex flex-col justify-center items-center "  >
          <h2 className="text-3xl md:text-4xl text-center font-bold text-gray-900">
            Quality Assurance You Can Trust
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl text-center ">
            DECOF maintains strict quality control standards throughout the
            production process.
          </p>
        </div>

        {/* CONTENT BELOW */}
        <div className="grid gap-12 md:grid-cols-2 items-center">

          {/* LEFT FEATURES */}
          <div className="space-y-6">
            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center">
                <FiShield size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  High-Grade Inputs
                </h4>
                <p className="text-sm text-gray-600">
                  All materials are produced using durable inputs and precise
                  color management.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center">
                <FiCheckSquare size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Professional Finishing
                </h4>
                <p className="text-sm text-gray-600">
                  We ensure consistency, sharpness, and durability in every
                  print.
                </p>
              </div>
            </div>

            <div className="flex gap-4">
              <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center">
                <LuArrowDownUp size={18} />
              </div>
              <div>
                <h4 className="font-semibold text-gray-900">
                  Reliable Delivery
                </h4>
                <p className="text-sm text-gray-600">
                  All materials are packaged securely and delivered promptly
                  to your location.
                </p>
              </div>
            </div>
          </div>

          {/* RIGHT IMAGE */}
                <div className="flex justify-center lg:justify-start">
          <img
            src={img}
            alt="Professionalism"
            className="rounded-2xl w-full  h-[350px] "
          />
        </div>
        </div>
      </div>
    </section>
  );
};

export default Sec1;
