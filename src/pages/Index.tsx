import { useState } from "react";
import InteractiveMap from "@/components/InteractiveMap";
import MapHeader from "@/components/MapHeader";
import BUSInfoPanel from "@/components/BUSInfoPanel";

const Index = () => {
  const [showBUSInfo, setShowBUSInfo] = useState(false);

  return (
    <div className="relative h-screen w-full overflow-hidden">
      <MapHeader 
        onToggleInfo={() => setShowBUSInfo(!showBUSInfo)}
        showInfo={showBUSInfo}
      />
      
      <div className="pt-14 h-full">
        <InteractiveMap />
      </div>
      
      <BUSInfoPanel 
        isOpen={showBUSInfo}
        onClose={() => setShowBUSInfo(false)}
      />
    </div>
  );
};

export default Index;
