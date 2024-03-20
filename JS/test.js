function zoomOnClick(svgElement, zoomFactor, otherSvgElement) {
    let originalTransform = svgElement.getAttribute('transform');
    let isZoomed = false;

    svgElement.addEventListener('click', function(event) {
        if (isZoomed) {
            // Rétablir la taille initiale avec une transition de 0.5 secondes
            svgElement.style.transition = 'transform 0.5s ease';
            svgElement.style.transform = originalTransform;
            otherSvgElement.style.transition = 'opacity 0.5s ease';
            otherSvgElement.style.opacity = '1';
            isZoomed = false;
        } else {
            // Appliquer le zoom sur l'élément SVG avec une transition de 0.5 secondes
            let zoomTransform = 'translate(' + -2950 + ',' + 0 + ') scale(' + zoomFactor + ')';
            svgElement.style.transition = 'transform 0.5s ease';
            svgElement.style.transform = zoomTransform;
            otherSvgElement.style.transition = 'opacity 0.5s ease';
            otherSvgElement.style.opacity = '0';
            isZoomed = true;
        }
    });

    // Masquer l'autre SVG par défaut
    otherSvgElement.style.opacity = '1'; // Afficher par défaut

    // Réapparaître le SVG masqué lorsque vous cliquez en dehors de celui-ci
    document.addEventListener('click', function(event) {
        if (!svgElement.contains(event.target) && !otherSvgElement.contains(event.target)) {
            otherSvgElement.style.transition = 'opacity 0.5s ease';
            otherSvgElement.style.opacity = '1';
        }
    });
}

// Exemple d'utilisation :
var svgElement1 = document.querySelector('.FR-62');
var svgElement2 = document.querySelector('.FR-59');
zoomOnClick(svgElement1, 13, svgElement2); // Définir le scale à 2 lors du clic
zoomOnClick(svgElement2, 11, svgElement1); // Définir le scale à 2 lors du clic


function showPopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    
    // Make a request to fetch JSON data
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        var popupContent = document.getElementById("popupContent");
        popupContent.innerHTML = "<h2>" + data.title + "</h2><p>" + data.description + "</p>";
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }