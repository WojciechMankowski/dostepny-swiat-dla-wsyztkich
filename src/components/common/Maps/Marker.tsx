import { useState } from "react";
import {
  AdvancedMarker,
  InfoWindow,
  useAdvancedMarkerRef,Pin
} from "@vis.gl/react-google-maps";
import MarkerType from "../../../types/MarkerType";

const Marker = ({ data, position }: MarkerType) => {
  const [infowindowOpen, setInfowindowOpen] = useState(false);
  const [markerRef, marker] = useAdvancedMarkerRef();
  const type_place = data.type_plece_text
  let mainColor, accentColor


  if (type_place === 'Urząd') {
    mainColor = '#23c7d9'; 
    accentColor = '#f27127'; 

  } else if (type_place === 'Pub') {
    mainColor = '#917C78'; 
    accentColor = '#e7c500'; 
  } else if (type_place === 'Restauracja') {
    mainColor = '#F1FEC6'; 
    accentColor = '#23c7d9'; 
  } else if (type_place === 'Muzeum') {
    mainColor = '#264653'; 
    accentColor = '#086788'; 
  } else if (type_place === "Miejsce związane z kulturą") {
    mainColor = '#B49FCC'; 
    accentColor = '#f27127'; 
  } else if (type_place === 'Kawiarnia') {
    mainColor = '#3F784C'; 
    accentColor = '#086788'; 
  } else {
    mainColor = 'undefined';
    accentColor = 'undefined';
  }
  accentColor="#FFFDFD"
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
      >
      </Pin></AdvancedMarker>
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
