import { FaPalette, FaCog } from "react-icons/fa";
import img from "../../assets/clientsupport.png"
import img1 from "../../assets/about2.png";
import img2 from "../../assets/about3.png";
import img3 from "../../assets/about4.png";

const Sec2 = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-20">
          Creativity Meets Strategy
        </h2>

        <div className="space-y-24">

          {/* ROW 1 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white shadow-md">
                  <FaPalette />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Design Philosophy
                  </h4>
                  <p className="mt-3 text-gray-600 max-w-md">
                    Our design approach ensures that your brand communicates
                    clearly and consistently. We develop brand identity
                    systems tailored to your specific values and objectives.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={img1}
                alt="Design"
                className="rounded-2xl  w-full max-w-sm"
              />
            </div>
          </div>

          {/* ROW 2 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Image */}
            <div className="flex justify-center md:justify-start order-2 md:order-1">
              <img
                src={img2}
                alt="Production"
                className="rounded-2xl  w-full max-w-sm"
              />
            </div>

            {/* Text */}
            <div className="order-1 md:order-2">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white shadow-md">
                  <FaCog />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Production Excellence
                  </h4>
                  <p className="mt-3 text-gray-600 max-w-md">
                    We utilize advanced printing technology to ensure
                    sharp visuals and long-lasting finishes.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ROW 3 */}
          <div className="grid md:grid-cols-2 gap-16 items-center">
            
            {/* Text */}
            <div>
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white shadow-md">
                  <img src={img}  height={20} width={20} alt="" />
                </div>

                <div>
                  <h4 className="text-xl font-semibold text-gray-900">
                    Client Support
                  </h4>
                  <p className="mt-3 text-gray-600 max-w-md">
                    We provide transparent timelines, production guidance,
                    and responsive communication to ensure your peace of mind.
                  </p>
                </div>
              </div>
            </div>

            {/* Image */}
            <div className="flex justify-center md:justify-end">
              <img
                src={img3}
                alt="Support"
                className="rounded-2xl  w-full max-w-sm"
              />
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Sec2;
