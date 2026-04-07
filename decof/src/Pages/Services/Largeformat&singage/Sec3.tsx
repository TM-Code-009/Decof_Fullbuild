import { HiEnvelope } from "react-icons/hi2";

const Sec3 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1F58B9] to-[#21C0E6] py-20 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold">
          Make a Big Impression
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Let us help you dominate the visual landscape with our professional
          large format services.
        </p>

        <div className="mt-10">
          <button className="inline-flex items-center gap-3 bg-white text-[#1F58B9] font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <HiEnvelope className="text-xl" />
            Contact Us for Banners
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec3;
