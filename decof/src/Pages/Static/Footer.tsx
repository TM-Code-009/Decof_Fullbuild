import { FiMail } from "react-icons/fi";
import { FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#1E40AF] text-white">
      <div className="max-w-7xl mx-auto px-6 py-16">
        
        {/* Top Grid */}
        <div className="grid gap-12 md:grid-cols-3">
          
          {/* Brand */}
          <div>
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-bold">Decof</span>
            </div>
            <p className="text-sm text-blue-100 leading-relaxed max-w-sm">
              A company committed to professionalism, authenticity, and trust,
              providing high-quality print solutions.
            </p>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-blue-100">
              <li>Job Printing</li>
              <li>Annual Reports</li>
              <li>Branding</li>
              <li>Large Format</li>
              <li>Brand Design Studio</li>
              <li>Design Services</li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Contact</h4>
            <div className="space-y-4 text-blue-100">
              <div className="flex items-center gap-3">
                <FiMail />
                <span>decofpublishers@gmail.com</span>
              </div>

              <div className="flex items-center gap-3">
                <FaInstagram />
                <span>@decofpublishers</span>
              </div>

              <p className="text-sm leading-relaxed">
                We provide production guidance and responsive communication.
              </p>
            </div>
          </div>

        </div>

        {/* Divider */}
        <div className=" mt-12 pt-6 text-center text-sm text-blue-200">
          © 2026 Decof Publishers. All rights reserved.
        </div>

      </div>
    </footer>
  );
};

export default Footer;
