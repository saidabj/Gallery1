function upDate(previewPic) {
    console.log("Événement déclenché !");
    console.log("Source de l’image :", previewPic.src);
    console.log("Texte alternatif :", previewPic.alt);

    // Sélectionne la div principale
    const imageDiv = document.getElementById("image");

    // Change le texte pour le alt de l’image
    imageDiv.textContent = previewPic.alt;

    // Change le fond pour l’image survolée
    imageDiv.style.backgroundImage = `url('${previewPic.src}')`;
}

function unDo() {
    const imageDiv = document.getElementById("image");

    // Remet le texte original
    imageDiv.textContent = "Survolez une image ci-dessous pour l’afficher ici";

    // Supprime l’image de fond
    imageDiv.style.backgroundImage = "url('')";
}
