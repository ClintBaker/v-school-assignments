import { useState } from "react";
import Nav from "./components/Nav";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { ThemeContextProvider } from "./ThemeContext";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <ThemeContextProvider>
        <Nav />
        <Main />
        <Footer />
      </ThemeContextProvider>
    </>
  );
}

export default App;
