import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaWhatsapp,
  FaInstagram,
  FaTwitter,
  FaTiktok,
  FaSnapchat,
  FaLinkedin,
  FaEnvelope,
  FaPhoneAlt,
  FaMapMarkerAlt,
} from "react-icons/fa";

const rootImg = {
  imageurl: "/download.jpg",
};

const Footer = () => {
  return (
    <footer className="bg-blue-950 text-white w-full shadow-inner">
      <div className="max-w-7xl mx-auto px-6 py-10 grid grid-cols-1 md:grid-cols-4 gap-8">
        
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img
              src={rootImg.imageurl}
              alt="Help Hub Logo"
              className="rounded-full h-12 w-12"
            />
            <h2 className="text-xl font-semibold tracking-wide">Help Hub</h2>
          </div>
          <p className="text-gray-300 text-sm leading-relaxed">
            Help Hub is a community platform connecting people who need help
            with those willing to offer it. Whether it's academic, technical, or
            daily errands, Help Hub makes collaboration simple and impactful.
          </p>
        </div>

        
        <div>
          <h3 className="font-semibold text-lg mb-4">Quick Links</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                About Us
              </Link>
            </li>
            <li>
              <Link
                to="/learn-more"
                className="hover:underline hover:text-blue-400 transition"
              >
                How It Works
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                FAQs
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                Contact Support
              </Link>
            </li>
          </ul>
        </div>

         <div>
          <h3 className="font-semibold text-lg mb-4">Legal</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                Terms of Service
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                Privacy Policy
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                Security
              </Link>
            </li>
            <li>
              <Link
                to="/dashboard/seeker"
                className="hover:underline hover:text-blue-400 transition"
              >
                Report a Problem
              </Link>
            </li>
          </ul>
        </div>

       
        <div>
          <h3 className="font-semibold text-lg mb-4">Get in Touch</h3>
          <ul className="text-sm space-y-3 text-gray-300">
            <li className="flex items-center gap-2">
              <FaEnvelope className="text-blue-400" />
              <a
                href="mailto:support@helphub.com"
                className="hover:text-blue-400 transition"
              >
                support@helphub.com
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaPhoneAlt className="text-blue-400" />
              <a
                href="tel:+254712345678"
                className="hover:text-blue-400 transition"
              >
                +254 113 193 74
              </a>
            </li>
            <li className="flex items-center gap-2">
              <FaMapMarkerAlt className="text-blue-400" />
              <span>Nairobi, Kenya</span>
            </li>
          </ul>

      
          <div className="flex items-center gap-4 mt-4">
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="WhatsApp"
            >
              <FaWhatsapp />
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="Facebook"
            >
              <FaFacebook />
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="Instagram"
            >
              <FaInstagram />
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="Twitter"
            >
              <FaTwitter />
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="TikTok"
            >
              <FaTiktok />
            </a>
            <a
              href="#"
              className="text-lg hover:text-blue-400 transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin />
            </a>
          </div>
        </div>
      </div>

       
      <div className="border-t border-gray-700 py-4 text-center text-gray-400 text-sm">
        <p>
          © {new Date().getFullYear()} <span className="font-semibold">Help Hub Inc.</span>  Empowering Communities Together 💙
        </p>
        <p className="text-xs mt-1">Built with ❤️ by the Help Hub Team</p>
      </div>
    </footer>
  );
};

export default Footer;
