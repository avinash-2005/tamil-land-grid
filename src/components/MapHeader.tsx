import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MapPin, Menu, X, Phone, Grid3X3 } from "lucide-react";

interface MapHeaderProps {
  onToggleInfo: () => void;
  showInfo: boolean;
}

const MapHeader = ({ onToggleInfo, showInfo }: MapHeaderProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="absolute top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md border-b shadow-sm">
      <div className="px-4">
        <div className="flex items-center justify-between h-14">
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <div className="flex items-center justify-center w-8 h-8 bg-primary rounded-lg">
              <MapPin className="h-5 w-5 text-primary-foreground" />
            </div>
            <div>
              <h1 className="text-lg font-bold text-foreground">TheTalkingMap</h1>
              <p className="text-xs text-muted-foreground">Tamil Nadu Real Estate</p>
            </div>
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-6">
            <Button
              variant={showInfo ? "default" : "outline"}
              size="sm"
              onClick={onToggleInfo}
            >
              <Grid3X3 className="w-4 h-4 mr-2" />
              BUS Info
            </Button>
            <a href="#districts" className="text-foreground hover:text-primary transition-smooth text-sm">
              Districts
            </a>
            <a href="#about" className="text-foreground hover:text-primary transition-smooth text-sm">
              About
            </a>
            <Button variant="default" size="sm">
              <Phone className="w-4 h-4 mr-2" />
              +91 9941973013
            </Button>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-smooth"
          >
            {isMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden py-4 border-t">
            <nav className="flex flex-col space-y-3">
              <Button
                variant={showInfo ? "default" : "outline"}
                size="sm"
                onClick={() => {
                  onToggleInfo();
                  setIsMenuOpen(false);
                }}
                className="w-full justify-start"
              >
                <Grid3X3 className="w-4 h-4 mr-2" />
                BUS System Info
              </Button>
              <a 
                href="#districts" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                View Districts
              </a>
              <a 
                href="#about" 
                className="px-4 py-2 text-foreground hover:text-primary hover:bg-muted rounded-lg transition-smooth"
                onClick={() => setIsMenuOpen(false)}
              >
                About BUS
              </a>
              <Button variant="default" className="w-full">
                <Phone className="w-4 h-4 mr-2" />
                Call +91 9941973013
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default MapHeader;