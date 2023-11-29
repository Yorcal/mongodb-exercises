//1 Précisez le nombre de fromages par type de fromage. Mettez le type de fromage en majuscules.

const result = db.cheeses.aggregate([{$group: {_id: { $toUpper: "$properties.cheesetype" },count: { $sum: 1 }}}]).toArray();
result.forEach(doc => print(`Type: ${doc._id}, Nombre: ${doc.count}`));