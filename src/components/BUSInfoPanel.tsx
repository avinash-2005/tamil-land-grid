import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Grid3X3, MapPin, X, TrendingUp, Database, Target } from "lucide-react";

interface BUSInfoPanelProps {
  isOpen: boolean;
  onClose: () => void;
}

const BUSInfoPanel = ({ isOpen, onClose }: BUSInfoPanelProps) => {
  if (!isOpen) return null;

  const busStats = [
    { label: "Total BUS Units", value: "2,080,900", icon: Grid3X3, color: "text-primary" },
    { label: "Coverage Area", value: "130,060 km²", icon: MapPin, color: "text-secondary" },
    { label: "Grid Resolution", value: "250 meters", icon: Target, color: "text-accent" },
    { label: "Districts Mapped", value: "38", icon: Database, color: "text-primary" }
  ];

  return (
    <div className="absolute top-16 left-4 z-40 w-80">
      <Card className="bg-white/95 backdrop-blur-md shadow-xl">
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center">
              <div className="flex items-center justify-center w-8 h-8 bg-primary/10 rounded-lg mr-3">
                <Grid3X3 className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-semibold text-foreground">BUS Grid System</h3>
                <p className="text-xs text-muted-foreground">Basic Unit Square Technology</p>
              </div>
            </div>
            <Button variant="ghost" size="sm" onClick={onClose}>
              <X className="w-4 h-4" />
            </Button>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-2 gap-3 mb-4">
            {busStats.map((stat, index) => (
              <div key={stat.label} className="text-center p-3 bg-muted/30 rounded-lg">
                <stat.icon className={`w-5 h-5 mx-auto mb-1 ${stat.color}`} />
                <div className="text-sm font-bold text-foreground">{stat.value}</div>
                <div className="text-xs text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Description */}
          <div className="mb-4">
            <h4 className="font-medium text-sm mb-2">How It Works</h4>
            <p className="text-xs text-muted-foreground leading-relaxed">
              Each BUS represents approximately 15+ acres of land with 250-meter precision. 
              This systematic grid mapping makes property identification and trading efficient 
              across Tamil Nadu's 130,060 square kilometers.
            </p>
          </div>

          {/* Sample BUS Code */}
          <div className="bg-background rounded-lg p-3 mb-4">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs text-muted-foreground">Sample BUS Code:</span>
              <Badge variant="outline">Live Example</Badge>
            </div>
            <div className="font-mono text-lg font-semibold text-primary">CB-2847-A</div>
            <div className="text-xs text-muted-foreground mt-1">
              CB: Coimbatore • 2847: Grid ID • A: Sub-unit
            </div>
          </div>

          {/* Features */}
          <div className="space-y-2 mb-4">
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 bg-primary rounded-full mr-2"></div>
              <span className="text-muted-foreground">Integrated with FMB systems</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 bg-secondary rounded-full mr-2"></div>
              <span className="text-muted-foreground">PostGIS spatial accuracy</span>
            </div>
            <div className="flex items-center text-xs">
              <div className="w-2 h-2 bg-accent rounded-full mr-2"></div>
              <span className="text-muted-foreground">Real-time property matching</span>
            </div>
          </div>

          {/* CTA */}
          <Button variant="default" size="sm" className="w-full">
            <TrendingUp className="w-4 h-4 mr-2" />
            Explore Properties
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default BUSInfoPanel;