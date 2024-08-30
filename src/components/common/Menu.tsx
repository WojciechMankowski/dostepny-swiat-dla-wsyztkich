import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import SearchPlaces from "../features/searchPlace";
import { BsSortUp, BsSortAlphaDown } from "react-icons/bs";
import Toggle from "../features/toggle";
import { PropsMenu } from "../../types/Props";

const Menu: React.FC<PropsMenu> = ({ data, setSearchResults }) => {
  const [isActive, setIsActive] = useState(false);
  const [theme, setTheme] = useState(localStorage.getItem("theme") || "light");

  const toggleActiveClass = () => setIsActive(!isActive);
  const removeActive = () => setIsActive(false);

  useEffect(() => {
    setTheme(localStorage.getItem("theme") || "light");
  }, []);

  const handleSearch = (term: string) => {
    // ... (same logic as before)
  };

  const sortAlphabetically = () => {
    const newData = [...data].sort((a, b) =>
      a.name.localeCompare(b.name, "pl", { sensitivity: "base" })
    );
    setSearchResults(newData);
  };

  const sortByRating = () => {
    // const newData = [...data].sort(
    //   (a, b) => {
    //     console.log(a, b)
    //     return b.rating.score - a?.rating?.score || 0
    //   })
  
    // setSearchResults(newData);
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
        <button
          onClick={sortAlphabetically}
          className="btn bg-akcent3 mr-5 ml-5"
          aria-label="Sort alphabetically by name"
        >
          <BsSortAlphaDown className="icon fill-white" size={30} />
        </button>
        <button
          onClick={sortByRating}
          className="btn bg-akcent3"
          aria-label="Sort by rating"
        >
          <BsSortUp className="icon fill-white" size={30} />
        </button>
        <Toggle theme={theme} setTheme={setTheme} />
      </div>
    </nav>
  );
};

export default Menu;
