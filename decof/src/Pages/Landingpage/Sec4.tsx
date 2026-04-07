import { IoSendSharp } from "react-icons/io5";

const Sec4 = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] flex flex-col items-center text-center px-6">
      
      <h1
        className="font-bold text-white leading-tight
        text-3xl sm:text-4xl md:text-5xl lg:text-[50px] max-w-4xl"
      >
        Let Us Handle Your Next Project
      </h1>

      <p
        className="mt-6 text-white leading-relaxed
        text-base sm:text-lg md:text-xl max-w-3xl"
      >
        Experience the assurance of our highest professional consideration.
      </p>

      <button
        className="mt-10 min-w-[220px] flex items-center justify-center gap-3
        px-6 py-3 rounded-lg bg-white text-blue-700 font-semibold
        hover:opacity-90 transition"
      >
        Start a Project With Us
        <IoSendSharp className="text-lg" />
      </button>

    </section>
  );
};

export default Sec4;
