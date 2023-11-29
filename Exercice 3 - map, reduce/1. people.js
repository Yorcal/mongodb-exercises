// 1 compter le nombre de personnes par âge, trier par âge décroissant
// Map function
const mapFunction = function() {emit(this.age, 1);};
  
const reduceFunction = function(key, values) {return Array.sum(values);};
  
const result = db.people.aggregate([{$group: {_id: "$age",count: { $sum: 1 }}},{$sort: { _id: -1 }}]).toArray();

result.forEach(doc => print(`Age: ${doc._id}, Count: ${doc.count}`));
  