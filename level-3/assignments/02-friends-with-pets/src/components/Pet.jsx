function Pet({ pet }) {
  return (
    <div className="pet">
      <h3>
        {pet.name} - <span className="breed">{pet.breed}</span>
      </h3>
    </div>
  );
}

export default Pet;
