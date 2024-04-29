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
    plat += `<li>${p.nom} ${p.description} <img src="${p.image}" alt="${p.nom}"/> </li>`;
  });
  let serv = "";
  data.entreprise.services.forEach((s) => {
    serv += `<li>${s.nom} ${s.description} <img src="${s.image}" alt=""/> </li>`;
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
    </div>
    </section>
    ${data.entreprise.texteAppelAction}  
    ${data.entreprise.avantagesClients}  
    ${plat}
    ${serv}
    ${temoin}
    
    

  `;

  console.log(data);
}
