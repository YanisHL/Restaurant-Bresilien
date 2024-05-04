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
              
              <video autoplay muted loop class="videoserv"  src="${s.image}" alt=""> </video>
              </div>
              <div>
              `;
  });

  document.querySelector(".contentservice").innerHTML += ` <div  > ${serv}</div>
<div  id="reservation">
  <h2 class="reserv">Réservations</h2>

  <div class="margin">
  <form action="traitement.php" method="post">

  <label  for="nom">Nom :</label><br>
  <input  type="text" id="nom" name="nom" required><br><br>
  
  <label for="email">Email :</label><br>
  <input  type="email" id="email" name="email" required><br><br>
  
  <label for="telephone">Téléphone :</label><br>
  <input  type="tel" id="telephone" name="telephone" required><br><br>
  
  <label for="date">Date :</label><br>
  <input  type="date" id="date" name="date" required><br><br>
  
  <label  for="heure">Heure :</label><br>
  <input  type="time" id="heure" name="heure" required><br><br>
  
  <label  for="nombre_personnes">Nombre de personnes :</label><br>
  <input type="number" id="nombre_personnes" name="nombre_personnes" min="1" max="10" required><br><br>
  
  <label  for="commentaires">Commentaires :</label><br>
  <textarea  id="commentaires" name="commentaires" rows="4" cols="50"></textarea><br><br>
  
  <input type="submit" value="Réserver">
</form></div>
<div>`;
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
