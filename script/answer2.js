const aPI_URL = "https://mashape-community-urban-dictionary.p.rapidapi.com/define?term=wat";

const options = { "headers": {
    "x-rapidapi-key": "896c2fc363mshb720aa46473b80bp147ac6jsn00d2bc15aceb",
}};


async function callUrbanDictionary() {
  const response = await fetch(aPI_URL, options);
  const results = await response.json();
  console.log(results);
}

callUrbanDictionary();


