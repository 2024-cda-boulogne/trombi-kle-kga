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
zoomOnClick(svgElement2, 13, svgElement1); // Définir le scale à 2 lors du clic

document.addEventListener("DOMContentLoaded", function() {
    var points = document.querySelectorAll(".point");
    points.forEach(function(point) {
      point.addEventListener("click", function() {
        var city = this.getAttribute("data-user-id");
        showPopup(city);
      });
    });
  });
  
  document.addEventListener("DOMContentLoaded", function() {
    var points = document.querySelectorAll(".point");
    points.forEach(function(point) {
      point.addEventListener("click", function() {
        var city = this.getAttribute("data-city");
        showPopup(city);
      });
    });
  });
  
  function showPopup(city) {
    var popup = document.getElementById("popup");
    popup.style.display = "block";
    
    // Make a request to fetch JSON data
    fetch('data.json')
      .then(response => response.json())
      .then(data => {
        // Filter users by the given city
        var usersInCity = data.users.filter(item => item.city === city);
        if (usersInCity.length > 0) {
          var popupContent = document.getElementById("popupContent");
          // Generate HTML for each user in the city
          var contentHTML = "<h2>Users in " + city + "</h2>";
          usersInCity.forEach(function(user) {
            contentHTML += "<p>Name: " + user.name + "</p><p>Stack: " + user.stack + "</p><br>";
          });
          popupContent.innerHTML = contentHTML;
        } else {
          console.error("No users found for city:", city);
        }
      })
      .catch(error => console.error('Error fetching JSON:', error));
  }
  
  
  function closePopup() {
    var popup = document.getElementById("popup");
    popup.style.display = "none";
  }
  



  