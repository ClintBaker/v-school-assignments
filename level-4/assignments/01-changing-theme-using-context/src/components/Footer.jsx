import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Footer() {
  const { theme } = useContext(ThemeContext);

  return (
    <footer className={`footer ${theme}`}>
      <div className="container">All Rights Reserved Theme Changer App</div>
    </footer>
  );
}

export default Footer;
