
import { Facebook, Instagram, Linkedin, Twitter } from "lucide-react";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-premium-950 text-white py-12 border-t border-white/10">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">
              Inner <span className="premium-gradient-text">Circle</span> Mentorship
            </h3>
            <p className="text-gray-300 mb-4">
              Transform your success into generational impact through personalized mentorship with Dr. Stephen Akintayo.
            </p>
            <div className="flex space-x-4">
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Twitter size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-white/70 hover:text-gold-400 transition-colors">
                <Linkedin size={20} />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="#about" className="text-gray-300 hover:text-gold-400 transition-colors">
                  About Dr. Stephen
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Mentorship Benefits
                </a>
              </li>
              <li>
                <a href="#testimonials" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Success Stories
                </a>
              </li>
              <li>
                <a href="#register" className="text-gray-300 hover:text-gold-400 transition-colors">
                  Apply Now
                </a>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-bold mb-4">Contact</h3>
            <p className="text-gray-300 mb-2">Gtext Global Headquarters</p>
            <p className="text-gray-300 mb-6">Lagos, Nigeria</p>
            <p className="text-gray-300">
              <a href="mailto:info@innercirclementorship.com" className="hover:text-gold-400 transition-colors">
                info@innercirclementorship.com
              </a>
            </p>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-10 pt-6 text-center text-gray-400 text-sm">
          <p>&copy; {currentYear} Inner Circle Mentorship. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
