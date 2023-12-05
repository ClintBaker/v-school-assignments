function Badge({ badge, color }) {
  return (
    <div className="badge--main--container">
      <div className={`badge--top ${color}`}>
        <h3>Badge: {badge.id}</h3>
      </div>
      <div className="badge--container">
        <div className="badge--input">
          Name: {badge.firstName} {badge.lastName}
        </div>
        <div className="badge--input">Phone: {badge.phone}</div>
        <div className="badge--input">Place of birth: {badge.placeOfBirth}</div>
        <div className="badge--input">Favorite food: {badge.favoriteFood}</div>
        <div className="badge--input">Email: {badge.email}</div>
        <div className="badge--textarea">{badge.tellUsAboutYourself}</div>
      </div>
    </div>
  );
}

export default Badge;
