function Card({ spot }) {
  return (
    <div className={`card ${spot.timeToGo.toLowerCase()}`}>
      <h1>{spot.place}</h1>
      <h3>Price: ${spot.price}</h3>
      <h5>Time of year: {spot.timeToGo}</h5>
    </div>
  );
}

export default Card;
