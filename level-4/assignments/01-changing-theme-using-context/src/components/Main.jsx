import { useContext } from "react";
import { ThemeContext } from "../ThemeContext";

function Main() {
  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <section className={`main ${theme}`}>
      <div className="container">
        <div className="card">Click the button to toggle the theme!</div>
        <div className="container">
          <div>
            <button onClick={toggleTheme} className="btn">
              CLICK ME!
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Main;
