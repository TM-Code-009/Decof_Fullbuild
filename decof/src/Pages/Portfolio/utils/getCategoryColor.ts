const categoryColors: Record<string, string> = {
  "Annual Reports": "text-orange-500",
  "Education": "text-green-500",
  "Large Format": "text-yellow-500",
  "Branding & Merch": "text-cyan-500",
  "Publications": "text-purple-500",
};

const getCategoryColor = (category: string): string => {
  return categoryColors[category] || "text-gray-500";
};

export default getCategoryColor;