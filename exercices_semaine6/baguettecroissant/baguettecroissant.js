


function Produit(nom, prix) {
      this.nom = nom;
      this.prix = prix;
}
function Panier(ajoute,retire,total_ht, total_ttc) {
    this.ajoute = ajoute;
    this.retire = retire;
    this.total_ht = total_ht;
    this.total_ttc = total_ttc;

  }

  
var baguette = new Produit('baguette',0.85 , []);
var croissant = new Produit('croissant',0.80 , []);
var prixttc = new Produit(0.85, 0.80 []);
conxole.log(prixttc);


/*alert (croissant.prix); 
alert (baguette.prix);
alert (prix.baguette);
alert (prix.croissant);
alert (Produit.prix);*/


alert (croissant.nom + ' coute ' + croissant.prix + 'euros'); // Affiche : « croissant coute euros »

