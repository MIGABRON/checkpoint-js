let nombreEtudiants = 0;

while (nombreEtudiants <= 0) {
    const saisie = prompt("Combien y a-t-il d'étudiants ?");

    if (saisie === null) {
        break;
    }

    nombreEtudiants = Number(saisie.trim());

    if (!Number.isInteger(nombreEtudiants) || nombreEtudiants <= 0) {
        nombreEtudiants = 0;
        alert("Veuillez saisir un nombre entier supérieur à 0.");
    }
}

if (nombreEtudiants > 0) {
    let totalNotes = 0;
    let nombreReussites = 0;
    let saisieComplete = true;

    for (let etudiant = 1; etudiant <= nombreEtudiants; etudiant++) {
        let note;

        while (true) {
            const saisie = prompt(`Saisissez la note de l'étudiant ${etudiant} (sur 20) :`);

            if (saisie === null) {
                saisieComplete = false;
                break;
            }

            note = Number(saisie.trim());

            if (saisie.trim() !== "" && Number.isFinite(note) && note >= 0 && note <= 20) {
                break;
            }

            alert("La note doit être comprise entre 0 et 20.");
        }

        if (!saisieComplete) {
            break;
        }

        totalNotes += note;

        if (note >= 10) {
            nombreReussites++;
        }

        let mention;
        if (note < 10) {
            mention = "Insuffisant";
        } else if (note < 12) {
            mention = "Passable";
        } else if (note < 14) {
            mention = "Assez bien";
        } else if (note < 16) {
            mention = "Bien";
        } else {
            mention = "Très bien";
        }

        alert(`Étudiant ${etudiant} : ${note}/20 — ${mention}`);
    }

    if (saisieComplete) {
        const moyenne = totalNotes / nombreEtudiants;
        const pourcentageReussite = (nombreReussites / nombreEtudiants) * 100;
        const formatNombre = (nombre) =>
            new Intl.NumberFormat("fr-FR", { maximumFractionDigits: 2 }).format(nombre);

        alert(
            `Moyenne de la classe : ${formatNombre(moyenne)}\n` +
            `Nombre d'étudiants ayant réussi : ${nombreReussites}\n` +
            `Pourcentage de réussite : ${formatNombre(pourcentageReussite)} %`
        );
    }
}