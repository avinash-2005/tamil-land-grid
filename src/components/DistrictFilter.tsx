import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Filter, Grid3X3 } from "lucide-react";

const DistrictFilter = () => {
  const [selectedDistrict, setSelectedDistrict] = useState<string | null>(null);
  
  const districts = [
    { name: "Chennai", properties: 1245, busUnits: 8567 },
    { name: "Coimbatore", properties: 987, busUnits: 12456 },
    { name: "Madurai", properties: 756, busUnits: 9874 },
    { name: "Tiruchirappalli", properties: 654, busUnits: 8965 },
    { name: "Salem", properties: 543, busUnits: 7854 },
    { name: "Tirunelveli", properties: 432, busUnits: 6789 },
    { name: "Vellore", properties: 567, busUnits: 8123 },
    { name: "Erode", properties: 398, busUnits: 5678 },
    { name: "Tiruppur", properties: 445, busUnits: 6234 },
    { name: "Thoothukudi", properties: 323, busUnits: 4567 },
    { name: "Dindigul", properties: 267, busUnits: 3890 },
    { name: "Thanjavur", properties: 398, busUnits: 5234 },
    { name: "Kanchipuram", properties: 456, busUnits: 6789 },
    { name: "Tiruvallur", properties: 534, busUnits: 7456 },
    { name: "Cuddalore", properties: 298, busUnits: 4123 },
    { name: "Karur", properties: 189, busUnits: 2890 }
  ];

  const topDistricts = districts.slice(0, 8);
  const allDistricts = districts;

  return (
    <section id="districts" className="py-16 bg-muted/30">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-medium mb-4">
            <Filter className="w-4 h-4 mr-2" />
            District Explorer
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Explore Tamil Nadu's 38 Districts
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Navigate through our comprehensive mapping system covering every district 
            with detailed BUS grid analysis and property insights.
          </p>
        </div>

        {/* Quick Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
            <div className="text-2xl font-bold text-primary">38</div>
            <div className="text-sm text-muted-foreground">Total Districts</div>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
            <div className="text-2xl font-bold text-secondary">130,060</div>
            <div className="text-sm text-muted-foreground">Sq Km Mapped</div>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
            <div className="text-2xl font-bold text-accent">2.1M+</div>
            <div className="text-sm text-muted-foreground">BUS Units</div>
          </Card>
          <Card className="p-6 text-center shadow-soft hover:shadow-medium transition-smooth">
            <div className="text-2xl font-bold text-primary">250m</div>
            <div className="text-sm text-muted-foreground">Resolution</div>
          </Card>
        </div>

        {/* Top Districts Grid */}
        <div className="mb-8">
          <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
            <MapPin className="w-5 h-5 mr-2 text-primary" />
            Popular Districts
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {topDistricts.map((district, index) => (
              <Card 
                key={district.name}
                className={`p-6 cursor-pointer transition-all duration-300 hover:shadow-medium hover:-translate-y-1 animate-scale-in ${
                  selectedDistrict === district.name 
                    ? 'ring-2 ring-primary shadow-glow' 
                    : 'shadow-soft'
                }`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => setSelectedDistrict(selectedDistrict === district.name ? null : district.name)}
              >
                <div className="flex items-center justify-between mb-3">
                  <h4 className="font-semibold text-foreground">{district.name}</h4>
                  {selectedDistrict === district.name && (
                    <Badge variant="secondary" className="text-xs">Selected</Badge>
                  )}
                </div>
                <div className="space-y-2">
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground">Properties:</span>
                    <span className="font-medium text-foreground">{district.properties}</span>
                  </div>
                  <div className="flex items-center justify-between text-sm">
                    <span className="text-muted-foreground flex items-center">
                      <Grid3X3 className="w-3 h-3 mr-1" />
                      BUS Units:
                    </span>
                    <span className="font-medium text-primary">{district.busUnits.toLocaleString()}</span>
                  </div>
                </div>
                <div className="mt-4 w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-smooth"
                    style={{ width: `${Math.min((district.properties / 1500) * 100, 100)}%` }}
                  ></div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* Selected District Details */}
        {selectedDistrict && (
          <Card className="p-8 shadow-medium animate-fade-in-up bg-card-gradient">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold text-foreground mb-4">{selectedDistrict} District</h3>
                <p className="text-muted-foreground mb-6">
                  Detailed mapping and property analysis for {selectedDistrict} district using our 
                  innovative BUS grid system with 250-meter precision mapping.
                </p>
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Available Properties:</span>
                    <Badge variant="secondary">
                      {districts.find(d => d.name === selectedDistrict)?.properties} listings
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">BUS Grid Coverage:</span>
                    <Badge variant="outline">
                      {districts.find(d => d.name === selectedDistrict)?.busUnits.toLocaleString()} units
                    </Badge>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-foreground">Map Resolution:</span>
                    <Badge variant="outline">250m precision</Badge>
                  </div>
                </div>
              </div>
              
              <div className="space-y-4">
                <h4 className="text-lg font-semibold text-foreground">Quick Actions</h4>
                <div className="grid grid-cols-2 gap-3">
                  <Button variant="default" className="shadow-soft">
                    <MapPin className="w-4 h-4 mr-2" />
                    View Map
                  </Button>
                  <Button variant="outline" className="shadow-soft">
                    <Filter className="w-4 h-4 mr-2" />
                    Filter Properties
                  </Button>
                </div>
                <Button variant="secondary" className="w-full shadow-soft">
                  <Grid3X3 className="w-4 h-4 mr-2" />
                  Browse BUS Grid System
                </Button>
              </div>
            </div>
          </Card>
        )}

        {/* View All Districts Button */}
        <div className="text-center mt-8">
          <Button variant="outline" size="lg" className="shadow-medium">
            View All 38 Districts
          </Button>
        </div>
      </div>
    </section>
  );
};

export default DistrictFilter;