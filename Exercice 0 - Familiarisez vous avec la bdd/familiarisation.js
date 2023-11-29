// 1 Quels sont les différents bases de données atteignable via cette connexion ? Quelle commande permet de les afficher?

/*
La commande utilisé est :
show databases

et les bases de données atteignable sont :
exercises           192.00 KiB
group_1             200.00 KiB
group_10            200.00 KiB
group_11            200.00 KiB
group_12            200.00 KiB
group_13            200.00 KiB
group_2             200.00 KiB
group_3             200.00 KiB
group_4             200.00 KiB
group_5             200.00 KiB
group_6             200.00 KiB
group_7             200.00 KiB
group_8             200.00 KiB
group_9             232.00 KiB
nomdegroupe         360.00 KiB
sample_airbnb        52.20 MiB
sample_analytics      9.61 MiB
sample_geospatial     1.27 MiB
sample_guides        40.00 KiB
sample_mflix        113.43 MiB
sample_restaurants    6.39 MiB
sample_supplies       1.05 MiB
sample_training      48.20 MiB
sample_weatherdata    2.59 MiB
test                 40.00 KiB
admin               288.00 KiB
local                 6.64 GiB

*/

// 2 Allez dans la BDD "exercices". Quelle commande permet de se déplacer à une nouvelle base de données. Que se passe-t-il si cette base n'existe pas ?
/*
la commande pour aller dans la BDD "exercices"
use exercices

Même si la base de données n'existe pas, on peux y entrer.


// 3 Quelles sont les différentes collections présentes dans cette BDD ? Quelle commande permet de les afficher.
/*
La commande pour avoir acces aux collections est :
show collections

et dans la BDD, il y a les collections:
bel20
cheeses
irons
laptops
people
*/
// 4 Quelle est la commande nécessaire pour affichez la liste des documents d'une des collections.
/*
pour afficher la liste des documents d'une collections est :
db."collection".find()
*/
// Vous allez maintenant changer de BDD pour pouvoir travailler sur vos propres documents.

// Pour cela, utilisez la commande la commande de la question 2 pour ouvrir la BDD qui porte les noms des membre de votre groupe ou le numéro de votre groupe.
// Si aucune BDD ne correspond à cette description, contactez-moi :)

