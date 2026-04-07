import paper from "../../assets/paper.png";
import canvas from "../../assets/canvas.png";
import corporateImg from "../../assets/landingpage2.png";
import brandingImg from "../../assets/landingpage3.png";
import largeFormatImg from "../../assets/landingpage4.png";
import { BsArrowsAngleExpand } from "react-icons/bs";
import type { ReactNode } from "react";


type Service = {
  title: string;
  desc: string;
  image: string;
  icon: string | ReactNode;
};

const services: Service[] = [
  {
    title: "Corporate Printing",
    desc: "Official materials including annual reports, letterheads, and forms executed with accuracy.",
    icon: paper,
    image: corporateImg,
  },
  {
    title: "Branding & Merchandise",
    desc: "Customised t-shirts, bags, mugs, and branded stationeries that enhance visibility.",
    icon: canvas,
    image: brandingImg,
  },
  {
    title: "Large Format",
    desc: "Flex banners for outdoor and indoor use, produced with advanced technology for vibrant colors.",
    icon: <BsArrowsAngleExpand size={18} />,
    image: largeFormatImg,
  },
];

const Sec2 = () => {
  return (
    <section className="py-24 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Supporting Your Brand from <br className="hidden sm:block" />
            Concept to Delivery
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            We handle the printing and delivery of materials that communicate
            your brand clearly and consistently.
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
                <div className="absolute top-4 left-4 w-10 h-10 rounded-lg bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] text-white flex items-center justify-center shadow-md">
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

export default Sec2;
