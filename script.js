var client = new XMLHttpRequest();

function fetchData() {
  const data = document.getElementById("zipcode-input").value;
  console.log("data", data);
  client.open("GET", `http://api.zippopotam.us/us/${data}`, true);
  client.onreadystatechange = function () {
    if (client.readyState == 4) {
      console.log("client", client.responseText);
      const res = JSON.parse(client.responseText);
      console.log("client", res);
      const place = res.places[0];
      console.log(place);
      const { latitude, longitude, state } = place;
      const placeName = place["place name"];
      const stateAbr = place["state abbreviation"];
      console.log("placename", placeName);
      document.getElementById("res-country").value = res.country;
      document.getElementById("res-state").value = state;
      document.getElementById("res-place-name").value = placeName;
      document.getElementById("res-latitude").value = latitude;
      document.getElementById("res-longitude").value = longitude;

      let newImg = document.getElementById("res-img");
      let imgTitle = document.createElement("h3");
      const resCard = document.getElementById("res-card");

      if (!newImg) {
        newImg = document.createElement("img");
        imgTitle = document.createElement("h3");
        imgTitle.classList = ["res-title mt-3"];
        imgTitle.innerText = "State image";
        resCard.appendChild(imgTitle);
        newImg.id = "res-img";
        resCard.appendChild(newImg);
      }
      newImg.src = `./states/${stateAbr}.svg`;

    };
  };
  client.send();
}

// client.open("GET", "http://api.zippopotam.us/us/90210", true);
// client.onreadystatechange = function () {
//   if (client.readyState == 4) {
//     /// alert(client.responseText);
//   };
// };

// client.send();