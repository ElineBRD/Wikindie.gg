const fs = require('fs'); // ? fs = file system -> import d'un outil qui permet de lire des fichiers

let liste_articles =[]; // ? let = permet de modifier la variable plus tard (ex: ajouter des articles)

try {
    const data = fs.readFileSync('articles.json', 'utf8');
    liste_articles = JSON.parse(data);
}
catch (error) {
    console.log("Je n'arrive pas à accéder à articles.json.")
    liste_articles;
}

console.log("Articles chargés :", liste_articles);