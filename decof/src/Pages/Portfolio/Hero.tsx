import { HiMagnifyingGlass } from "react-icons/hi2";

const Hero = () => {
  return (
    <section className="w-full bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] py-24 px-6 text-white">
      <div className="max-w-4xl mx-auto text-center">

        <h1 className="text-4xl md:text-5xl font-bold">
          Selected Projects & Case Studies
        </h1>

        <p className="mt-6 text-lg opacity-90 max-w-2xl mx-auto">
          Explore our diverse range of printing and design projects.
          From corporate annual reports to educational materials and
          large-scale branding.
        </p>

        {/* Search Bar */}
        <div className="mt-10 relative max-w-xl mx-auto">
          <HiMagnifyingGlass className="absolute left-4 top-1/2 -translate-y-1/2 text-white opacity-80 text-xl" />
          <input
            type="text"
            placeholder="Search Projects..."
            className="w-full pl-12 pr-4 py-4 rounded-full bg-white/20 backdrop-blur-md border border-white/30 text-white placeholder-white/80 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
        </div>

      </div>
    </section>
  );
};

export default Hero;