
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-premium-950/90 backdrop-blur-lg shadow-lg py-3"
          : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        <div className="flex items-center">
          <h1 className="text-2xl font-display font-bold text-white">
            Inner <span className="premium-gradient-text">Circle</span>
          </h1>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center space-x-8">
          <a href="#about" className="text-white/80 hover:text-gold-400 transition-colors">
            About
          </a>
          <a href="#benefits" className="text-white/80 hover:text-gold-400 transition-colors">
            Benefits
          </a>
          <a href="#testimonials" className="text-white/80 hover:text-gold-400 transition-colors">
            Success Stories
          </a>
          <a href="#faq" className="text-white/80 hover:text-gold-400 transition-colors">
            FAQ
          </a>
          <Button 
            className="premium-button" 
            onClick={() => document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' })}
          >
            Join Now
          </Button>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button
            className="text-white p-2"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            <Menu size={24} />
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-premium-950 shadow-lg">
          <div className="container mx-auto px-4 py-4 flex flex-col space-y-4">
            <a
              href="#about"
              className="text-white/80 hover:text-gold-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              About
            </a>
            <a
              href="#benefits"
              className="text-white/80 hover:text-gold-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Benefits
            </a>
            <a
              href="#testimonials"
              className="text-white/80 hover:text-gold-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              Success Stories
            </a>
            <a
              href="#faq"
              className="text-white/80 hover:text-gold-400 transition-colors py-2"
              onClick={() => setMobileMenuOpen(false)}
            >
              FAQ
            </a>
            <Button
              className="premium-button w-full"
              onClick={() => {
                document.getElementById('register')?.scrollIntoView({ behavior: 'smooth' });
                setMobileMenuOpen(false);
              }}
            >
              Join Now
            </Button>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;
