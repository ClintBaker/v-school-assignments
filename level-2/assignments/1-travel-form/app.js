// CHECK 1. Inputs
//  - First Name, Last Name, Age, Gender (radio),
//     Location travelling to (select), Dietary restrictions (Checkbox: vegetarian, kosher, lactose free, etc.)
// CHECK 2. Each element should include a name
// CHECK 3. Submit button that pops up an alert
// CHECK 4. Styled and user friendly

// Grab the form
const form = document["travel-form"];
// Add event listener
form.addEventListener("submit", function (e) {
  // Prevent default
  e.preventDefault();
  //   Grab inputs
  const firstName = form["first-name"].value;
  const lastName = form["last-name"].value;
  const age = form.age.value;
  const gender = form.gender.value;
  const destination = form.destination.value;

  //   Loop over checkbox to build array of values
  const dietaryRestrictions = [];
  const restrictions = form["dietary-restrictions"];
  for (let i = 0; i < restrictions.length; i++) {
    if (restrictions[i].checked) {
      dietaryRestrictions.push(restrictions[i].value);
    }
  }

  //   Bulid string for restrictions
  let dietaryRestrictionsString = "";
  for (let i = 0; i < dietaryRestrictions.length; i++) {
    if (i + 1 > dietaryRestrictions.length) {
      dietaryRestrictionsString += ` ${dietaryRestrictions[i]}`;
    } else {
      dietaryRestrictionsString += `${dietaryRestrictions[i]}, `;
    }
  }

  //   Reset form elements
  form["first-name"].value = "";
  form["last-name"].value = "";
  form.age.value = "";

  //   Alert user details
  alert(
    `First Name: ${firstName} \nLast Name: ${lastName} \nAge: ${age} \nGender: ${gender} \nDestination: ${destination}\nDietary Restrictions: ${dietaryRestrictionsString}`
  );
});
