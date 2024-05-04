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
    <strong>  <a class="btnAccroche" href="plats.html"> ${data.entreprise.texteAppelAction} ! </a></strong>
    <p class="avantages">"${data.entreprise.avantagesClients}"</p>
    </div>
    </section>
    <section data-aos="zoom-in-up">
<div>
<h2> Qu'est ce qu'ils en ont pensé ?:</h2>
</div>
   <div class="grndtemoin" >
 
    ${temoin}
  </div>
  </section>
  `;

  // ${data.entreprise.avantagesClients}
  console.log(data);
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
