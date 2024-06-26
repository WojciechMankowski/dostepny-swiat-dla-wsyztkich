import { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,
  Pin,
} from "@vis.gl/react-google-maps";
import MarkerType from "../../types/MarkerType";



// Define color constants for reuse
// const colors = {
//   urzad: { main: "#23c7d9", accent: "#f27127" },
//   pub: { main: "#917C78", accent: "#e7c500" },
//   restauracja: { main: "#F1FEC6", accent: "#23c7d9" },
//   muzeum: { main: "#264653", accent: "#086788" },
//   miejsceKultura: { main: "#B49FCC", accent: "#f27127" },
//   kawiarnia: { main: "#3F784C", accent: "#086788" },
//   default: { main: undefined, accent: undefined },
// };

const Marker = ({ data, position }: MarkerType) => {
  if (!data) {
    console.error("Data is undefined");
    return null; // or some fallback UI
  }

  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  // const typePlace = data.optionchoices || "default"; 

  let mainColor, accentColor;
  // const colorScheme = data.optionchoices
  return (
    <>
      <AdvancedMarker
        ref={markerRef}
        onClick={() => setInfowindowOpen(true)}
        position={position}
        key={position.key}
      >
        <Pin
          background={mainColor}
          borderColor={mainColor}
          glyphColor={accentColor}
        ></Pin>
      </AdvancedMarker>
      {infowindowOpen && (
        <InfoWindow
          anchor={marker}
          maxWidth={200}
          onCloseClick={() => setInfowindowOpen(false)}
        >
          <p>{data.name}</p>
          <span>{data.address}</span>
        </InfoWindow>
      )}
    </>
  );
};

export default Marker;
