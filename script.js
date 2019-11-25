var noms = ["Babe", "Paul", "Clodomir", "George", "Brigitte", "Homer-Simpson", "Kylian", "Georges-Clooney", "Quintus", "Anais", "Styvens", "Keen-V", "Ludovic", "Yoshi", "Lucifer", "Pumba", "Eglantine", "Cayde-6", "Poutine", "Squall"];

var objet = ['une valise', 'un poivrier', 'connecté', 'une épée', 'un cahier', 'un pneu', 'une table', 'un godsabre', 'une truelle', 'une madelaine', 'un trident', 'un pull rose', 'un pc', 'un tisonnier', 'une guimbarde', 'un chandelier',
'un verre', 'une table bancale', 'un arbre', 'une souris', 'une dague'];

var temperatures = [30, 24, -273.15, 21, 42, -38, 35, 584, -8000, 28, 20, 37.2, -30, 35, "hot", 27, -100, 55 ];

var lieux = ['à Tombouctou', 'à Lille', 'à Sataya', 'à Montcuq', 'à Paris' , 'à la Batcave', 'à Maubeuge', 'sur le Réacteur nucléaire', 'en Martinique', 'au Balamb garden', "en Enfer", 'à Montbeilard', 'sur Namek', 'à Londres', 'Une île', 'dans une cave', 'au Caire', 'à New York', 'dans le tampon', 'à Berlaimont',]

var verbes = ['Danser nu' ,"Frapper quelqu'un" ,'Lubrifier leurs mains', 'Trikiter des gens', 'Procrastiner', 'Foutre', 'Prendre des gants', 'Nager sans eau', 
    'Recoudre leurs gants', 'Punir les gilets jaune', 'Attaquer les gilets jaune', 'Coder avec leurs mains gauche', 'Jouer du trombonne', 'Manger leurs doigts', 'Avoir la crotte au cul'];



   var nomsAleatoire = (Math.floor(Math.random() * noms.length));
   var objetsAleatoire = (Math.floor(Math.random() * objet.length));
   var temperaturesAleatoire = (Math.floor(Math.random() * temperatures.length));
   var lieuxAleatoire = (Math.floor(Math.random() * lieux.length));
   var verbesAleatoire = (Math.floor(Math.random() * verbes.length));
   
   var chaineRetourner = noms[nomsAleatoire] + " avec son " + objet[objetsAleatoire] + " Alors qu'il faisait " + temperatures[temperaturesAleatoire] + " a " + lieux[lieuxAleatoire] + " a soudainement " + verbes[verbesAleatoire] ;



function refreshPhrase () {

    

    var nomsAleatoire = (Math.floor(Math.random() * noms.length));
    var objetsAleatoire = (Math.floor(Math.random() * objet.length));
    var temperaturesAleatoire = (Math.floor(Math.random() * temperatures.length));
    var lieuxAleatoire = (Math.floor(Math.random() * lieux.length));
    var verbesAleatoire = (Math.floor(Math.random() * verbes.length));

    var prenomUtil = document.getElementById('prenomUtilisateur').value;

    var chaineRetourner = noms[nomsAleatoire] + " et " + prenomUtil + " " + " ont pris " +  objet[objetsAleatoire] + " pour " + verbes[verbesAleatoire] + " alors qu'il faisait " + temperatures[temperaturesAleatoire] + " " + lieux[lieuxAleatoire];
    document.getElementById('containerTexte').innerHTML += chaineRetourner + "<br/>";    
   }




