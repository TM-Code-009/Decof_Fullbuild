import speaker from "../../../assets/speaker.png"
import banner1 from "../../../assets/large1.png";
import banner2 from "../../../assets/large4.png";
import banner3 from "../../../assets/large3.png";
import { RiShieldStarFill } from "react-icons/ri";
import { FaCalendarDay } from "react-icons/fa";

const Sec1 = () => {
  return (
    <section className="w-full bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

        {/* LEFT CONTENT */}
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight">
            Flex Banners for <br /> Every Occasion
          </h2>

          <p className="mt-6 text-gray-600 max-w-xl leading-relaxed">
            We specialize in producing high-quality flex banners suitable
            for both outdoor and indoor use.
          </p>

          <p className="mt-4 text-gray-600 max-w-xl leading-relaxed">
            Whether for events, advertising, or corporate branding, our
            large format solutions ensure your message is seen.
          </p>

          {/* FEATURES */}
          <div className="mt-10 space-y-8">

            {/* Events */}
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <FaCalendarDay />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Events
                </h4>
                <p className="text-gray-600 mt-1">
                  Perfect for conferences, exhibitions, and special occasions
                </p>
              </div>
            </div>

            {/* Advertising */}
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <img src={speaker}  height={20} width={20} alt="" />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Advertising
                </h4>
                <p className="text-gray-600 mt-1">
                  Eye-catching outdoor and indoor advertising campaigns
                </p>
              </div>
            </div>

            {/* Corporate Branding */}
            <div className="flex gap-4 items-start">
              <div className="h-12 w-12 flex items-center justify-center rounded-xl bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white text-xl shadow-md">
                <RiShieldStarFill />
              </div>

              <div>
                <h4 className="text-xl font-semibold text-gray-900">
                  Corporate Branding
                </h4>
                <p className="text-gray-600 mt-1">
                  Professional signage to elevate your brand presence
                </p>
              </div>
            </div>

          </div>
        </div>

        {/* RIGHT IMAGES */}
        <div className="grid grid-cols-2 gap-6">
          
          {/* Large Top Image */}
          <div className="col-span-2">
            <img
              src={banner1}
              alt="Flex Banner Example"
              className="rounded-2xl shadow-lg w-full h-64 object-cover"
            />
          </div>

          {/* Bottom Left */}
          <img
            src={banner2}
            alt="Flex Banner Example"
            className="rounded-2xl  w-full h-48 "
          />

          {/* Bottom Right */}
          <img
            src={banner3}
            alt="Flex Banner Example"
            className="rounded-2xl  w-full h-48 "
          />

        </div>

      </div>
    </section>
  );
};

export default Sec1;
