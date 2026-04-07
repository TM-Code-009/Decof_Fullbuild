import { BsArrowsAngleExpand } from "react-icons/bs";


const Hero = () => {
  return (
    <section className="min-h-[500px] bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex flex-col justify-center items-center px-6 text-center">
      
      <h1 className="font-bold text-white leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[50px] max-w-4xl">
       Big Impact for Outdoor and Indoor Spaces
      </h1>

      <p className="mt-6 text-white leading-relaxed
        text-base sm:text-lg md:text-xl max-w-3xl">
        DECOF provides large format printing solutions with a strong focus on visibility and durability.
        </p>

      {/* CTA Buttons */}
    
        <button className="mt-10 min-w-[200px] flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90 transition">
           <BsArrowsAngleExpand />
Get a Large Format Quote    </button>
   

    </section>
  );
};

export default Hero;
