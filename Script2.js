let nombreArticles = 0;
let totalAvantRemise = 0;
let saisie;

while (true) {
    saisie = prompt("Saisissez le prix d'un article (0 pour terminer) :");

    if (saisie === null) {
        break;
    }

    const prix = Number(saisie.trim());

    if (saisie.trim() === "" || !Number.isFinite(prix)) {
        alert("Veuillez saisir un prix valide.");
        continue;
    }

    if (prix === 0) {
        break;
    }

    if (prix < 0) {
        alert("Erreur : le prix ne peut pas être négatif.");
        continue;
    }

    nombreArticles++;
    totalAvantRemise += prix;
}

if (nombreArticles === 0) {
    alert("Panier vide");
} else {
    const remise = totalAvantRemise >= 100 ? totalAvantRemise * 0.1 : 0;
    const montantAPayer = totalAvantRemise - remise;

    alert(
        `Nombre d'articles : ${nombreArticles}\n` +
        `Total avant remise : ${totalAvantRemise}\n` +
        `Remise : ${remise}\n` +
        `Montant à payer : ${montantAPayer}`
    );
}