import { MdOutlineFileDownload } from "react-icons/md";

const Sec4 = () => {
  return (
    <section className="bg-gradient-to-b from-[#1F58B9] to-[#21C0E6] py-24 px-6 text-center text-white">
      <div className="max-w-4xl mx-auto">

        <h2 className="text-3xl md:text-5xl font-bold mb-6">
          Need Precise Corporate Printing?
        </h2>

        <p className="text-lg md:text-xl opacity-90 mb-10">
          We ensure strict quality control and responsive communication for all your bulk printing needs.
        </p>

        <button className="inline-flex items-center gap-3 px-8 py-4 bg-white text-blue-700 font-semibold rounded-lg shadow-md hover:scale-105 transition">
          <MdOutlineFileDownload />
          Upload Your Artworks
        </button>

      </div>
    </section>
  );
};

export default Sec4;
