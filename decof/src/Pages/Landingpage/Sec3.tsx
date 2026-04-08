import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface GalleryImage {
  _id: string;
  image: string; // ✅ correct field from backend
  title?: string;
}

const Sec3 = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchImages = async () => {
      try {
        // ✅ use relative path (works with proxy + production)
        const res = await fetch("https://decof-fullbuild.onrender.com/api/gallery");

        if (!res.ok) throw new Error("Failed to fetch images");

        const data: GalleryImage[] = await res.json();

        // ✅ limit to 9 images on frontend (safe)
        setImages(data.slice(0, 9));
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6">
        
        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Selected Projects & Capacity
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Our portfolio reflects our commitment to excellence.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 lg:grid-cols-3">
          {images.map((img) => (
            <div
              key={img._id}
              className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer shadow-sm hover:shadow-lg transition"
              onClick={() => navigate("/gallery")}
            >
              <img
                src={img.image} // ✅ correct usage
                alt={img.title || "Gallery Image"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay (nice UX touch) */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition" />
            </div>
          ))}
        </div>

        {/* BUTTON */}
        <div className="mt-14 flex justify-center">
          <button
            onClick={() => navigate("/gallery")}
            className="px-8 py-3 rounded-xl bg-gradient-to-r from-[#1F58B9] to-[#21C0E6] text-white font-semibold shadow-md hover:opacity-90 transition"
          >
            View Full Portfolio
          </button>
        </div>

      </div>
    </section>
  );
};

export default Sec3;