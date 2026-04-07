// import paper from "../../../assets/paper3.png";
// import canvas from "../../../assets/box.png";
import { FaPen } from "react-icons/fa";
// import book from "../../../assets/book.png";
import corporateImg from "../../../assets/branding1.png";
import brandingImg from "../../../assets/branding2.png";
import largeFormatImg from "../../../assets/branding3.png";
import type { ReactNode } from "react";
import { ImPriceTags } from "react-icons/im";
import { RiCupFill } from "react-icons/ri";


type Service = {
  title: string;
  desc: string;
  image: string;
  icon: string | ReactNode;
};

const services: Service[] = [
  {
    title: "Apparel",
    desc: "Custom branded t-shirts.",
    icon: <ImPriceTags />,
    image: corporateImg,
  },
  {
    title: "Drinkware",
    desc: "Branded mugs for corporate gifts or office use.",
    icon: <RiCupFill />,
    image: brandingImg,
  },
  {
    title: "Accessories",
    desc: "Pens, envelopes, and diaries customized to your brand.",
    icon: <FaPen />,
    image: largeFormatImg,
  },
];

const Sec1 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Branded Items
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
           We deliver high-quality customised printing for a variety of promotional needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition"
            >
              {/* Image */}
              <div className="relative h-48">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md">
                  {typeof service.icon === "string" ? (
                    <img
                      src={service.icon}
                      alt=""
                      className="w-5 h-5 object-contain"
                    />
                  ) : (
                    service.icon
                  )}
                </div>
              </div>

              {/* Text */}
              <div className="p-6">
                <h4 className="font-bold text-[20px] text-gray-900 mb-2">
                  {service.title}
                </h4>
                <p className="text-sm text-gray-600">
                  {service.desc}
                </p>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sec1;
