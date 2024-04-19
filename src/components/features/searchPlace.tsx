import React, { useState } from "react";
import place from "../../types/place";

interface SearchPlacesProps {
  data: place[];
  onSearchResult: (results: place[]) => void;
}

const SearchPlaces: React.FC<SearchPlacesProps> = ({
  data,
  onSearchResult,
}) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    if (term !== "") {
      const filteredData = data.filter(
        (place) =>
          place.name.toLowerCase().includes(term) ||
          place.address.toLowerCase().includes(term) ||
          place.type_plece_text.toLowerCase().includes(term) // Assuming the correct property name
      );
      onSearchResult(filteredData);
    } else {
      onSearchResult(data);
      location.reload();
    }
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search for places..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchPlaces;
