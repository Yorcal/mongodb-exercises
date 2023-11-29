// 1 Donnez liste des ordinateurs portables avec un prix compris entre 500 et 1000 euros ou avec un disque dur de 750 Go.

db.laptops.find({$or: [{ "price": { $lte: 1000, $gte: 500 } },{ "HD": "750GB" }]})

// 2 Changez Windows 10 vers Windows 8

db.laptops.updateMany({ OS: "Windows 10" },{ $set: { OS: "Windows 8" } })

Error : MongoInvalidArgumentError: Update document requires atomic operators

// 3 Donnez le nom, le prix et le système d'exploitation des 2 ordinateurs portables les moins chers.

db.laptops.find().sort({ "price": 1 }).limit(2).forEach(doc => printjson({ name: doc.name, price: doc.price, OS: doc.properties.OS }))



// 4 Donnez la liste de tous les ordinateurs portables avec au moins 1 avis avec une note comprise entre 4 et 4,2
db.laptops.find({"reviews": {$elemMatch: {"score": { $gte: 4, $lte: 4.2 }}}})

// Donnez la liste de tous les ordinateurs portables dotés de 2 ports USB 3_0 et prenant en charge au moins 2 langues, dont le "Dutch"
db.laptops.find({"properties.USB.USB3_0": 2,$expr: {$and: [{ $gte: [{ $size: "$LanguageOS" }, 2] },{ $in: ["Dutch", "$LanguageOS"] }]}})
  



