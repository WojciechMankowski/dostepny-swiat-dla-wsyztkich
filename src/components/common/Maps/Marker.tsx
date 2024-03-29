import { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
} from "@vis.gl/react-google-maps";
import MarkerType from "../../../types/MarkerType";

const Marker = ({ data, position }: MarkerType) => {
  const [infowindowOpen, setInfowindowOpen] = useState(true);
  const [markerRef, marker] = useAdvancedMarkerRef();
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={position}
        key={position.key}
      />
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <p>{data.name  }</p>
          <span>{data.address}</span>
        </InfoWindow>
      )}
    </>
  );
};

export default Marker;
