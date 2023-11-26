import Card from "./Card";

let vacationSpots = [
  {
    place: "Meridian, Idaho",
    price: 40,
    timeToGo: "Spring",
  },
  {
    place: "Cancun",
    price: 900,
    timeToGo: "Winter",
  },
  {
    place: "China",
    price: 1200,
    timeToGo: "Fall",
  },
  {
    place: "Russia",
    price: 1100,
    timeToGo: "Summer",
  },
  {
    place: "Lebanon",
    price: 400,
    timeToGo: "Spring",
  },
];

function CardList() {
  const spots = vacationSpots.map((spot) => <Card spot={spot} />);
  return (
    <main className="main">
      <div className="hero">
        <h1>Find your next vacation spot 💁‍♀️</h1>
      </div>
      <div className="spots">{spots}</div>
    </main>
  );
}

export default CardList;
