import { FaCog } from "react-icons/fa";
import { PiClockCounterClockwiseBold } from "react-icons/pi";
import { IoCheckmarkDoneSharp } from "react-icons/io5";

const features = [
  {
    icon: <IoCheckmarkDoneSharp className="text-white text-2xl" />,
    title: "Delivery Services",
    desc: "All printed materials will be packaged securely and delivered promptly to your designated locations as agreed.",
  },
  {
    icon: <FaCog className="text-white text-2xl" />,
    title: "Production Guidance",
    desc: "We provide expert advice on materials and finishes to suit your budget and goals.",
  },
  {
    icon: <PiClockCounterClockwiseBold
 className="text-white text-2xl" />,
    title: "Transparent Timelines",
    desc: "We offer clear schedules and responsive communication throughout each engagement.",
  },
];

const Sec2 = () => {
  return (
    <section className="bg-gray-100 py-20 px-6">
      <div className="max-w-6xl mx-auto">

        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-14">
          What You Can Expect
        </h2>

        {/* Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((item, idx) => (
            <div
              key={idx}
              className="bg-white rounded-2xl p-8 shadow-sm hover:shadow-md transition"
            >
              {/* Icon */}
              <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 flex items-center justify-center mb-6">
                {item.icon}
              </div>

              {/* Title */}
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>

              {/* Description */}
              <p className="text-gray-600 text-sm leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sec2;