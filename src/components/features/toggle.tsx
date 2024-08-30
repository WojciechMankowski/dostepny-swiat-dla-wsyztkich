import { PropsToggle } from "../../types/Props";

const Toggle: React.FC<PropsToggle> = ({ theme, setTheme }) => {

  const change_mode = () => {
    if (theme === "dark") {
      document.getElementById("root")?.classList.remove("dark");
      document.getElementById("root")?.classList.add("light");
      localStorage.setItem('theme', "light")
      setTheme("light");
    } else {
      document.getElementById("root")?.classList.remove("light");
      document.getElementById("root")?.classList.add("dark");
      setTheme("dark");
      localStorage.setItem('theme', "dark")
    }
    
  };

  return (
    <button
      aria-label="Przełącznik trybu nocnego"
      className="toggle btn"
      onClick={change_mode}
    >
      <span></span>
      <div className="toggle icon"></div>
    </button>
  );
};

export default Toggle;

