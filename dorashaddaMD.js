function checkAge() {
    // Récupérer la date de naissance saisie par l'utilisateur
    var dateOfBirth = document.getElementById("dateOfBirth").value;

    // Calculer l'âge en années
    var today = new Date();
    var birthDate = new Date(dateOfBirth);
    var age = today.getFullYear() - birthDate.getFullYear();

    // Vérifier si l'utilisateur a plus de 15 ans
    if (age >= 15) {
        alert("Mahadsanid");
    } else {
        alert("Cooden luguma ogalo ");
    }
}
function updateContent(selectedValue) {
    // Mettre à jour le paragraphe suivant en fonction de la valeur sélectionnée
    var contentParagraph = document.getElementById("contentParagraph");

    switch (selectedValue) {
        case "Maamulka":
            contentParagraph.textContent = "Contenu relatif à Maamulka.";
            break;
        case "Gobalka":
            contentParagraph.textContent = "Contenu relatif à Gobalka.";
            break;
        case "Degmada":
            contentParagraph.textContent = "Contenu relatif à Degmada.";
            break;
        case "Mogadishu":
            contentParagraph.textContent = "Contenu relatif à Mogadishu.";
            break;
        case "Hargeisa":
            contentParagraph.textContent = "Contenu relatif à Hargeisa.";
            break;
        case "Kismayo":
            contentParagraph.textContent = "Contenu relatif à Kismayo.";
            break;
        default:
            contentParagraph.textContent = "Sélectionnez une option.";
    }
}

function toggleDropdown() {
    var customSelect = document.getElementById("customSelect");
    customSelect.classList.toggle("open");
}