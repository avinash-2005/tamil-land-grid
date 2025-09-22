import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageSquare, Home, TrendingUp, Calendar } from "lucide-react";

const PropertyListings = () => {
  const properties = [
    {
      id: 1,
      title: "Agricultural Land Near Coimbatore",
      location: "Palladam, Coimbatore",
      area: "5.2 acres",
      busGrid: "CB-2847-A",
      price: "₹12,50,000",
      pricePerAcre: "₹2,40,385",
      type: "Agricultural",
      soilType: "Red Soil",
      elevation: "420m",
      contact: "+91 98765 43210",
      postedDate: "2 days ago",
      features: ["Water Access", "Road Connectivity", "Fertile Soil"]
    },
    {
      id: 2,
      title: "Residential Plot in Chennai Outskirts",
      location: "Tambaram, Chennai",
      area: "0.8 acres",
      busGrid: "CH-1245-R",
      price: "₹45,00,000",
      pricePerAcre: "₹56,25,000",
      type: "Residential",
      soilType: "Sandy Loam",
      elevation: "15m",
      contact: "+91 87654 32109",
      postedDate: "1 week ago",
      features: ["Metro Connectivity", "Schools Nearby", "Commercial Zone"]
    },
    {
      id: 3,
      title: "Industrial Land Salem District",
      location: "Yercaud Road, Salem",
      area: "12.5 acres",
      busGrid: "SL-3567-I",
      price: "₹2,50,00,000",
      pricePerAcre: "₹20,00,000",
      type: "Industrial",
      soilType: "Black Cotton",
      elevation: "280m",
      contact: "+91 76543 21098",
      postedDate: "3 days ago",
      features: ["Highway Access", "Power Availability", "Large Area"]
    },
    {
      id: 4,
      title: "Farm Land with Coconut Trees",
      location: "Pollachi, Coimbatore",
      area: "7.8 acres",
      busGrid: "CB-4891-F",
      price: "₹35,00,000",
      pricePerAcre: "₹4,48,718",
      type: "Agricultural",
      soilType: "Alluvial",
      elevation: "350m",
      contact: "+91 98123 45678",
      postedDate: "5 days ago",
      features: ["Coconut Plantation", "Bore Well", "Organic Farming"]
    },
    {
      id: 5,
      title: "Commercial Plot Near IT Park",
      location: "Siruseri, Chennai",
      area: "1.2 acres",
      busGrid: "CH-5678-C",
      price: "₹1,80,00,000",
      pricePerAcre: "₹1,50,00,000",
      type: "Commercial",
      soilType: "Sandy",
      elevation: "8m",
      contact: "+91 91234 56789",
      postedDate: "1 day ago",
      features: ["IT Park Proximity", "Main Road", "High Appreciation"]
    },
    {
      id: 6,
      title: "Hill Station Property",
      location: "Kodaikanal, Dindigul",
      area: "3.5 acres",
      busGrid: "DN-7892-H",
      price: "₹95,00,000",
      pricePerAcre: "₹27,14,286",
      type: "Residential",
      soilType: "Mountain Soil",
      elevation: "2100m",
      contact: "+91 87654 09876",
      postedDate: "1 week ago",
      features: ["Hill View", "Cool Climate", "Tourist Area"]
    }
  ];

  const getTypeColor = (type: string) => {
    switch (type) {
      case "Agricultural": return "bg-secondary";
      case "Residential": return "bg-primary";
      case "Industrial": return "bg-accent";
      case "Commercial": return "bg-destructive";
      default: return "bg-muted";
    }
  };

  const getTypeIcon = (type: string) => {
    switch (type) {
      case "Agricultural": return "🌾";
      case "Residential": return "🏠";
      case "Industrial": return "🏭";
      case "Commercial": return "🏢";
      default: return "📍";
    }
  };

  return (
    <section id="properties" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/10 rounded-full text-secondary font-medium mb-4">
            <Home className="w-4 h-4 mr-2" />
            Property Listings
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Featured Land Opportunities
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover prime real estate opportunities across Tamil Nadu with precise BUS grid mapping 
            and comprehensive property insights.
          </p>
        </div>

        {/* Property Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 mb-8">
          {properties.map((property, index) => (
            <Card 
              key={property.id}
              className="overflow-hidden shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="p-6">
                {/* Header */}
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-2">
                    <span className="text-xl">{getTypeIcon(property.type)}</span>
                    <Badge className={`${getTypeColor(property.type)} text-white`}>
                      {property.type}
                    </Badge>
                  </div>
                  <div className="text-right">
                    <div className="text-xs text-muted-foreground flex items-center">
                      <Calendar className="w-3 h-3 mr-1" />
                      {property.postedDate}
                    </div>
                  </div>
                </div>

                {/* Title and Location */}
                <h3 className="text-lg font-semibold text-foreground mb-2 line-clamp-2">
                  {property.title}
                </h3>
                <div className="flex items-center text-muted-foreground mb-4">
                  <MapPin className="w-4 h-4 mr-1" />
                  <span className="text-sm">{property.location}</span>
                </div>

                {/* Property Details */}
                <div className="space-y-3 mb-4">
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Area:</span>
                      <div className="font-medium text-foreground">{property.area}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">BUS Grid:</span>
                      <div className="font-mono text-primary text-xs">{property.busGrid}</div>
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div>
                      <span className="text-muted-foreground">Soil Type:</span>
                      <div className="font-medium text-foreground">{property.soilType}</div>
                    </div>
                    <div>
                      <span className="text-muted-foreground">Elevation:</span>
                      <div className="font-medium text-foreground">{property.elevation}</div>
                    </div>
                  </div>
                </div>

                {/* Features */}
                <div className="mb-4">
                  <div className="flex flex-wrap gap-1">
                    {property.features.slice(0, 3).map((feature, idx) => (
                      <Badge key={idx} variant="outline" className="text-xs">
                        {feature}
                      </Badge>
                    ))}
                  </div>
                </div>

                {/* Price */}
                <div className="border-t pt-4 mb-4">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="text-2xl font-bold text-foreground">{property.price}</div>
                      <div className="text-sm text-muted-foreground">{property.pricePerAcre}/acre</div>
                    </div>
                    <div className="flex items-center text-secondary">
                      <TrendingUp className="w-4 h-4 mr-1" />
                      <span className="text-sm font-medium">Fair Price</span>
                    </div>
                  </div>
                </div>

                {/* Actions */}
                <div className="grid grid-cols-2 gap-3">
                  <Button 
                    variant="default" 
                    size="sm" 
                    className="shadow-soft"
                    onClick={() => window.open(`tel:${property.contact}`, '_self')}
                  >
                    <Phone className="w-4 h-4 mr-1" />
                    Call
                  </Button>
                  <Button 
                    variant="outline" 
                    size="sm" 
                    className="shadow-soft"
                    onClick={() => window.open(`https://wa.me/${property.contact.replace(/[^0-9]/g, '')}`, '_blank')}
                  >
                    <MessageSquare className="w-4 h-4 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </div>
            </Card>
          ))}
        </div>

        {/* Load More / Filter Actions */}
        <div className="text-center space-y-4">
          <div className="flex flex-wrap justify-center gap-3 mb-6">
            <Button variant="outline" size="sm">All Properties</Button>
            <Button variant="outline" size="sm">Agricultural</Button>
            <Button variant="outline" size="sm">Residential</Button>
            <Button variant="outline" size="sm">Commercial</Button>
            <Button variant="outline" size="sm">Industrial</Button>
          </div>
          
          <Button variant="secondary" size="lg" className="shadow-medium">
            Load More Properties
          </Button>
        </div>
      </div>
    </section>
  );
};

export default PropertyListings;