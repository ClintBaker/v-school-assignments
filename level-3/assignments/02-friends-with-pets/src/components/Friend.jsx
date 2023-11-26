import Pet from "./Pet";

function Friend({ friend }) {
  const pets = friend.pets.map((pet) => <Pet pet={pet} />);
  return (
    <div className="friend">
      <h1>{friend.name}</h1>
      <p>{friend.age}</p>
      <br />
      <hr />
      <div className="pets">
        <h2>Pets</h2>
        {pets}
      </div>
    </div>
  );
}

export default Friend;
