import "./App.css";

function App() {
  const newVar = ["B", "A", "N"];
  return (
    <div>
      <h1>{newVar.map((str) => str.toLowerCase())}</h1>
    </div>
  );
}

export default App;
