import { IoCheckmarkDoneSharp } from "react-icons/io5";
import { LuLibrary } from "react-icons/lu";
import { PiClockCounterClockwiseBold } from "react-icons/pi";

const Sec3 = () => {
  return (
    <section className="bg-[#F3F4F6] py-24 px-6">
      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-16">
          The Decof Advantage
        </h2>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">

          {/* Card 1 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md mb-6">
              <IoCheckmarkDoneSharp size={22} />
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Strict Quality Control
            </h4>

            <p className="text-gray-600">
              We use high-grade inputs and professional finishing for every job.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md mb-6">
              <PiClockCounterClockwiseBold size={22} />
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Timely Delivery
            </h4>

            <p className="text-gray-600">
              We guarantee secure packaging and prompt delivery to agreed locations.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg transition">
            <div className="w-12 h-12 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md mb-6">
              <LuLibrary  size={22} />
            </div>

            <h4 className="text-xl font-semibold text-gray-900 mb-3">
              Versatility
            </h4>

            <p className="text-gray-600">
              From “Decof Handwriting” books to corporate annual reports and
              large-format banners, we handle diverse projects.
            </p>
          </div>

        </div>

        {/* Bottom Highlight Box */}
        <div className="mt-16 flex justify-center">
          <div className="max-w-6xl text-center px-12 py-10 rounded-xl text-white bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] shadow-lg">
            Our comprehensive capabilities span educational publishing,
            corporate reporting, event <br className="md:block" /> branding, and large-format printing —
            all delivered with the same commitment to excellence.
          </div>
        </div>

      </div>
    </section>
  );
};

export default Sec3;
