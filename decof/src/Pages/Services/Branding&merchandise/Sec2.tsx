import type { ReactNode } from "react";
import { ImPriceTags } from "react-icons/im";
import { RiCupFill } from "react-icons/ri";

import corporateImg from "../../../assets/branding4.png";
import brandingImg from "../../../assets/branding5.png";

type Service = {
  title: string;
  desc: string;
  image: string;
  icon: ReactNode;
  list: string[];
};

const services: Service[] = [
  {
    title: "Carrier Bags",
    desc:
      "Durable and well-finished branded carrier bags designed to enhance presentation.",
    icon: <ImPriceTags size={18} />,
    image: corporateImg,
    list: [
      "Heavy-duty construction",
      "Custom printing options",
      "Various sizes available",
      "Eco-friendly materials",
    ],
  },
  {
    title: "Notepads",
    desc:
      "Customised branded notepads produced in various sizes and paper specifications.",
    icon: <RiCupFill size={18} />,
    image: brandingImg,
    list: [
      "Multiple size options",
      "Quality paper stock",
      "Custom cover design",
      "Bulk order discounts",
    ],
  },
];

const Sec2 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Premium Branded Items
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We deliver high-quality customised printing for a variety of
            promotional needs.
          </p>
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-2">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="relative h-56">
                <img
                  src={service.image}
                  alt={service.title}
                  className="w-full h-full object-cover"
                />

                {/* Floating Icon */}
                <div className="absolute top-4 right-4 w-11 h-11 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md">
                  {service.icon}
                </div>
              </div>

              {/* Content */}
              <div className="p-6 flex flex-col flex-grow">
                <h4 className="font-bold text-xl text-gray-900 mb-2">
                  {service.title}
                </h4>

                <p className="text-sm text-gray-600 mb-5">
                  {service.desc}
                </p>

                {/* Feature List */}
                <ul className="space-y-2 mt-auto">
                  {service.list.map((item, i) => (
                    <li
                      key={i}
                      className="flex items-start gap-3 text-sm text-gray-600"
                    >
                      <span className="mt-2 w-2 h-2 rounded-full bg-gradient-to-b from-[#1F58B9] to-[#21C0E6]"></span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sec2;
