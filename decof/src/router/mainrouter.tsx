import { createBrowserRouter } from "react-router-dom";
import Layout from "../Layout/Layout";
import Landingpage from "../Pages/Landingpage/Landingpage";
import About from "../Pages/About/About";
import Corporate from "../Pages/Services/Corporateprinting/Corporate";
import Branding from "../Pages/Services/Branding&merchandise/Branding";
import Largeformat from "../Pages/Services/Largeformat&singage/Largeformat";
import Branddesign from "../Pages/Services/Branddesignstudio/Branddesign";
import Portfolio from "../Pages/Portfolio/Portfolio";
import Contact from "../Pages/Contact/Contact";
import CMS from "../Pages/Portfolio/CMS";
import GalleryCMS from "../Pages/Landingpage/GalleryCms";
import GalleryPage from "../Pages/Landingpage/GalleryPage";

const handleGalleryUpload = () => {
  console.log("Image uploaded, refresh gallery here!");
};


export const Mainrouter = createBrowserRouter([
    {
        path:"/",
        element: <Layout/>,
        children : [
            { index: true, element: <Landingpage /> },
            { path: "/about", element: <About /> },
            { path: "/porfolio", element: <Portfolio /> },
            { path: "/cms", element: <CMS onAdd={() => {}} /> },
            {
        path: "/gallerycms",
        element: (
          <GalleryCMS
            apiUrl="https://decof-fullbuild.onrender.com/api/gallery" // <-- your backend endpoint
            onUploadSuccess={handleGalleryUpload}
          />
        ),
      },
            { path: "/contactus", element: <Contact /> },
            { path: "//gallery", element: <GalleryPage /> },
            { path: "/services/corporateprinting", element: <Corporate /> },
            { path: "/services/branding&merchandise", element: <Branding /> },
            { path: "/services/largeformat&singage", element: <Largeformat /> },
            { path: "/services/branddesignstudio", element: <Branddesign /> },
        ]
    }
])