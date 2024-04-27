import { Link } from "react-router-dom";
import { useState } from "react";
const Menu = () => {
  // dodanie stanów
  const [isActive, setIsActive] = useState(false);
  //dodaj aktywną klasę
  const toggleActiveClass = () => {
    setIsActive(!isActive);
  };
  //funkcja czyszczenia, aby usunąć aktywną klasę
  const removeActive = () => {
    setIsActive(false);}

    return (
      <nav className="nav">
        <ul className={`navMenu ${isActive ? "active" : ""}`}>
          <li className="navLink" id="frist" onClick={removeActive}>
            <Link to="/">Strona główna</Link>
          </li>
          <li className="navLink">
            <Link to="/new">Dodaj nowe miejsce</Link>
          </li>
          <li className="navLink">
            <Link to="/ruchowa"> O projekcie</Link>
          </li>
        </ul>
        <div
          className={`${"hamburger"} ${isActive ? "active" : ""}`}
          onClick={toggleActiveClass}
        >
          <span className={`${"bar"}`}></span>
          <span className={`${"bar"}`}></span>
          <span className={`${"bar"}`}></span>
        </div>
      </nav>
    );
  };

export default Menu;
