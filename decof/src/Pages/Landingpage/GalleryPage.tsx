import { useEffect, useState } from "react";

interface GalleryImage {
  _id: string;
  image: string; // ✅ correct field
  title?: string;
}

const GalleryPage = () => {
  const [images, setImages] = useState<GalleryImage[]>([]);
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const res = await fetch("https://decof-fullbuild.onrender.com/api/gallery"); // ✅ no localhost

        if (!res.ok) throw new Error("Failed to fetch images");

        const data: GalleryImage[] = await res.json();
        setImages(data);
      } catch (err) {
        console.error(err);
      }
    };

    fetchImages();
  }, []);

  return (
    <section className="py-24 bg-[#f7f7f7] min-h-screen">
      <div className="max-w-7xl mx-auto px-6">

        {/* HEADER */}
        <div className="mb-16 text-center">
          <h2 className="text-4xl font-bold text-gray-900">
            Full Gallery
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Explore our complete gallery of projects and works.
          </p>
        </div>

        {/* GRID */}
        <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4">
          {images.map((img) => (
            <div
              key={img._id}
              className="relative w-full aspect-square overflow-hidden rounded-2xl bg-gray-100 group cursor-pointer shadow-sm hover:shadow-lg transition"
              onClick={() => setSelectedImage(img.image)}
            >
              <img
                src={img.image} // ✅ correct
                alt={img.title || "Gallery Image"}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />

              {/* Overlay */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition flex items-center justify-center">
                <span className="text-white opacity-0 group-hover:opacity-100 text-sm font-medium">
                  View Image
                </span>
              </div>

              {/* Title */}
              {img.title && (
                <div className="absolute bottom-0 left-0 right-0 bg-black/60 text-white text-xs p-2 text-center">
                  {img.title}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>


      {selectedImage && (
        <div
          className="fixed inset-0 bg-black/80 flex items-center justify-center z-50 p-6"
          onClick={() => setSelectedImage(null)}
        >
          <img
            src={selectedImage}
            alt="Preview"
            className="max-w-4xl w-full max-h-[80vh] object-contain rounded-xl shadow-lg"
          />
        </div>
      )}
    </section>
  );
};

export default GalleryPage;