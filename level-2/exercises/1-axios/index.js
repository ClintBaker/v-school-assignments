// URL: https://swapi.dev/api/people/1/
import axios from "axios";

axios
  .get("https://swapi.dev/api/people/1/")
  .then((response) => {
    console.log(response.data);
  })
  .catch((e) => console.log(e));
