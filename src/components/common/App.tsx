import "../../assets/css/main.css";
import "bootstrap/dist/css/bootstrap.css";
import PlacesView from "./places";
import Maps from "./Map";
import SearchPlaces from "../features/searchPlace";
import { useState, useEffect } from "react";
import { AppProps } from "../../types/Props";
import place from "../../types/place";

const App: React.FC<AppProps> = ({ data }) => {
  const [filteredData, setFilteredData] = useState<place[]>(data);

  useEffect(() => {
    setFilteredData(data);
  }, [data]);

  const handleSearchResult = (results: place[]) => {
    setFilteredData(results);
  };
  console.log(filteredData)
  const dataComponents = filteredData.map((place) => (
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
      <SearchPlaces data={filteredData} onSearchResult={handleSearchResult} />
      <Maps data={filteredData} />
      <section>{dataComponents}</section>
    </main>
  );
};

export default App;
