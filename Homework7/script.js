
let pizza = {
    ingredients1: 'dough',
    ingredients2: 'salami',
    priсe: 150,
};
let buuza = {
    ingredients1: 'dough',
    ingredients2: 'mutton',
    priсe: 50,
};
let pasta = {
    ingredients1: 'souce',
    ingredients2: 'spaghetti',
    priсe: 100,
};
let cake = {
    ingredients1: 'dough',
    ingredients2: 'sugar',
    priсe: 120,
};


let food = [pizza, buuza, pasta, cake];
food.splice(1, 1); //удалили buuza
alert(JSON.stringify(food));

delete buuza.ingredients1;
food.unshift(buuza);

alert(buuza.ingredients1);
alert(JSON.stringify(food));


let myPriсe = `All price = ${pizza.priсe + buuza.priсe + pasta.priсe + cake.priсe}`;
alert(myPriсe);

food.splice(1, 3);
alert(JSON.stringify(food));