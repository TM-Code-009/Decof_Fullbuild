import { useState } from "react";
import type { ChangeEvent, FormEvent } from "react";
import { AiOutlineUpload } from "react-icons/ai";

interface GalleryCMSProps {
  apiUrl: string; // e.g "/api/gallery"
  onUploadSuccess: () => void;
}

const GalleryCMS: React.FC<GalleryCMSProps> = ({ apiUrl, onUploadSuccess }) => {
  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  // Handle file selection
  const handleFileChange = (e: ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];

      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit image
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!image) {
      alert("Please select an image");
      return;
    }

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("image", image); // MUST match multer field name

      const res = await fetch(apiUrl, {
        method: "POST",
        body: formData,
      });

      // 🔥 FIX: safer response handling
      const text = await res.text();

      if (!res.ok) {
        throw new Error(text || "Upload failed");
      }

      console.log("Upload success:", text);

      // Reset
      setImage(null);
      setPreview(null);

      onUploadSuccess();
    } catch (err: any) {
      console.error(err);
      alert("Failed to upload image");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg w-full max-w-lg mx-auto my-16 border border-gray-100">
      
      <h2 className="text-2xl font-bold mb-6 text-gray-800 text-center">
        Upload Gallery Image
      </h2>

      <form onSubmit={handleSubmit} className="flex flex-col gap-6">

        {/* Upload Box */}
        <label className="flex flex-col items-center justify-center border-2 border-dashed border-gray-300 p-8 rounded-2xl cursor-pointer hover:border-green-500 transition group">
          
          <AiOutlineUpload size={40} className="text-gray-400 group-hover:text-green-500 transition" />

          <span className="text-gray-500 mt-2 text-sm">
            Click to select an image
          </span>

          <input
            type="file"
            accept="image/*"
            onChange={handleFileChange}
            className="hidden"
          />
        </label>

        {/* Preview */}
        {preview && (
          <div className="relative">
            <img
              src={preview}
              alt="Preview"
              className="w-full h-64 object-cover rounded-xl shadow-md"
            />
          </div>
        )}

        {/* Submit */}
        <button
          type="submit"
          disabled={loading}
          className="py-3 rounded-xl bg-gradient-to-r from-green-600 to-emerald-500 text-white font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
        >
          {loading ? "Uploading..." : "Upload Image"}
        </button>
      </form>
    </div>
  );
};

export default GalleryCMS;