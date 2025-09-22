import { Button } from "@/components/ui/button";
import { MapPin, Grid, Search, TrendingUp } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-[80vh] flex items-center overflow-hidden">
      {/* Background with gradient overlay */}
      <div className="absolute inset-0 hero-gradient"></div>
      <div className="absolute inset-0 bg-black/10"></div>
      
      {/* Grid pattern overlay */}
      <div className="absolute inset-0 opacity-10">
        <div 
          className="w-full h-full"
          style={{
            backgroundImage: `
              linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)
            `,
            backgroundSize: '50px 50px'
          }}
        ></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div className="text-white space-y-6 animate-fade-in-up">
            <div className="inline-flex items-center px-4 py-2 bg-white/20 backdrop-blur-sm rounded-full text-sm font-medium">
              <Grid className="w-4 h-4 mr-2" />
              2.1M+ Grid Cells Mapped
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold leading-tight">
              Discover Land
              <span className="block text-accent">Through Maps</span>
            </h1>
            
            <p className="text-xl text-white/90 leading-relaxed max-w-xl">
              Revolutionary real estate mapping platform for Tamil Nadu. Navigate 130,060 sq km 
              through our innovative Basic Unit Square (BUS) system with 250m precision.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="secondary" className="shadow-medium hover:shadow-strong transition-bounce">
                <Search className="w-5 h-5 mr-2" />
                Explore Properties
              </Button>
              <Button size="lg" variant="outline" className="border-white/30 text-white hover:bg-white/10 shadow-medium">
                <MapPin className="w-5 h-5 mr-2" />
                View Districts
              </Button>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-3 gap-6 pt-8 border-t border-white/20">
              <div className="text-center">
                <div className="text-2xl font-bold">38</div>
                <div className="text-white/80 text-sm">Districts</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">2.1M+</div>
                <div className="text-white/80 text-sm">Grid Cells</div>
              </div>
              <div className="text-center">
                <div className="text-2xl font-bold">250m</div>
                <div className="text-white/80 text-sm">Resolution</div>
              </div>
            </div>
          </div>

          {/* Right Content - Map Visualization */}
          <div className="relative animate-slide-in-right">
            <div className="bg-white/10 backdrop-blur-md rounded-2xl p-8 shadow-strong">
              <div className="bg-card rounded-xl p-6 shadow-medium">
                <div className="flex items-center justify-between mb-4">
                  <h3 className="text-lg font-semibold text-foreground">Live Property Map</h3>
                  <div className="flex items-center text-secondary">
                    <TrendingUp className="w-4 h-4 mr-1" />
                    <span className="text-sm font-medium">99.9% Uptime</span>
                  </div>
                </div>
                
                {/* Map placeholder with grid overlay */}
                <div className="relative h-64 bg-muted rounded-lg overflow-hidden">
                  <div className="absolute inset-0 map-overlay"></div>
                  <div 
                    className="w-full h-full opacity-20"
                    style={{
                      backgroundImage: `
                        linear-gradient(hsl(var(--primary)) 1px, transparent 1px),
                        linear-gradient(90deg, hsl(var(--primary)) 1px, transparent 1px)
                      `,
                      backgroundSize: '20px 20px'
                    }}
                  ></div>
                  
                  {/* Sample property markers */}
                  <div className="absolute top-1/4 left-1/3 w-3 h-3 bg-accent rounded-full shadow-glow animate-pulse"></div>
                  <div className="absolute top-1/2 right-1/4 w-3 h-3 bg-secondary rounded-full shadow-glow animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                  <div className="absolute bottom-1/3 left-1/2 w-3 h-3 bg-primary rounded-full shadow-glow animate-pulse" style={{ animationDelay: '1s' }}></div>
                  
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="text-center text-muted-foreground">
                      <MapPin className="w-8 h-8 mx-auto mb-2" />
                      <p className="text-sm">Interactive Map Loading...</p>
                    </div>
                  </div>
                </div>
                
                <div className="mt-4 text-center">
                  <p className="text-sm text-muted-foreground">
                    Powered by MapLibre GL JS & PostGIS
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;