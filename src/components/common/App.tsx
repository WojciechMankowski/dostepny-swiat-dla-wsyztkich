import PlacesView from "./places";
import Maps from "./Map";
import SearchPlaces from "../features/searchPlace";
import { useState, useEffect } from "react";
import { AppProps } from "../../types/Props";
import place from "../../types/place";
import '../../assets/css/main.css'
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
  const handleSearch = (term: string) => {
    if (term !== "") {
      const filteredData = data.filter((place) => 
        place.name.toLowerCase().includes(term.toLowerCase()) ||
        place.address.toLowerCase().includes(term.toLowerCase()) ||
        place.type_plece_text.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults(data);
    }
  };
  return (
    <main className="main-content">
     <section>
     <SearchPlaces 
     onSearch={handleSearch}/>
      <Maps data={searchResults} />
     </section>

      <section>{dataComponents}</section>
    </main>
  );
};

export default App;
