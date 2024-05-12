import { useState } from "react";
import { Link } from "react-router-dom";
import SearchPlaces from "../features/searchPlace";
import place from "../../types/place";
import { BsSortUp, BsSortAlphaDown } from "react-icons/bs";

type PropsMenu = {
  data: place[];
  setSearchResults: (results: place[]) => void;
};

const Menu: React.FC<PropsMenu> = ({ data, setSearchResults }) => {
  const [isActive, setIsActive] = useState(false);

  const toggleActiveClass = () => setIsActive(!isActive);
  const removeActive = () => setIsActive(false);

  const handleSearch = (term: string) => {
    if (term !== "") {
      const filteredData = data.filter((place) =>
        place.name.toLowerCase().includes(term.toLowerCase()) ||
        place.address.toLowerCase().includes(term.toLowerCase()) ||
        place.optionchoices.choice_text.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults(data);
    }
  };

  const sortAlphabetically = () => {
    const newData = [...data].sort((a, b) =>
      a.name.localeCompare(b.name, "pl", { sensitivity: "base" })
    );
    setSearchResults(newData);
  };

  const sortByRating = () => {
    const newData = [...data].sort((a, b) => b.rating[0].score - a.rating[0].score);
    setSearchResults(newData);
  };

  return (
    <nav className="bg-akcent2 h-20 pl-5 flex justify-between items-center">
      <ul className={`flex space-x-4 ${isActive ? "active" : ""} navMenu`}>
        <li onClick={removeActive}>
          <Link to="/">Strona główna</Link>
        </li>
        <li>
          <Link to="/o_projekcie">O projekcie</Link>
        </li>
      </ul>
      <div
        className={`hamburger ${isActive ? "active" : ""}`}
        onClick={toggleActiveClass}
      >
        <span className="bar"></span>
        <span className="bar"></span>
        <span className="bar"></span>
      </div>
      <div className={`search flex p-10 ${isActive ? "active" : ""}`}>
        <SearchPlaces onSearch={handleSearch} />
        <button onClick={sortAlphabetically} className="
        btn bg-akcent3 mr-5 ml-5" aria-label="Sort alphabetically">
          <BsSortAlphaDown className="icon fill-white" size={30} />
        </button>
        <button onClick={sortByRating} className="btn bg-akcent3" aria-label="Sort by rating">
          <BsSortUp className="icon  fill-white" size={30} />
        </button>
      </div>
    </nav>
  );
};

export default Menu;
