import React, { useState } from "react";
import { BiSearch } from "react-icons/bi";

interface SearchPlacesProps {
  onSearch: Function;
}

const SearchPlaces: React.FC<SearchPlacesProps> = ({ onSearch }) => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  return (
    <div className="search-container">
      <BiSearch className="icon_search" size={"30px"} color="white" />
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => {
          onSearch(e.target.value);
          setSearchTerm(e.target.value);
        }}
        placeholder="Wyszukuj miejsca "
        className="search-input"
      />
    </div>
  );
};

export default SearchPlaces;
