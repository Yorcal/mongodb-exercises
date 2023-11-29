//1 Précisez le nombre de fromages par type de fromage. Mettez le type de fromage en majuscules.

const result = db.cheeses.aggregate([{$group: {_id: { $toUpper: "$properties.cheesetype" },count: { $sum: 1 }}}]).toArray();
result.forEach(doc => print(`Type: ${doc._id}, Nombre: ${doc.count}`));
  

//2 Donnez le nombre de fromages par fromagerie
// Utilisation de l'agrégation pour compter le nombre de fromages par fromagerie

const result = db.cheeses.aggregate([{$group: {_id: "$factory",count: { $sum: 1 }}}]).toArray();
result.forEach(doc => print(`Fromagerie: ${doc._id}, Nombre: ${doc.count}`));
  