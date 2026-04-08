import { useEffect, useState } from "react";
import type { Project } from "./types";
import getCategoryColor from "./utils/getCategoryColor";

const API_URL = "https://decof-fullbuild.onrender.com/api/projects";

const categories = [
  "All Projects",
  "Annual Reports",
  "Education",
  "Branding & Merch",
  "Large Format",
  "Publications",
];

const Sec1: React.FC = () => {
  const [projects, setProjects] = useState<Project[]>([]);
  const [activeCategory, setActiveCategory] = useState("All Projects");
  const [loading, setLoading] = useState(true);

  const fetchProjects = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);

      if (!res.ok) throw new Error("Failed to fetch projects");

      const data = await res.json();
      setProjects(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProjects();
  }, []);

  const filteredProjects =
    activeCategory === "All Projects"
      ? projects
      : projects.filter(
          (project) => project.category === activeCategory
        );

  return (
    <section className="w-full bg-[#F3F4F6] py-20 px-6">
      <div className="max-w-7xl mx-auto">

        {/* FILTER */}
        <div className="flex flex-wrap gap-4 mb-12 justify-center">
          {categories.map((category, index) => (
            <button
              key={index}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition ${
                activeCategory === category
                  ? "bg-gradient-to-r from-[#1F58B9] to-[#21C0E6] text-white shadow-md"
                  : "bg-gray-200 text-gray-700 hover:bg-gray-300"
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        {/* LOADING */}
        {loading && (
          <p className="text-center text-gray-500">Loading projects...</p>
        )}

        {/* EMPTY STATE */}
        {!loading && filteredProjects.length === 0 && (
          <p className="text-center text-gray-500">
            No projects yet. Add one from the CMS above.
          </p>
        )}

        {/* GRID */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-10">
          {filteredProjects.map((project) => (
            <div
              key={project._id}
              className="bg-white rounded-2xl shadow-md hover:shadow-xl transition overflow-hidden group"
            >
              {/* IMAGE */}
              <div className="relative h-60 w-full overflow-hidden">
                <img
                  src={project.image || "/placeholder.jpg"} // fallback
                  alt={project.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition duration-500"
                />

                {/* BADGE */}
                <div className="absolute top-4 right-4">
                  <div className="bg-white/80 backdrop-blur-md px-3 py-1 rounded-lg shadow">
                    <span
                      className={`text-xs font-semibold ${getCategoryColor(
                        project.category
                      )}`}
                    >
                      {project.category}
                    </span>
                  </div>
                </div>
              </div>

              {/* CONTENT */}
              <div className="p-6">
                <h3 className="text-lg font-semibold text-gray-900">
                  {project.title}
                </h3>

                <p className="text-sm text-blue-600 mt-1">
                  {project.client}
                </p>

                <p className="text-gray-600 mt-3 text-sm leading-relaxed">
                  {project.shortDesc}
                </p>

                <button className="mt-4 text-sm font-medium text-gray-700 bg-gray-100 px-4 py-2 rounded-full hover:bg-gray-200 transition">
                  View Case Study
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Sec1;