import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Phone } from "lucide-react";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const districts = [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli",
    "Vellore", "Erode", "Tiruppur", "Thoothukudi", "Dindigul", "Thanjavur"
  ];

  return (
    <header className="sticky top-0 z-50 bg-card/95 backdrop-blur-md border-b shadow-soft">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg shadow-glow">
              <MapPin className="h-6 w-6 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-xl font-bold text-foreground">TheTalkingMap</h1>
              <p className="text-xs text-muted-foreground">Tamil Nadu Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#districts" className="text-foreground hover:text-primary transition-smooth">
              Districts
            </a>
            <a href="#properties" className="text-foreground hover:text-primary transition-smooth">
              Properties
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth">
              About BUS
            </a>
            <a href="#contact" className="text-foreground hover:text-primary transition-smooth">
              Contact
            </a>
            <Button variant="default" size="sm" className="shadow-medium">
              <Phone className="w-4 h-4 mr-2" />
              +91 9941973013
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t animate-fade-in-up">
            <nav className="flex flex-col space-y-4">
              <a 
                href="#districts" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Districts
              </a>
              <a 
                href="#properties" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Properties
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About BUS
              </a>
              <a 
                href="#contact" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </a>
              <div className="px-4">
                <Button variant="default" className="w-full shadow-medium">
                  <Phone className="w-4 h-4 mr-2" />
                  +91 9941973013
                </Button>
              </div>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;