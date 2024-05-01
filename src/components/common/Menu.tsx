// Menu.tsx
import { useState } from "react";
import { Link } from "react-router-dom";
import SearchPlaces from "../features/searchPlace";
import place from "../../types/place";
import { BsSortUp } from "react-icons/bs";
import { BsSortAlphaDown } from "react-icons/bs";

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
      const filteredData = data.filter(
        (place) =>
          place.name.toLowerCase().includes(term.toLowerCase()) ||
          place.address.toLowerCase().includes(term.toLowerCase()) ||
          place.type_plece_text.toLowerCase().includes(term.toLowerCase())
      );
      setSearchResults(filteredData);
    } else {
      setSearchResults(data);
    }
  };

  const sortingAlphabetically = () => {
    const newData = [...data].sort((a, b) =>
      a.name.localeCompare(b.name, "pl", { sensitivity: "base" })
    );
    setSearchResults(newData);
  };
  const sort_by_rating = () => {
    const newData = [...data].sort((a, b) => {
      const a_rating = a.ratings[0].score;
      const b_rating = b.ratings[0].score;
      return b_rating - a_rating;
    });
    setSearchResults(newData);
  };

  return (
    <nav className="nav">
      <ul className={`navMenu ${isActive ? "active" : ""}`}>
        <li className="navLink" onClick={removeActive}>
          <Link to="/">Strona główna</Link>
        </li>
        <li className="navLink">
          <Link to="/ruchowa">O projekcie</Link>
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
      <div className={`search ${isActive ? "active" : ""}`}>
        <SearchPlaces onSearch={handleSearch} />
        <button onClick={sortingAlphabetically} className="btn btn_abc">
          <BsSortAlphaDown className="icon"/>
        </button>
        <button onClick={sort_by_rating} className="btn brn_rating">
          <BsSortUp className="icon"/>
        </button>
      </div>
    </nav>
  );
};

export default Menu;
