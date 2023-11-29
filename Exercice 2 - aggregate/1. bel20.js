

//Donner par action le cours de clôture moyen, le cours de clôture minimum, le cours de clôture maximum et le nombre moyen d'actions négociées par jour.
db.bel20.aggregate([
    { $group: {
        _id: "$name", 
        avgClosing: {$avg: "$price.end"}, 
        minClosing: {$min: "$price.end"}, 
        maxClosing: {$max: "$price.end"},
        avgNumber: {$avg: "$number"}
    }}
])


//Indiquez par action le cours minimum de clôture et la semaine au cours de laquelle ce cours minimum de clôture est survenu. E.g.
//KBC: minprice = 39.1 ; week = 44
//Elia: minprice = 33.38 ; week = 46
db.bel20.aggregate([
    {$sort: {"price.end": 1}},
    { $group: {
        _id: "$name", 
        minClosingPrice: {$first: "$price.end"},
        minClosingWeek: {$first: {$week: "$date"}}
    }}
])
