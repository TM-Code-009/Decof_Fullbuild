import { IoIosChatbubbles } from "react-icons/io";

const Sec3 = () => {
  return (
    <section className="w-full bg-gradient-to-r from-[#1F58B9] to-[#21C0E6] py-24 px-6">
      <div className="max-w-4xl mx-auto text-center text-white">

        <h2 className="text-4xl md:text-5xl font-bold">
          Ready to Redefine Your Brand?
        </h2>

        <p className="mt-6 text-lg opacity-90">
          Partner with our creative team to build a visual identity that
          resonates with your audience.
        </p>

        <div className="mt-10">
          <button className="inline-flex items-center gap-3 bg-white text-[#1F58B9] font-semibold px-8 py-4 rounded-xl shadow-md hover:shadow-lg transition duration-300">
            <IoIosChatbubbles className="text-xl" />
            Consult with Our Designers
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec3;