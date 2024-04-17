import React, { useState } from 'react';
import place from '../../types/place';


interface SearchPlacesProps {
  data: place[]; // Tablica miejsc, które będą filtrowane
  onSearchResult: (results: place[]) => void; // Funkcja wywoływana z wynikami wyszukiwania
}

const SearchPlaces: React.FC<SearchPlacesProps> = ({ data, onSearchResult }) => {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filteredData = data.filter(place =>
      place.name.toLowerCase().includes(term) ||
      place.address.toLowerCase().includes(term) ||
      place.type_plece_text.toLowerCase().includes(term)
    );
    onSearchResult(filteredData);
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Wyszukaj miejsce..."
        value={searchTerm}
        onChange={handleSearch}
        className="search-input"
      />
    </div>
  );
};

export default SearchPlaces;
