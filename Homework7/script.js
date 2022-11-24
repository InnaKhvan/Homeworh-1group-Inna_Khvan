let pizza = {
    ingredients: ['dough', 'salami', 'salt', 'vegetables'],
    price: 150,
    salt: 2,
    type: 'italian',
    discount: 15,
};

let buuza = {
    ingredients: ['dough', 'meat', 'mutton'],
    price: 90,
    salt: 2,
    type: 'buryat',
    discount: 25,
};

let pasta = {
    ingredients: ['souce', 'spaghetti'],
    priсe: 100,
    salt: 3,
    type: 'italian',
    discount: 35,
};
let cake = {
    ingredients: ['dough', 'sugar', 'fruit'],
    priсe: 120,
    salt: 1,
    type: 'nationwide',
    discount: 25,
};

let cakePrice = `Cake's price with discount = ${cake.priсe - (cake.priсe * (cake.discount / 100))}`;
alert(cakePrice);

let food = [pizza, buuza, pasta, cake];

food.splice(1, 1); //delete buuza

alert(JSON.stringify(food));

buuza.ingredients.splice(2, 1); //delete mutton

alert(buuza.ingredients);
food.unshift(buuza); //add buuza

alert(JSON.stringify(food));

let myPriсe = `All price = ${pizza.price + buuza.price + pasta.priсe + cake.priсe}`;
alert(myPriсe);

food.splice(1, 3); //delete all except buuza
alert(JSON.stringify(food)) 