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

  document.querySelector(".contentplats").innerHTML += `

     <div class="plats flex spacebetween">
     <h2 id="Nosplats"> Nos Plats Vedettes</h2>
    ${plat}
</div>
    
    

  `;
  //   ${serv}
  console.log(data);
}
