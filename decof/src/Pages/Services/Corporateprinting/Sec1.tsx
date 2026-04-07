import { HiCheckBadge } from "react-icons/hi2";
import image from "../../../assets/corprate1.png";
import { FaPalette } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-start">
          <img
            src={image}
            alt="Professionalism"
            className="rounded-2xl w-full max-w-md"
          />
        </div>

        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
           Professional Annual<br/> 
Reports
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
           Reflect your organization's professionalism with reports that demand attention.
          </p>


          {/* FEATURES */}
          <div className="mt-10 space-y-8">
            
            {/* Item 1 */}
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiCheckBadge />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Precision
                </h4>
                <p className="text-gray-600 mt-1">
Professional printing with strict attention to layout integrity and color accuracy.                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <FaPalette />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Quality Materials
                </h4>
                <p className="text-gray-600 mt-1">
We prioritize paper quality and offer suitable binding and finishing options to ensure a polished look.   </p>           </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default Sec1;