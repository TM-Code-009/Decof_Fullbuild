import { FaMapMarkerAlt } from "react-icons/fa";

const Sec3 = () => {
  return (
    <section className="bg-white py-20 px-6">
      <div className="max-w-6xl mx-auto text-center">
        {/* Header */}
        <h2 className="text-3xl md:text-4xl font-bold mb-12">
          Visit Our Office
        </h2>

        {/* Map Placeholder */}
        <div className="bg-gray-100 rounded-2xl py-24 flex flex-col items-center justify-center shadow-sm">
          <div className="w-16 h-16 flex items-center justify-center rounded-xl bg-gradient-to-br from-blue-600 to-sky-400 mb-4">
            <FaMapMarkerAlt className="text-white text-2xl" />
          </div>

          <h3 className="text-xl font-semibold mb-2">Map Integration</h3>
          <p className="text-gray-500 text-sm">
            Google Maps will be integrated here
          </p>
        </div>

        {/* Address Display */}
        <div className="mt-8 flex justify-center">
          <div className="flex items-center gap-2 bg-gray-100 px-5 py-3 rounded-full shadow-sm">
            <FaMapMarkerAlt className="text-blue-600 text-lg" />
            <span className="text-gray-700 text-sm">
              office address will be displayed here
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Sec3;