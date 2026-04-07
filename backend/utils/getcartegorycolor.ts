const getCategoryColor = (category: string): string => {
  switch (category) {
    case "Annual Reports":
      return "text-orange-500";

    case "Education":
      return "text-green-500";

    case "Large Format":
      return "text-yellow-500";

    case "Branding & Merch":
      return "text-cyan-500";

    case "Publications":
      return "text-purple-500";

    default:
      return "text-gray-500";
  }
};

export default getCategoryColor;