import { useState, useEffect } from "react";
import Badge from "./components/Badge";

function App() {
  // create formData state
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    placeOfBirth: "",
    phone: "",
    favoriteFood: "",
    tellUsAboutYourself: "",
  });

  // create button state
  const [btnIsDisabled, setBtnIsDisabled] = useState(true);

  // create badges state
  const [badges, setBadges] = useState([]);

  // handle submit button disabled / enabled effect after formData is updated
  useEffect(() => {
    // create a disabled variable that will only change if an input is less than 3
    let disabled = false;
    // get keys of formData
    const formKeys = Object.keys(formData);
    // map over the keys and check each one to see if it's less than three
    formKeys.forEach((key) => {
      if (formData[key].length < 1) {
        // if the key of formData is less than three we set disabled to true
        disabled = true;
      }
    });

    // set the disabled variable
    setBtnIsDisabled(disabled);
  }, [formData, btnIsDisabled]);

  function handleChange(e) {
    // create vars
    const { value, type, name } = e.target;

    // validate that phone is only numbers if the type is tel
    if (type === "tel") {
      // If Number of value is not true (aka NaN) then alert a message and return (we don't update with bad data)
      if (!Number(value)) {
        alert(
          "Please make sure to only enter numbers for phone, no dashes or other characters."
        );
        return;
      }
    }
    // set form data with new input
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  }

  function handleSubmit(e) {
    // prevent default
    e.preventDefault();

    // validate that tellUsAboutYourself is longer than 3 as it wasn't working with the minLength prop
    if (formData.tellUsAboutYourself.length < 3) {
      alert("Make sure Tell us about yourself is longer than 3");
      return;
    }

    // create new badge
    setBadges((prevBadges) => [
      ...prevBadges,
      {
        id:
          prevBadges.length > 0 ? prevBadges[prevBadges.length - 1].id + 1 : 1,
        firstName: formData.firstName,
        lastName: formData.lastName,
        email: formData.email,
        placeOfBirth: formData.placeOfBirth,
        phone: formData.phone,
        favoriteFood: formData.favoriteFood,
        tellUsAboutYourself: formData.tellUsAboutYourself,
      },
    ]);

    // reset inputs
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      placeOfBirth: "",
      phone: "",
      favoriteFood: "",
      tellUsAboutYourself: "",
    });
  }

  // map over badges state array and create a Badge component for each badge
  // color is dependant on the id, which will allow us to alternate colors
  const renderedBadges = badges.map((badge) => (
    <Badge
      key={badge.id}
      badge={badge}
      color={badge.id % 2 === 0 ? "blue" : "red"}
    />
  ));

  return (
    <>
      <div className="container">
        <div className="form--container">
          <form className="form" onSubmit={handleSubmit}>
            <input
              className="input"
              placeholder="First Name"
              type="text"
              value={formData.firstName}
              name="firstName"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <input
              className="input"
              placeholder="Last Name"
              type="text"
              value={formData.lastName}
              name="lastName"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <input
              className="input"
              placeholder="Email"
              type="email"
              value={formData.email}
              name="email"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <input
              className="input"
              placeholder="Place of Birth"
              type="text"
              value={formData.placeOfBirth}
              name="placeOfBirth"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <input
              className="input"
              placeholder="Phone"
              type="tel"
              value={formData.phone}
              name="phone"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <input
              className="input"
              placeholder="Favorite Food"
              type="text"
              value={formData.favoriteFood}
              name="favoriteFood"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <textarea
              className="textarea"
              placeholder="Tell us about yourself"
              value={formData.tellUsAboutYourself}
              name="tellUsAboutYourself"
              onChange={handleChange}
              minLength={3}
              required={true}
            />
            <button disabled={btnIsDisabled} className="button">
              Submit
            </button>
          </form>
        </div>

        <div className="badges">{renderedBadges}</div>
      </div>
    </>
  );
}

export default App;
