const API_URL = "https://elephant-api.herokuapp.com/elephants";
const CORS_URL = "https://noroffcors.herokuapp.com/";

const CorsFix = CORS_URL + API_URL;

async function getElephants() {
  const response = await fetch(CorsFix);
  const results = await response.json();
  console.log(results);
}

getElephants();