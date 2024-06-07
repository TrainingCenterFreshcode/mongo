const mongoose = require('mongoose');
const Salad = require('./Salad');
const Ingredient = require('./Ingredient');

const DB = process.env.DB_NAME || 'fe-test';

start = async () => {
  await mongoose.connect(`mongodb://localhost:27017/${DB}`);
}
start();



module.exports = {
  Salad, Ingredient
}

/*

Salads

name - string
weight - double
ingredients - array
sauce - string
dietType - string
spicy - bool
expired_date - date

*/


/*

Салат 1
Інгридієнти: ['Капуста', ..........]

Салат 2
Інгридієнти: ['Капуста', .........]

Салат 3
Інгридієнти: ['Капуста', ..........]


=======>>>>>>>

Колекція Інгридієнтів
Інгридієнт 1
Інгридієнт 2
Інгридієнт 3
Інгридієнт 4
Інгридієнт 5


Колекція Салатів

Салат 1: [...посилаємось на якісь інгридієнти з колекції інгридієнтів....]
Салат 2: [...посилаємось на якісь інгридієнти з колекції інгридієнтів....]
Салат 3: [...посилаємось на якісь інгридієнти з колекції інгридієнтів....]

*/