function zoomOnClick(svgElement, zoomFactor, elementToHide) {
    let originalTransform = svgElement.getAttribute('transform');
    let isZoomed = false;

    svgElement.addEventListener('click', function(event) {
        if (isZoomed) {
            // Rétablir la taille initiale avec une transition de 0.5 secondes
            svgElement.style.transition = 'transform 0.5s ease';
            svgElement.style.transform = originalTransform;
            elementToHide.style.transition = 'opacity 0.5s ease';
            elementToHide.style.opacity = '1';
            isZoomed = false;
        } else {
            // Appliquer le zoom sur l'élément SVG avec une transition de 0.5 secondes
            let zoomTransform = 'translate(' + -2950 + ',' + 0 + ') scale(' + zoomFactor + ')';
            svgElement.style.transition = 'transform 0.5s ease';
            svgElement.style.transform = zoomTransform;
            elementToHide.style.transition = 'opacity 0.5s ease';
            elementToHide.style.opacity = '0';
            isZoomed = true;
        }
    });

    document.addEventListener('click', function(event) {
        if (!svgElement.contains(event.target)) {
            // Rétablir la taille initiale avec une transition de 0.5 secondes
            svgElement.style.transition = 'transform 0.5s ease';
            svgElement.style.transform = originalTransform;
            elementToHide.style.transition = 'opacity 0.5s ease';
            elementToHide.style.opacity = '1';
            isZoomed = false;
        }
    });
}

// Exemple d'utilisation :
var svgElement1 = document.querySelector('.FR-62');
var elementToHide1 = document.querySelector('.FR-59');
zoomOnClick(svgElement1, 13, elementToHide1);

var svgElement2 = document.querySelector('.FR-59');
var elementToHide2 = document.querySelector('.FR-62');
zoomOnClick(svgElement2, 11, elementToHide2);
