import { MapPin, Phone, Mail, Grid3X3, ExternalLink } from "lucide-react";

const Footer = () => {
  const districts = [
    "Chennai", "Coimbatore", "Madurai", "Tiruchirappalli", "Salem", "Tirunelveli",
    "Vellore", "Erode", "Tiruppur", "Thoothukudi", "Dindigul", "Thanjavur"
  ];

  const propertyTypes = [
    "Agricultural Land", "Residential Plots", "Commercial Property", 
    "Industrial Land", "Farm Houses", "Hill Station Properties"
  ];

  const technologies = [
    "BUS Grid System", "PostGIS Mapping", "MapLibre GL JS", 
    "Spatial Indexing", "Property Analytics", "Real-time Updates"
  ];

  return (
    <footer className="bg-foreground text-background">
      <div className="container mx-auto px-4 py-12">
        {/* Main Footer Content */}
        <div className="grid lg:grid-cols-4 gap-8 mb-8">
          {/* Company Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-3 mb-4">
              <div className="flex items-center justify-center w-10 h-10 bg-primary rounded-lg">
                <MapPin className="h-6 w-6 text-primary-foreground" />
              </div>
              <div>
                <h3 className="text-xl font-bold">TheTalkingMap</h3>
                <p className="text-sm text-background/70">Tamil Nadu Real Estate</p>
              </div>
            </div>
            <p className="text-background/80 text-sm mb-4 leading-relaxed">
              Revolutionary real estate mapping platform covering Tamil Nadu's 130,060 sq km 
              through innovative BUS grid system with 2.1M+ mapped units.
            </p>
            <div className="space-y-2 text-sm">
              <div className="flex items-center text-background/80">
                <Phone className="w-4 h-4 mr-2" />
                <span>+91 9941973013</span>
              </div>
              <div className="flex items-center text-background/80">
                <Mail className="w-4 h-4 mr-2" />
                <span>contact@thetalkingmap.net</span>
              </div>
              <div className="flex items-center text-background/80">
                <MapPin className="w-4 h-4 mr-2" />
                <span>Tamil Nadu, India</span>
              </div>
            </div>
          </div>

          {/* Popular Districts */}
          <div>
            <h4 className="text-lg font-semibold mb-4 flex items-center">
              <Grid3X3 className="w-5 h-5 mr-2 text-primary" />
              Popular Districts
            </h4>
            <ul className="space-y-2">
              {districts.map((district) => (
                <li key={district}>
                  <a 
                    href={`#district-${district.toLowerCase()}`}
                    className="text-background/80 hover:text-primary transition-smooth text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-primary rounded-full mr-2"></span>
                    {district}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Property Types */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Property Types</h4>
            <ul className="space-y-2">
              {propertyTypes.map((type) => (
                <li key={type}>
                  <a 
                    href={`#properties-${type.toLowerCase().replace(/\s+/g, '-')}`}
                    className="text-background/80 hover:text-primary transition-smooth text-sm flex items-center"
                  >
                    <span className="w-1 h-1 bg-secondary rounded-full mr-2"></span>
                    {type}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Technology & Features */}
          <div>
            <h4 className="text-lg font-semibold mb-4">Technology</h4>
            <ul className="space-y-2 mb-6">
              {technologies.slice(0, 4).map((tech) => (
                <li key={tech}>
                  <span className="text-background/80 text-sm flex items-center">
                    <span className="w-1 h-1 bg-accent rounded-full mr-2"></span>
                    {tech}
                  </span>
                </li>
              ))}
            </ul>
            
            {/* Platform Stats */}
            <div className="bg-background/5 rounded-lg p-4">
              <h5 className="font-semibold mb-3 text-sm">Platform Statistics</h5>
              <div className="grid grid-cols-2 gap-3 text-xs">
                <div>
                  <div className="text-primary font-bold">2.1M+</div>
                  <div className="text-background/70">Grid Cells</div>
                </div>
                <div>
                  <div className="text-secondary font-bold">38</div>
                  <div className="text-background/70">Districts</div>
                </div>
                <div>
                  <div className="text-accent font-bold">250m</div>
                  <div className="text-background/70">Resolution</div>
                </div>
                <div>
                  <div className="text-primary font-bold">99.9%</div>
                  <div className="text-background/70">Uptime</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* BUS System Highlight */}
        <div className="border-t border-background/20 pt-8 mb-8">
          <div className="bg-background/5 rounded-lg p-6">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div>
                <Grid3X3 className="w-8 h-8 mx-auto mb-2 text-primary" />
                <h5 className="font-semibold mb-1">BUS Grid System</h5>
                <p className="text-xs text-background/70">
                  Systematic land mapping with 15+ acre precision units
                </p>
              </div>
              <div>
                <MapPin className="w-8 h-8 mx-auto mb-2 text-secondary" />
                <h5 className="font-semibold mb-1">Precise Location</h5>
                <p className="text-xs text-background/70">
                  250-meter resolution with PostGIS spatial accuracy
                </p>
              </div>
              <div>
                <ExternalLink className="w-8 h-8 mx-auto mb-2 text-accent" />
                <h5 className="font-semibold mb-1">Global Vision</h5>
                <p className="text-xs text-background/70">
                  Expanding mapping technology worldwide
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Footer */}
        <div className="border-t border-background/20 pt-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="text-sm text-background/70">
              © 2024 TheTalkingMap.net. All rights reserved. | Founded by Kishore Abishek
            </div>
            <div className="flex items-center space-x-6 text-sm">
              <a href="#privacy" className="text-background/70 hover:text-primary transition-smooth">
                Privacy Policy
              </a>
              <a href="#terms" className="text-background/70 hover:text-primary transition-smooth">
                Terms of Service
              </a>
              <a href="#about" className="text-background/70 hover:text-primary transition-smooth">
                About BUS
              </a>
              <div className="flex items-center text-background/70">
                <span className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-pulse"></span>
                <span className="text-xs">System Online</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;