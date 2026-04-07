import { FaArrowRightLong } from "react-icons/fa6";

const Hero = () => {
  return (
    <section className="min-h-screen bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex flex-col justify-center items-center px-6 text-center">
      
      <h1 className="font-bold text-white leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[50px] max-w-4xl">
        Professional Printing & Delivery <br className="hidden sm:block" />
        Services for Your Organization
      </h1>

      <p className="mt-6 text-white leading-relaxed
        text-base sm:text-lg md:text-xl max-w-3xl">
        Committed to professionalism, authenticity, and trust. We provide high-quality
        print solutions designed to support your operational needs and corporate identity.
      </p>

      {/* CTA Buttons */}
      <div className="mt-10 flex gap-4 flex-wrap justify-center">
        <button className=" min-w-[200px] flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90 transition">
          Explore Our Services <FaArrowRightLong />
        </button>
        <button className="px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90 transition">
View Selected Projects        </button>
      </div>

    </section>
  );
};

export default Hero;
