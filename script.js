// Envoie une requête GET à l'URL de l'API pour récupérer des données
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
  let plat = "";
  data.entreprise.plats.forEach((p) => {
    plat += `<section class="cardPlats"><h3 class="hplats alisson"> ${p.nom}</h3> <img class="imgPlat" src="${p.image}" alt="${p.nom}"/> <p class="descriptionPlats">${p.description} </p>
    </section>`;
  });
  let serv = "";
  data.entreprise.services.forEach((s) => {
    serv += `<h3>${s.nom}</h3> 
              <p>${s.description}</p> 
              <img src="${s.image}" alt=""/>`;
  });

  let temoin = "";

  data.entreprise.temoignages.forEach((t) => {
    temoin += `<div class="temoin" > 
                <div class="cardTemoin"> 
                <ul>
                <li><h4>${t.prenom}</h4><li>
                <li>${t.typeExperience}</li>
                <li>${avis(t.note)}</div></li> 
                </ul>
                <p class="commentaire">${t.commentaire}</p>
                </div>`;
  });
  function avis(not) {
    let chaine = "";
    for (let i = 1; i <= not; i++) {
      chaine += "★";
    }
    for (let j = 0; j < 5 - not; j++) {
      chaine += "☆";
    }
    return chaine;
  }
  document.querySelector(".content").innerHTML += `

  <section class="hero">
  <video autoplay muted loop id="Video">
  <source src="./assets/11635-231758671_small.mp4" type="video/mp4">
  </video>
  <div class="heroContent">
   
    <strong> ${data.entreprise.nomCommercial}</strong> 
    <h1 >${data.entreprise.phraseAccroche}</h1>
    <strong> ${data.entreprise.texteAppelAction}</strong>
    </div>
    </section>


   <div class="grndtemoin" data-aos="zoom-in-up">
    ${temoin}
  </div>

  `;
  // ${data.entreprise.avantagesClients}
  console.log(data);
}
AOS.init();

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

// function onMapClick(e) {
//   popup
//     .setLatLng(e.latlng)
//     .setContent("Vous avez cliquer sur la carte en " + e.latlng.toString())
//     .openOn(map);
// }

// map.on("click", onMapClick);

function trierPlatsEtBoissons(jsonData) {
  // Convertir la chaîne JSON en un tableau d'objets
  const elements = restaurantBresilien.parse(jsonData);

  // Créer des tableaux pour les plats et les boissons
  const plats = [];
  const boissons = [];

  // Parcourir les éléments et les trier en fonction de leur type
  elements.forEach((element) => {
    if (element.type === "plat") {
      plats.push(element);
    } else if (element.type === "cocktail") {
      plats.push(element);
    }
  });

  // Créer une div pour afficher les plats et les boissons triés
  const divResultat = document.createElement("div");
  divResultat.innerHTML = "<h2>Plats :</h2><ul>";

  // Ajouter les plats à la div
  plats.forEach((plat) => {
    divResultat.innerHTML += `<li>${plat.nom}</li>`;
  });

  divResultat.innerHTML += "</ul><h2>Boissons :</h2><ul>";

  // Ajouter les boissons à la div
  plats.forEach((boisson) => {
    divResultat.innerHTML += `<li>${boisson.nom}</li>`;
  });

  divResultat.innerHTML += "</ul>";

  // Ajouter la div au document
  document.body.appendChild(divResultat);
}

// Exemple d'utilisation de la fonction

trierPlatsEtBoissons(jsonData);
