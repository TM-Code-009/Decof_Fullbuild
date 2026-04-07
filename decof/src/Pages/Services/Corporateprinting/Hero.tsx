import img from "../../../assets/paper2.png"

const Hero = () => {
  return (
    <section className="min-h-[500px] bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex flex-col justify-center items-center px-6 text-center">
      
      <h1 className="font-bold text-white leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[50px] max-w-4xl">
        High-Quality Prints for Business 
Operations
      </h1>

      <p className="mt-6 text-white leading-relaxed
        text-base sm:text-lg md:text-xl max-w-3xl">
        We provide professional print solutions designed to support organizational operations and corporate communication with accuracy and consistency.</p>

      {/* CTA Buttons */}
    
        <button className="mt-10 min-w-[200px] flex items-center gap-3 px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold hover:opacity-90 transition">
           <img src={img} height={20} width={20} alt="" />
Request a Print Quote        </button>
   

    </section>
  );
};

export default Hero;
