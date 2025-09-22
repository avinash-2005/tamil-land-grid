import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, MapPin, Ruler, Database, Target, Zap } from "lucide-react";

const BUSSystem = () => {
  const busFeatures = [
    {
      icon: Grid3X3,
      title: "Systematic Grid Mapping",
      description: "Each BUS represents approximately 15+ acres with precise 250-meter resolution for accurate land identification.",
      stats: "2.1M+ Grid Cells"
    },
    {
      icon: MapPin,
      title: "Geographic Precision",
      description: "Integrated with Tamil Nadu's Field Measurement Book (FMB) systems for official revenue department compatibility.",
      stats: "250m Resolution"
    },
    {
      icon: Database,
      title: "Comprehensive Coverage",
      description: "Complete mapping of Tamil Nadu's 130,060 square kilometers across all 38 districts with spatial indexing.",
      stats: "130,060 Sq Km"
    },
    {
      icon: Target,
      title: "Location Accuracy",
      description: "PostGIS-powered spatial queries ensure precise property location matching and boundary identification.",
      stats: "99.9% Accuracy"
    }
  ];

  const busStats = [
    { label: "Total BUS Units", value: "2,080,900", icon: Grid3X3 },
    { label: "Coverage Area", value: "130,060 km²", icon: MapPin },
    { label: "Grid Resolution", value: "250 meters", icon: Ruler },
    { label: "Districts Mapped", value: "38", icon: Database }
  ];

  return (
    <section id="about" className="py-16 bg-muted/20">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 animate-fade-in-up">
          <div className="inline-flex items-center px-4 py-2 bg-accent/10 rounded-full text-accent font-medium mb-4">
            <Grid3X3 className="w-4 h-4 mr-2" />
            BUS Technology
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Basic Unit Square (BUS) System
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Revolutionary mapping technology that divides Tamil Nadu into systematic grid units, 
            making land identification and trading more efficient than ever before.
          </p>
        </div>

        {/* BUS Stats Grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-12">
          {busStats.map((stat, index) => (
            <Card 
              key={stat.label}
              className="p-6 text-center shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1 animate-scale-in"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg mx-auto mb-3">
                <stat.icon className="w-6 h-6 text-primary" />
              </div>
              <div className="text-2xl font-bold text-foreground mb-1">{stat.value}</div>
              <div className="text-sm text-muted-foreground">{stat.label}</div>
            </Card>
          ))}
        </div>

        {/* Main Content Grid */}
        <div className="grid lg:grid-cols-2 gap-12 items-center mb-12">
          {/* Left - Visual Representation */}
          <div className="animate-fade-in-up">
            <Card className="p-8 shadow-medium bg-card-gradient">
              <h3 className="text-xl font-semibold text-foreground mb-6 flex items-center">
                <Grid3X3 className="w-5 h-5 mr-2 text-primary" />
                BUS Grid Visualization
              </h3>
              
              {/* Grid Simulation */}
              <div className="relative bg-muted rounded-xl p-6 mb-6">
                <div className="grid grid-cols-8 gap-1 mb-4">
                  {Array.from({ length: 64 }, (_, i) => (
                    <div 
                      key={i}
                      className={`aspect-square rounded-sm ${
                        [5, 12, 18, 25, 31, 38, 45, 52].includes(i) 
                          ? 'bg-primary shadow-glow' 
                          : [8, 15, 22, 29, 36, 43, 50, 57].includes(i)
                          ? 'bg-secondary'
                          : [3, 10, 17, 24, 30, 37, 44, 51].includes(i)
                          ? 'bg-accent'
                          : 'bg-muted-foreground/20'
                      }`}
                    ></div>
                  ))}
                </div>
                
                <div className="space-y-2 text-sm">
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-primary rounded-sm mr-2"></div>
                    <span className="text-muted-foreground">Available Properties</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-secondary rounded-sm mr-2"></div>
                    <span className="text-muted-foreground">Agricultural Land</span>
                  </div>
                  <div className="flex items-center">
                    <div className="w-3 h-3 bg-accent rounded-sm mr-2"></div>
                    <span className="text-muted-foreground">Commercial Zones</span>
                  </div>
                </div>
              </div>

              {/* Sample BUS Code */}
              <div className="bg-background rounded-lg p-4 border">
                <div className="text-sm text-muted-foreground mb-2">Sample BUS Grid Code:</div>
                <div className="font-mono text-lg font-semibold text-primary">CB-2847-A</div>
                <div className="text-xs text-muted-foreground mt-2">
                  CB: Coimbatore District | 2847: Grid Number | A: Sub-unit
                </div>
              </div>
            </Card>
          </div>

          {/* Right - Features List */}
          <div className="space-y-6 animate-slide-in-right">
            {busFeatures.map((feature, index) => (
              <Card 
                key={feature.title}
                className="p-6 shadow-soft hover:shadow-medium transition-all duration-300 hover:-translate-y-1"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <div className="flex items-start space-x-4">
                  <div className="flex items-center justify-center w-12 h-12 bg-primary/10 rounded-lg shrink-0">
                    <feature.icon className="w-6 h-6 text-primary" />
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <h4 className="text-lg font-semibold text-foreground">{feature.title}</h4>
                      <Badge variant="outline" className="text-xs">{feature.stats}</Badge>
                    </div>
                    <p className="text-muted-foreground">{feature.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>

        {/* How It Works Section */}
        <Card className="p-8 shadow-medium bg-card-gradient">
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold text-foreground mb-4">How BUS System Works</h3>
            <p className="text-muted-foreground max-w-2xl mx-auto">
              Our innovative approach to land mapping makes property discovery and verification seamless
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-primary rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-primary-foreground">1</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Grid Division</h4>
              <p className="text-sm text-muted-foreground">
                Tamil Nadu is systematically divided into 2.1M+ grid cells, each representing ~15 acres
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-secondary rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-secondary-foreground">2</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Property Mapping</h4>
              <p className="text-sm text-muted-foreground">
                Each property is mapped to specific BUS codes with 250m precision using PostGIS technology
              </p>
            </div>

            <div className="text-center">
              <div className="flex items-center justify-center w-16 h-16 bg-accent rounded-full mx-auto mb-4">
                <span className="text-2xl font-bold text-accent-foreground">3</span>
              </div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Easy Discovery</h4>
              <p className="text-sm text-muted-foreground">
                Buyers and sellers can easily locate and verify properties using standardized grid references
              </p>
            </div>
          </div>

          <div className="text-center mt-8">
            <Button variant="default" size="lg" className="shadow-medium">
              <Zap className="w-5 h-5 mr-2" />
              Explore BUS Technology
            </Button>
          </div>
        </Card>
      </div>
    </section>
  );
};

export default BUSSystem;