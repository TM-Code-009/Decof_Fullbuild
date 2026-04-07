import { BiSolidPhoneCall } from "react-icons/bi";

const Hero = () => {
  return (
    <section className="min-h-[500px] bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex flex-col justify-center items-center px-6 text-center">
      
      <h1 className="font-bold text-white leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[50px] max-w-4xl">
        Let's Discuss Your Next Project
      </h1>

      <p className="mt-6 text-white leading-relaxed
        text-base sm:text-lg md:text-xl max-w-3xl">
       We work closely with our clients to ensure clarity, efficiency, and satisfaction.
       </p>

      {/* CTA Buttons */}
    
        <button className="mt-10 min-w-[200px] flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90 transition">
           <BiSolidPhoneCall />
Call Us Now</button>
   

    </section>
  );
};

export default Hero;
