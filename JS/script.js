// var map = L.map('map').setView([51.505, -0.09], 13);

// L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
//     maxZoom: 19,
//     attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
// }).addTo(map);


















document.addEventListener("DOMContentLoaded", function() {
    // Données des membres (à remplir avec les données réelles)
    var membersData = [
        {
            name: "Kévin Ledez",
            city: "Desvres",
            stack: "Symfony / Angular",
            // Autres informations...
        },
        {
            name: "Karl Gavois",
            city: "Outreau 1",
            stack: "Symfony / React",
            // Autres informations...
        },
        {
            name: "Eric Da Silva Rocha",
            city: "Outreau 2",
            stack: "React",
        },
        {
            name:"Jean-Baptiste Lavisse",
            city:"Ecques",
            stack:"Angular", 
        },
        {
            name:"Alexandre Merlin",
            city:"St André les Lilles",
            stack:"Angular",
        }

        // Ajouter les autres membres ici...
    ];

    // Initialisation de la carte
    var map = L.map('map').setView([50.7327860908357, 1.6759099089637288], 11.75);

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    }).addTo(map);
    
    L.marker([50.73558643554806, 1.6041726210935034]).addTo(map)
        .bindPopup('La Fabrique Simplon™')
        .openPopup();

    // Ajout des marqueurs pour chaque membre
    membersData.forEach(function(member) {
        L.marker(getCoordinates(member.city)).addTo(map)
            .bindPopup(`<strong>${member.name}</strong><br>${member.city}<br>${member.stack}`);
    });

    // Fonction pour obtenir les coordonnées géographiques à partir du nom de la ville (exemple basique)
    function getCoordinates(city) {
        // À remplacer par une méthode de géocodage réelle
        switch (city.toLowerCase()) {
            case "desvres":
                return [50.666667, 1.833333]; // Coordonnées de Paris
            case "outreau 1":
                return [50.710288248605096, 1.5954472204350838];
            case "outreau 2":
                return [50.68992860602505, 1.6039390263407505];    
            case "ecques":
                return [50.66967583282208, 2.2869485015053885];
            case "boulogne-sur-mer":
                return [50.703333, 1.603333];
            // Ajouter d'autres villes ici...
            default:
                return [50.73558643554806, 1.6041726210935034]; // Coordonnées par défaut
        }
    }
});
