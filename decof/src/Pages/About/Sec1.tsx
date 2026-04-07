import { FaGraduationCap } from "react-icons/fa";
import { HiCheckBadge } from "react-icons/hi2";
import image from "../../assets/about1.png"; // replace with your image
import { RiShieldStarFill } from "react-icons/ri";

const Sec1 = () => {
  return (
    <section className="w-full bg-[#F5F7FA] py-20 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        
        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            A Commitment to <br /> Professionalism
          </h2>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            DECOF is built on the pillars of professionalism, authenticity,
            and trust. We are not just printers; we are partners in your
            brand's journey.
          </p>

          <p className="mt-6 text-gray-600 leading-relaxed max-w-xl">
            We work closely with clients to ensure clarity, efficiency, and
            satisfaction throughout every engagement. Our goal is to add
            value to your organization through structured processes and
            attention to detail.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">
            
            {/* Item 1 */}
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <FaGraduationCap />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Professionalism
                </h4>
                <p className="text-gray-600 mt-1">
                  Maintaining the highest standards in every project we undertake.
                </p>
              </div>
            </div>

            {/* Item 2 */}
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <HiCheckBadge />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Authenticity
                </h4>
                <p className="text-gray-600 mt-1">
                  Building genuine relationships with our clients through transparency.
                </p>
              </div>
            </div>

            {/* Item 3 */}
            <div className="flex gap-4 items-start">
              <div className="p-4 rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <RiShieldStarFill />
              </div>
              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Trust
                </h4>
                <p className="text-gray-600 mt-1">
                  All materials are packaged securely and delivered promptly to your location.
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGE */}
        <div className="flex justify-center lg:justify-end">
          <img
            src={image}
            alt="Professionalism"
            className="rounded-2xl  w-full max-w-md"
          />
        </div>

      </div>
    </section>
  );
};

export default Sec1;
