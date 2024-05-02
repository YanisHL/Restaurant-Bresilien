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
    serv += `<div class="cardservice"><h3>${s.nom}</h3> 
              <p>${s.description}</p> 
              <video src="${s.image}" alt=""> </video>
              <div>`;
  });

  document.querySelector(".contentservice").innerHTML += `${serv}`;
}
