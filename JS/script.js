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
            city:"St André lez Lille",
            stack:".NET",
        },
        {
            name:"William Truant",
            city:"Boulogne-sur-Mer 1",
            stack:"Oui",
        },
        {
            name:"Alex Buffet",
            city:"Boulogne-sur-Mer 2",
            stack:"Le PHP c'est d'la merde",
        },
        {
            name:"Théo Duflos",
            city:"St Etienne au Mont",
            stack:".NET",
        },
        {
            name:"Geoffroy Noêl",
            city:"Marquise",
            stack:"Oui",
        },
        {
            name:"Nicolas Herbez",
            city:"Samer",
            stack:"Symfony / Angular",
        },
        {
            name:"Théo Couverlard",
            city:"La Capelle-lès-Boulogne",
            stack:"Next / React / NodeJS",
        },
        {
            name:"Vivien Gajac",
            city:"Boulogne-sur-Mer 3",
            stack:"Symfony",
        },
        {
            name:"L'autre 1",
            city:"sous l'océan",
            stack:"Docker",
        },
        {
            name:"L'autre 2",
            city:"sous l'océan2",
            stack:"Docker",
        }
        // Ajouter les autres membres ici...
    ];

    // Initialisation de la carte
    var map = L.map('map').setView([50.80399044525691, 2.6167874034359158], 10);

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
                return [50.72423393067472, 1.6128890550787929];
            case "boulogne-sur-mer2":
                return [50.719556676266414, 1.6133998317766627];
            case "boulogne-sur-mer3":
                return [50.728712955523044, 1.6023856277598398]; 
            case "st etienne au mont":
                return [50.680142962224, 1.626592731459604];  
            case "st andré lez lille":
                return [50.660278910907564, 3.043513556771108]
            case "marquise":
                return [50.81462006805631, 1.7040024129502926];
            case "samer":
                return [50.638275486875244, 1.745988919236177];
            case "la capelle-lès-boulogne":
                return [50.732169804633244, 1.71632316724838];
            case "sous l'océan":
                return [50.740748460652206, 1.5675448412448787];
            case "sous l'océan2":
                return [50.75056098365712, 1.5793858667237435];
            // Ajoute d'autres villes ici...
            default:
                return [50.73558643554806, 1.6041726210935034]; // Coordonnées par défaut
        }
    }
});
