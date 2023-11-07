// 1.
function sum(x, y) {
  //check data types first and throw error
  if (typeof x !== "number" || typeof y !== "number") {
    // Data type is not number, throw err
    throw new Error("Wrong data type");
  }
  //   Otherwise perform function
  return x + y;
}

// Try and catch to handle an error case
try {
  console.log(sum(1, "babab"));
} catch (err) {
  console.log("Wrong data type");
}

// 2.
var user = { username: "sam", password: "123abc" };
function login(username, password) {
  //check credentials
  if (username !== user.username || password !== user.password) {
    // If either is off, throw a new error
    throw new Error("Incorrect username or password");
  }

  //   Otherwise loggin was a success
  console.log("Login successful!");
}

try {
  // Successful attempt (this works as we don't get to the error block yet)
  login(user.username, user.password);
  //   Wrong credentials
  login(user.username, "fakepassword");
} catch (err) {
  console.log("Wrong credentials");
}
