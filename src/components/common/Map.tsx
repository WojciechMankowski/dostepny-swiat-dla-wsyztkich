import React, { useEffect, useState } from "react";
import { APIProvider, Map, InfoWindow, AdvancedMarker } 
from "@vis.gl/react-google-maps";
import fetchCoordinates from "../../helps/get_corordinates";

interface MapsProps {
  addresses: string[];
}

interface Coor {
  lat: number;
  lng: number;
}

const Maps: React.FC<MapsProps> = ({ addresses }) => {
  const [markers, setMarkers] = useState<Coor[]>([]);
  const [selectedMarker, setSelectedMarker] = useState<Coor | null>(null);

  useEffect(() => {
    const getCoordinates = async () => {
      const coordinates: Coor[] = await fetchCoordinates(addresses);
      setMarkers(coordinates);
    };

    getCoordinates();
  }, [addresses]);

  const handleMarkerClick = (marker: Coor) => {
    setSelectedMarker(marker);
  };

  return (
    <APIProvider apiKey='AIzaSyBYDgXMcNfyI1pMmz7dN0228-yGIL9lp8c'>
      <div className="map">
        <Map
          style={{ width: "100%", height: "400px" }}
          defaultZoom={10}
          defaultCenter={{ lat: 54.35,  lng:  18.6333 }}
          gestureHandling="greedy"
          disableDefaultUI
        >
          {markers.map((marker, index) => (
            <AdvancedMarker
              key={index}
              position={{ lat: marker.lat, lng: marker.lng }}
              onClick={() => handleMarkerClick(marker)}
            />
          ))}
          {selectedMarker && (
            <InfoWindow
              position={{ lat: selectedMarker.lat, lng: selectedMarker.lng }}
              onCloseClick={() => setSelectedMarker(null)}
            >
              <div>
                <h2>Informacja</h2>
                <p>Miejsce o współrzędnych: {selectedMarker.lat}, {selectedMarker.lng}</p>
              </div>
            </InfoWindow>
          )}
        </Map>
      </div>
    </APIProvider>
  );
};

export default Maps;
