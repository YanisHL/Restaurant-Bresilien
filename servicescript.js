fetch("restaurantBresilien.json")
  // Une fois que la réponse est reçue
  .then((rep) => {
    // Transforme la réponse obtenue en JSON
    return rep.json();
  })
  // Une fois que les données JSON sont extraites avec succès, je les transmets à une fonction pour les utiliser plus tard
  .then((data) => {
    // Appelle la fonction addProducts() avec les données JSON en entrée
    addProducts(data);
  });
function addProducts(data) {
  let serv = "";
  data.entreprise.services.forEach((s) => {
    serv += `<div class="cardservice flex spacebetween">
    <h3 class="h3serv">${s.nom}</h3> 
    <div class="nomdesc" >
              <p class="pserv">${s.description}</p> 
              
              <video autoplay muted loop class="videoserv" src="${s.image}" alt=""> </video>
              </div>
              <div>`;
  });

  document.querySelector(
    ".contentservice"
  ).innerHTML += ` <div  data-aos="fade-up-left"> ${serv}</div>`;
}

AOS.init();
// CARTES
var map = L.map("map").setView([51.505, -0.09], 13);

L.tileLayer("https://tile.openstreetmap.org/{z}/{x}/{y}.png", {
  attribution:
    '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
}).addTo(map);

let coord = [43.3, 5.4];
var redIcon = L.icon({
  iconUrl: "/assets/leaf-red.png",
  shadowUrl: "/assets/leaf-shadow.png",

  iconSize: [38, 95], // size of the icon
  shadowSize: [50, 64], // size of the shadow
  iconAnchor: [22, 94], // point of the icon which will correspond to marker's location
  shadowAnchor: [4, 62], // the same for the shadow
  popupAnchor: [-3, -76], // point from which the popup should open relative to the iconAnchor
});
var marquer = L.marker(coord, { icon: redIcon })
  .addTo(map)
  .bindPopup("você está aqui !")
  .openPopup();
var circle = L.circle([43.3, 5.4], {
  color: "red",
  fillColor: "#f03",
  fillOpacity: 0.5,
  radius: 1000,
}).addTo(map);
var popup = L.popup();
