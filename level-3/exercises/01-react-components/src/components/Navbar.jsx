import imgUrl from "../assets/react.svg";

function Navbar() {
  return (
    <nav className="navbar">
      <img className="nav-image" src={imgUrl} alt="React logo" />
      <h3>React Facts</h3>
      <h4>React Course - Project 1</h4>
    </nav>
  );
}

export default Navbar;
