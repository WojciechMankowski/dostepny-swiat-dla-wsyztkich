import PlacesView from "./places";
import Maps from "./Map";
import { useState, useEffect } from "react";
import { AppProps } from "../../types/Props";
import place from "../../types/place";
import "../../assets/css/main.css";

const App: React.FC<AppProps> = ({ data }) => {
  const [searchResults, setSearchResults] = useState<place[]>(data);

  useEffect(() => {
    setSearchResults(data);
  }, [data]);

  const dataComponents = searchResults.map((place) => (
    <PlacesView
      key={place.id}
      id={place.id}
      name={place.name}
      address={place.address}
      url_image={place.url_image}
      url_map_google={place.url_map_google}
      type_place={place.type_place}
      type_plece_text={place.type_plece_text}
      ratings={place.ratings}
      url=""
    />
  ));

  return (
    <main className="main-content">
      <div className="map">
      <Maps data={searchResults} />
      </div>

      <section>{dataComponents}</section>
    </main>
  );
};

export default App;
