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
    serv += `<h3>${s.nom}</h3> <p>${s.description}</p> <img src="${s.image}" alt=""/>`;
  });
  let temoin = "";
  data.entreprise.temoignages.forEach((t) => {
    temoin += `${t.prenom} ${t.typeExperience} ${t.commentaire}${t.note}"`;
  });

  document.querySelector(".content").innerHTML += `

  <section class="hero">
  <video autoplay muted loop id="Video">
  <source src="11635-231758671_small.mp4" type="video/mp4">
  </video>
  <div class="heroContent">
   
    <strong> ${data.entreprise.nomCommercial}</strong> 
    <h1 >${data.entreprise.phraseAccroche}</h1>
    <strong> ${data.entreprise.texteAppelAction}</strong>
    </div>
    </section>
     <div class="plats flex spacebetween">
     <h2 id="Nosplats"> Nos Plats Vedettes</h2>
    ${plat}
</div>
    ${serv}
    ${data.entreprise.avantagesClients}
    ${temoin}
    
    

  `;

  console.log(data);
}
