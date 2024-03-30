import { useEffect, useState } from "react";
import { APIProvider, Map as GoogleMap } from "@vis.gl/react-google-maps";
import fetchCoordinates from "../../helps/get_corordinates";
import { PropsMap } from "../../types/Props";
import Coordinates from "../../types/Coordinates";
import Marker from "./Maps/Marker";

const CustomMap = ({ data }: PropsMap) => {
  const [markers, setMarkers] = useState<
    { lat: number; lng: number; key: number }[]
  >([]);

  useEffect(() => {
    const getCoordinates = async () => {
      const promises = data.map(async (place) => {
        const coor: Coordinates = await fetchCoordinates(place.address);
        return { lat: coor.lat, lng: coor.lng, key: Number(place.id) };
      });
      const coordinates = await Promise.all(promises);
      setMarkers(coordinates);
    };

    getCoordinates();
  }, [data]);

  const markerComponents = markers.map((marker, index) => {
    return <Marker data={data[index]} position={marker} />;
  });

  const defaultCenter = { lat: 54.44382540483505, lng: 18.559246442328536 };

  return (
    <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
      <div className="map">
        <GoogleMap
          defaultZoom={12}
          defaultCenter={defaultCenter}
          // defaultZoom={12}
          mapId={"bf51a910020fa25a"}
          gestureHandling="greedy"
          // disableDefaultUI
        >
          {markerComponents}
        </GoogleMap>
      </div>
    </APIProvider>
  );
};

export default CustomMap;
