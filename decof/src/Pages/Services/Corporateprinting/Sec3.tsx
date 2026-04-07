import { FaCalendarDay } from "react-icons/fa";
import img from "../../../assets/corprate5.png"

const Sec3 = () => {
  return (
    <section className="max-w-6xl mx-auto px-4 py-20 grid md:grid-cols-2 gap-10 items-center">
      {/* Left Content */}
      <div>
        <h2 className="text-3xl font-semibold mb-6">Calendars & Organization</h2>

        {/* Icon + Header */}
        <div className="flex items-start gap-3 mb-4">
          <div className="w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex items-center justify-center text-white text-xl">
            <FaCalendarDay />
          </div>
          <h3 className="text-xl font-semibold mt-1">Table Top Calendars</h3>
        </div>

        <p className="text-gray-600 mb-4 leading-relaxed">
          Beautifully made, durable, and well-finished calendars designed to last throughout the year.
        </p>

        {/* Bullet Points */}
        <ul className="space-y-2 text-gray-700">
          {[
            "Premium paper stock with vibrant color reproduction",
            "Sturdy construction for year-round durability",
            "Custom branding options available",
            "Professional finishing and binding",
          ].map((text, i) => (
            <li key={i} className="flex items-center gap-2">
              <span className="bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] bg-clip-text text-transparent text-[40px] leading-none">
                •
              </span>
              {text}
            </li>
          ))}
        </ul>
      </div>

      {/* Placeholder Image */}
      <div className="flex justify-center lg:justify-start">
          <img
            src={img}
            alt="Professionalism"
            className="rounded-2xl w-full  h-[350px] "
          />
        </div>
    </section>
  );
};

export default Sec3;
