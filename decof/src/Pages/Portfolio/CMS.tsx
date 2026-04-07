import { useState } from "react";
import { FiUpload } from "react-icons/fi";

interface CMSProps {
  onAdd: () => void;
}

const API_URL = "/api/projects";

const categories = [
  "Annual Reports",
  "Education",
  "Branding & Merch",
  "Large Format",
  "Publications",
];

const CMS: React.FC<CMSProps> = ({ onAdd }) => {
  const [form, setForm] = useState({
    title: "",
    client: "",
    desc: "",
    category: "Annual Reports",
  });

  const [image, setImage] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      setImage(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!image) return alert("Please select an image");

    setLoading(true);

    try {
      const formData = new FormData();
      formData.append("title", form.title);
      formData.append("client", form.client);
      formData.append("desc", form.desc);
      formData.append("category", form.category);
      formData.append("image", image);

      const res = await fetch(API_URL, {
        method: "POST",
        body: formData,
      });

      if (!res.ok) {
        const err = await res.json();
        throw new Error(err.message || "Error adding project");
      }

      // reset
      setForm({
        title: "",
        client: "",
        desc: "",
        category: "Annual Reports",
      });
      setImage(null);
      setPreview(null);

      onAdd();
    } catch (err: any) {
      console.error(err);
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-8 rounded-3xl shadow-lg mb-16 border border-gray-100">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">
        Add New Project
      </h2>

      <form onSubmit={handleSubmit} className="grid md:grid-cols-2 gap-6">
        
        {/* LEFT SIDE */}
        <div className="space-y-4">

          <input
            name="title"
            value={form.title}
            onChange={handleChange}
            placeholder="Project Title"
            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
            required
          />

          <input
            name="client"
            value={form.client}
            onChange={handleChange}
            placeholder="Client Name"
            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl transition"
            required
          />

          <select
            name="category"
            value={form.category}
            onChange={handleChange}
            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl"
          >
            {categories.map((cat, i) => (
              <option key={i} value={cat}>
                {cat}
              </option>
            ))}
          </select>

          <textarea
            name="desc"
            value={form.desc}
            onChange={handleChange}
            placeholder="Full Description"
            rows={5}
            className="w-full border border-gray-200 focus:border-blue-500 focus:ring-2 focus:ring-blue-100 outline-none p-3 rounded-xl resize-none"
            required
          />
        </div>

        {/* RIGHT SIDE */}
        <div className="flex flex-col justify-between">

          {/* Upload Box */}
          <label className="border-2 border-dashed border-gray-300 rounded-2xl p-6 flex flex-col items-center justify-center text-gray-500 cursor-pointer hover:border-blue-400 transition h-full">
            <FiUpload size={28} />
            <p className="mt-2 text-sm">
              Click to upload image
            </p>

            <input
              type="file"
              accept="image/*"
              onChange={handleImageChange}
              className="hidden"
            />

            {/* Preview */}
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-4 w-full h-48 object-cover rounded-xl"
              />
            )}
          </label>

          {/* Button */}
          <button
            type="submit"
            disabled={loading}
            className="mt-6 w-full py-3 rounded-xl bg-gradient-to-r from-blue-600 to-cyan-500 text-white font-semibold shadow-md hover:opacity-90 transition disabled:opacity-50"
          >
            {loading ? "Adding Project..." : "Add Project"}
          </button>
        </div>
      </form>
    </div>
  );
};

export default CMS;