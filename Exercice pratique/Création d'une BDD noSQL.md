## Tâches à Réaliser

Dans ces exercices, nous allons simuler la mise en place d'une base de données pour un système de livraison de nourriture, en utilisant des collections pour stocker des informations sur les utilisateurs, les restaurants, les produits, les commandes et les livraisons.

## Livrables
- Complétez le document suivant avec vos réponses et vos analyses. Vous pourrez ensuite me transférer le fichier markdown (.md) par mail à  l'adresse : quentin.dubourg@diteschool.fr.
- Créez les collections demandées sur la BDD MongoDB de votre groupe. Je pourrais vérifier de mon côté que les bases correspondent.

## La base de données
Ci-dessous, vous pouvez consulter la base de données d'un service de livraison de nourriture. Cette base de données encapsule diverses entités essentielles pour un fonctionnement fluide du service de livraison. Voici les données présentées sous forme de tableaux : 

**UTILISATEURS**
| UserID | Nom     | Prénom | Adresse                    | Numéro de téléphone | Adresse e-mail           |
|--------|---------|--------|----------------------------|---------------------|--------------------------|
| 1      | Dupont  | Jean   | 123 Rue de la République   | 0123456789          | jean.dupont@email.com   |
| 2      | Martin  | Marie  | 456 Avenue des Fleurs      | 0987654321          | marie.martin@email.com  |
| 3      | Martin  | Claude  | 456 Avenue des Fleurs      | 0987654321          | claude.martin@email.com  |


**RESTAURANTS**
| RestaurantID | Nom du restaurant | Adresse du restaurant          | Numéro de téléphone du restaurant | Type de cuisine | Heures d'ouverture       |
|--------------|-------------------|---------------------------------|------------------------------------|-----------------|--------------------------|
| 101          | Chez Paul         | 789 Boulevard des Gourmets      | 1112223333                         | Française       | 10:00 - 22:00           |
| 102          | Sushi Express     | 234 Rue des Sushis              | 4445556666                         | Japonaise       | 11:00 - 23:00           |

**PRODUITS**
| ProductID | Nom du produit      | Description                     | Prix  | RestaurantID |
|-----------|---------------------|---------------------------------|-------|--------------|
| 201       | Boeuf Bourguignon   | Plat traditionnel français       | 15.99 | 101          |
| 202       | Sashimi Mix         | Assortiment de sashimis          | 20.99 | 102          |

**COMMANDES**
| OrderID | UserID | Date de commande         | Statut    |
|---------|--------|--------------------------|-----------|
| 301     | 1      | 2023-01-15 12:30:00     | En cours  |
| 302     | 2      | 2023-01-16 18:45:00     | Livrée    |

## À vous de jouer
#### Création des collections et insertion de documents

- À l'intérieur de votre base de données, créez quatres collections: "utilisateurs", "restaurants", "commandes" et "produits".

#### Insertion de données

- Dans la collection "utilisateurs", insérez au moins trois documents représentant des utilisateurs fictifs.
- Dans la collection "restaurants", insérez au moins deux documents représentant des restaurants fictifs avec leurs détails.
- Dans la collection "produits", insérez au moins deux documents représentant des produits fictifs avec leurs détails.
- Dans la collection "commandes", insérez au moins deux documents représentant des produits fictifs avec leurs détails.

#### Requêtes de recherche

- Écrivez une requête pour récupérer tous les utilisateurs de la collection "utilisateurs".

db.utilisateurs.find()

- Écrivez une requête pour récupérer toutes les commandes datées du 16 janvier 2023. À grande echelle, cette requête est-elle efficace ? Pourquoi ?

db.commandes.find({"Date de commande": {$gte: ISODate("2023-01-16T00:00:00"),$lt: ISODate("2023-01-17T00:00:00")}})

Cela ne serait pas efficace à grande échelle car il faudrait d'abord trier toutes les commandes par date, puis de s'arreter si on dépasse la date. Surement car la quantité de comparaison doit être plus lourds
que des nombres lambda.

#### Mise à jour de données

- Modifiez le document d'un utilisateur pour mettre à jour son adresse e-mail (choisissez une nouvelle adresse mail).
- Modifiez le document du restaurand Sushi Express pour ajouter un champ "fermeture" avec la date du "01/12/2023". Une opération pareille aurait-elle été possible en SQL ?

db.utilisateurs.updateOne({ UserID: 1 },{ $set: { "Adresse e-mail": "Gmail@gmail.com" } });

db.restaurants.updateOne( { "Nom du restaurant": "Sushi Express" }, { $set: { "fermeture": "01/12/2023" } } );
Non une opération pareil, n'aurait pas pu être possible aussi facilement en sql car il aurait fallu aussi mettre une date de fermeture sur l'autre restaurant, et crée une colonne.

- Supprimez le restaurant Sushi-express. Remarquez-vous une incohérence dans l'ensemble de base de donnée ?

db.restaurants.deleteOne({ "Nom du restaurant": "Sushi Express" });

Il y a une incohérence sur l'id du restaurant référencé dans le document produits, car le restaurant n'existe plus mais les sashimis le référence encore avec l'id

#### Agrégation de données
Ressource utile : https://www.mongodb.com/docs/manual/core/map-reduce/ https://www.youtube.com/watch?v=cHGaQz0E7AU https://www.youtube.com/watch?v=fEACZP_878Y
- Utilisez l'agrégation pour trouver la moyenne des prix des produits.
 
db.produits.aggregate([{$group: {_id: null,moyennePrix: { $avg: "$Prix" }}}])
La moyenne est de 18,49.


- Utilisez l'agrégation pour regrouper les utilisateurs par adresse et compter combien d'utilisateurs ont la même adresse.
 
db.utilisateurs.aggregate([{$group: {_id: "$Adresse",count: { $sum: 1 }}}])


- En considérant le fait que MongoDB dispatch ses données sur plusieurs serveurs, en quoi cette méthode "d'agrégation" permet à MongoDB de travailler efficacement ?

Gràce a cette méthode, MongoDB permet de Threadés ces serveurs et donc de ne pas être déborder par de multiples petites requêtes ralentissant le tout.
