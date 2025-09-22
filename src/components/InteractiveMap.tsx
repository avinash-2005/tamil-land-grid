import React, { useEffect, useRef, useState } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { MapPin, Phone, MessageSquare, Home, Filter, Grid3X3, Layers, ZoomIn, ZoomOut } from "lucide-react";

// Set Mapbox access token - in production, this should be from environment variables
mapboxgl.accessToken = 'pk.eyJ1IjoidGFsa2luZ21hcCIsImEiOiJjbHUyenFyOWMwMTdmMmlwdnc4dWNxMjNjIn0.placeholder'; // This is a placeholder

interface Property {
  id: number;
  title: string;
  location: string;
  coordinates: [number, number];
  area: string;
  busGrid: string;
  price: string;
  pricePerAcre: string;
  type: 'Agricultural' | 'Residential' | 'Commercial' | 'Industrial';
  soilType: string;
  elevation: string;
  contact: string;
  features: string[];
  district: string;
}

const InteractiveMap = () => {
  const mapContainer = useRef<HTMLDivElement>(null);
  const map = useRef<mapboxgl.Map | null>(null);
  const [selectedProperty, setSelectedProperty] = useState<Property | null>(null);
  const [selectedDistrict, setSelectedDistrict] = useState<string>('');
  const [mapLoaded, setMapLoaded] = useState(false);
  const [showBUSGrid, setShowBUSGrid] = useState(true);

  // Sample property data with Tamil Nadu coordinates
  const properties: Property[] = [
    {
      id: 1,
      title: "Agricultural Land Near Coimbatore",
      location: "Palladam, Coimbatore",
      coordinates: [77.1025, 11.0168],
      area: "5.2 acres",
      busGrid: "CB-2847-A",
      price: "₹12,50,000",
      pricePerAcre: "₹2,40,385",
      type: "Agricultural",
      soilType: "Red Soil",
      elevation: "420m",
      contact: "+91 98765 43210",
      features: ["Water Access", "Road Connectivity", "Fertile Soil"],
      district: "Coimbatore"
    },
    {
      id: 2,
      title: "Residential Plot in Chennai",
      location: "Tambaram, Chennai",
      coordinates: [80.2707, 13.0827],
      area: "0.8 acres",
      busGrid: "CH-1245-R",
      price: "₹45,00,000",
      pricePerAcre: "₹56,25,000",
      type: "Residential",
      soilType: "Sandy Loam",
      elevation: "15m",
      contact: "+91 87654 32109",
      features: ["Metro Connectivity", "Schools Nearby", "Commercial Zone"],
      district: "Chennai"
    },
    {
      id: 3,
      title: "Industrial Land Salem",
      location: "Yercaud Road, Salem",
      coordinates: [78.1460, 11.6643],
      area: "12.5 acres",
      busGrid: "SL-3567-I",
      price: "₹2,50,00,000",
      pricePerAcre: "₹20,00,000",
      type: "Industrial",
      soilType: "Black Cotton",
      elevation: "280m",
      contact: "+91 76543 21098",
      features: ["Highway Access", "Power Availability", "Large Area"],
      district: "Salem"
    },
    {
      id: 4,
      title: "Farm Land Madurai",
      location: "Usilampatti, Madurai",
      coordinates: [77.7560, 9.9252],
      area: "7.8 acres",
      busGrid: "MD-4891-F",
      price: "₹35,00,000",
      pricePerAcre: "₹4,48,718",
      type: "Agricultural",
      soilType: "Alluvial",
      elevation: "350m",
      contact: "+91 98123 45678",
      features: ["Coconut Plantation", "Bore Well", "Organic Farming"],
      district: "Madurai"
    },
    {
      id: 5,
      title: "Commercial Plot Tiruchirappalli",
      location: "Srirangam, Tiruchirappalli",
      coordinates: [78.6569, 10.7905],
      area: "1.2 acres",
      busGrid: "TC-5678-C",
      price: "₹1,80,00,000",
      pricePerAcre: "₹1,50,00,000",
      type: "Commercial",
      soilType: "Sandy",
      elevation: "78m",
      contact: "+91 91234 56789",
      features: ["Temple Proximity", "Main Road", "High Footfall"],
      district: "Tiruchirappalli"
    }
  ];

  const districts: { name: string; coordinates: [number, number]; zoom: number }[] = [
    { name: "All Districts", coordinates: [78.6569, 11.1271], zoom: 6.5 },
    { name: "Chennai", coordinates: [80.2707, 13.0827], zoom: 10 },
    { name: "Coimbatore", coordinates: [77.1025, 11.0168], zoom: 10 },
    { name: "Madurai", coordinates: [77.7560, 9.9252], zoom: 10 },
    { name: "Tiruchirappalli", coordinates: [78.6569, 10.7905], zoom: 10 },
    { name: "Salem", coordinates: [78.1460, 11.6643], zoom: 10 },
    { name: "Tirunelveli", coordinates: [77.6933, 8.7139], zoom: 10 },
  ];

  // Property type colors
  const getPropertyColor = (type: Property['type']) => {
    switch (type) {
      case 'Agricultural': return '#22c55e'; // Green
      case 'Residential': return '#3b82f6'; // Blue
      case 'Commercial': return '#f59e0b'; // Orange
      case 'Industrial': return '#ef4444'; // Red
      default: return '#6b7280'; // Gray
    }
  };

  useEffect(() => {
    if (!mapContainer.current) return;

    // Initialize the map
    map.current = new mapboxgl.Map({
      container: mapContainer.current,
      style: 'mapbox://styles/mapbox/satellite-streets-v12',
      center: [78.6569, 11.1271], // Tamil Nadu center
      zoom: 6.5,
      pitch: 45,
      bearing: 0
    });

    // Add navigation controls
    map.current.addControl(new mapboxgl.NavigationControl(), 'top-right');

    // Add fullscreen control
    map.current.addControl(new mapboxgl.FullscreenControl(), 'top-right');

    map.current.on('load', () => {
      setMapLoaded(true);
      
      // Add BUS grid layer
      if (map.current) {
        // Add grid source (simplified for demo)
        map.current.addSource('bus-grid', {
          'type': 'geojson',
          'data': {
            'type': 'FeatureCollection',
            'features': []
          }
        });

        // Add grid layer
        map.current.addLayer({
          'id': 'bus-grid-layer',
          'type': 'line',
          'source': 'bus-grid',
          'layout': {},
          'paint': {
            'line-color': '#3b82f6',
            'line-width': 0.5,
            'line-opacity': 0.3
          }
        });

        // Add property markers
        properties.forEach((property) => {
          if (map.current) {
            // Create marker element
            const markerEl = document.createElement('div');
            markerEl.className = 'property-marker';
            markerEl.style.width = '12px';
            markerEl.style.height = '12px';
            markerEl.style.borderRadius = '50%';
            markerEl.style.backgroundColor = getPropertyColor(property.type);
            markerEl.style.border = '2px solid white';
            markerEl.style.cursor = 'pointer';
            markerEl.style.boxShadow = '0 2px 4px rgba(0,0,0,0.3)';

            // Add click event
            markerEl.addEventListener('click', () => {
              setSelectedProperty(property);
            });

            // Create marker
            new mapboxgl.Marker(markerEl)
              .setLngLat(property.coordinates)
              .addTo(map.current);
          }
        });
      }
    });

    return () => {
      map.current?.remove();
    };
  }, []);

  // Filter properties by district
  const filteredProperties = selectedDistrict && selectedDistrict !== 'All Districts' 
    ? properties.filter(p => p.district === selectedDistrict)
    : properties;

  // Handle district selection
  const handleDistrictSelect = (district: { name: string; coordinates: [number, number]; zoom: number }) => {
    setSelectedDistrict(district.name);
    if (map.current) {
      map.current.flyTo({
        center: district.coordinates,
        zoom: district.zoom,
        duration: 2000
      });
    }
  };

  return (
    <div className="relative h-screen w-full">
      {/* Map Container */}
      <div ref={mapContainer} className="absolute inset-0" />

      {/* Top Controls */}
      <div className="absolute top-4 left-4 z-10 space-y-3">
        {/* District Selector */}
        <Card className="p-4 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="flex items-center mb-3">
            <MapPin className="w-4 h-4 mr-2 text-primary" />
            <span className="font-semibold text-sm">Select District</span>
          </div>
          <div className="grid grid-cols-2 gap-2">
            {districts.map((district) => (
              <Button
                key={district.name}
                variant={selectedDistrict === district.name ? "default" : "outline"}
                size="sm"
                className="text-xs"
                onClick={() => handleDistrictSelect(district)}
              >
                {district.name}
              </Button>
            ))}
          </div>
        </Card>

        {/* BUS Grid Toggle */}
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <Grid3X3 className="w-4 h-4 mr-2 text-primary" />
              <span className="text-sm font-medium">BUS Grid</span>
            </div>
            <Button
              variant={showBUSGrid ? "default" : "outline"}
              size="sm"
              onClick={() => setShowBUSGrid(!showBUSGrid)}
            >
              <Layers className="w-4 h-4" />
            </Button>
          </div>
        </Card>

        {/* Property Legend */}
        <Card className="p-3 bg-white/95 backdrop-blur-sm shadow-lg">
          <div className="flex items-center mb-2">
            <Home className="w-4 h-4 mr-2 text-primary" />
            <span className="text-sm font-semibold">Property Types</span>
          </div>
          <div className="space-y-1">
            {['Agricultural', 'Residential', 'Commercial', 'Industrial'].map((type) => (
              <div key={type} className="flex items-center text-xs">
                <div 
                  className="w-3 h-3 rounded-full mr-2 border border-white"
                  style={{ backgroundColor: getPropertyColor(type as Property['type']) }}
                ></div>
                <span>{type}</span>
              </div>
            ))}
          </div>
        </Card>
      </div>

      {/* Property List Sidebar */}
      <div className="absolute top-4 right-4 bottom-4 w-80 z-10">
        <Card className="h-full bg-white/95 backdrop-blur-sm shadow-lg flex flex-col">
          <div className="p-4 border-b">
            <div className="flex items-center justify-between">
              <h3 className="font-semibold flex items-center">
                <Filter className="w-4 h-4 mr-2 text-primary" />
                Properties ({filteredProperties.length})
              </h3>
              <Badge variant="outline">{selectedDistrict || 'All Districts'}</Badge>
            </div>
          </div>
          
          <div className="flex-1 overflow-y-auto p-4 space-y-3">
            {filteredProperties.map((property) => (
              <Card 
                key={property.id}
                className={`p-4 cursor-pointer transition-all duration-200 hover:shadow-md ${
                  selectedProperty?.id === property.id ? 'ring-2 ring-primary' : ''
                }`}
                onClick={() => {
                  setSelectedProperty(property);
                  if (map.current) {
                    map.current.flyTo({
                      center: property.coordinates,
                      zoom: 14,
                      duration: 1500
                    });
                  }
                }}
              >
                <div className="flex items-start justify-between mb-2">
                  <Badge 
                    style={{ backgroundColor: getPropertyColor(property.type) }}
                    className="text-white text-xs"
                  >
                    {property.type}
                  </Badge>
                  <span className="text-xs text-muted-foreground">{property.busGrid}</span>
                </div>
                
                <h4 className="font-medium text-sm mb-1 line-clamp-2">{property.title}</h4>
                <p className="text-xs text-muted-foreground mb-2">{property.location}</p>
                
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-primary">{property.price}</span>
                  <span className="text-xs text-muted-foreground">{property.area}</span>
                </div>
                
                <div className="flex space-x-2">
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`tel:${property.contact}`, '_self');
                    }}
                  >
                    <Phone className="w-3 h-3 mr-1" />
                    Call
                  </Button>
                  <Button 
                    size="sm" 
                    variant="outline" 
                    className="flex-1 text-xs"
                    onClick={(e) => {
                      e.stopPropagation();
                      window.open(`https://wa.me/${property.contact.replace(/[^0-9]/g, '')}`, '_blank');
                    }}
                  >
                    <MessageSquare className="w-3 h-3 mr-1" />
                    WhatsApp
                  </Button>
                </div>
              </Card>
            ))}
          </div>
        </Card>
      </div>

      {/* Property Details Popup */}
      {selectedProperty && (
        <div className="absolute bottom-4 left-4 z-20">
          <Card className="p-6 bg-white shadow-xl max-w-sm">
            <div className="flex items-start justify-between mb-4">
              <Badge 
                style={{ backgroundColor: getPropertyColor(selectedProperty.type) }}
                className="text-white"
              >
                {selectedProperty.type}
              </Badge>
              <Button
                variant="ghost"
                size="sm"
                onClick={() => setSelectedProperty(null)}
              >
                ×
              </Button>
            </div>
            
            <h3 className="font-semibold mb-2">{selectedProperty.title}</h3>
            <p className="text-sm text-muted-foreground mb-4">{selectedProperty.location}</p>
            
            <div className="grid grid-cols-2 gap-4 mb-4 text-sm">
              <div>
                <span className="text-muted-foreground">Area:</span>
                <div className="font-medium">{selectedProperty.area}</div>
              </div>
              <div>
                <span className="text-muted-foreground">BUS Grid:</span>
                <div className="font-mono text-xs text-primary">{selectedProperty.busGrid}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Soil:</span>
                <div className="font-medium">{selectedProperty.soilType}</div>
              </div>
              <div>
                <span className="text-muted-foreground">Elevation:</span>
                <div className="font-medium">{selectedProperty.elevation}</div>
              </div>
            </div>
            
            <div className="mb-4">
              <div className="text-2xl font-bold text-primary">{selectedProperty.price}</div>
              <div className="text-sm text-muted-foreground">{selectedProperty.pricePerAcre}/acre</div>
            </div>
            
            <div className="flex space-x-2">
              <Button 
                className="flex-1"
                onClick={() => window.open(`tel:${selectedProperty.contact}`, '_self')}
              >
                <Phone className="w-4 h-4 mr-2" />
                Call Now
              </Button>
              <Button 
                variant="outline" 
                className="flex-1"
                onClick={() => window.open(`https://wa.me/${selectedProperty.contact.replace(/[^0-9]/g, '')}`, '_blank')}
              >
                <MessageSquare className="w-4 h-4 mr-2" />
                WhatsApp
              </Button>
            </div>
          </Card>
        </div>
      )}

      {/* Loading State */}
      {!mapLoaded && (
        <div className="absolute inset-0 bg-background flex items-center justify-center z-30">
          <div className="text-center">
            <div className="animate-spin w-8 h-8 border-4 border-primary border-t-transparent rounded-full mx-auto mb-4"></div>
            <p className="text-muted-foreground">Loading Tamil Nadu Map...</p>
          </div>
        </div>
      )}
    </div>
  );
};

export default InteractiveMap;