import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Nav() {
  const { theme } = useContext(ThemeContext);

  return (
    <nav className={`nav ${theme}`}>
      <h1>Theme change app</h1>
      <p>Current theme: {theme}</p>
    </nav>
  );
}

export default Nav;
