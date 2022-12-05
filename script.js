// for (let i = 2; i <= 10; i++) {
//     if (i % 2 == 0) {
//         conaole.log(i);
//     }
// }

// for (i = 0; ; i++) {
//     if (i === 5)
//         break; {
//         console.log(i);
//     }
// }

let ingPrice = {
    dough: 10,
    salami: 20,
    vegetables: 13,
    meat: 21,
    mutton: 18,
    souce: 30,
    spaghetti: 26,
    sugar: 8,
    fruit: 17,
}
let pizza = {
    name: 'Пицца',
    ingredients: ['dough', 'salami', 'vegetables'],
    price: 150,
    costPrice:0,
};

let buuza = {
    name: 'Буузы',
    ingredients: ['dough', 'meat', 'mutton'],
    price: 90,
    costPrice:0,
};

let pasta = {
    name: 'Паста',
    ingredients: ['souce', 'spaghetti'],
    priсe: 100,
    costPrice:0,
};

let cake = {
    name: 'Торт',
    ingredients: ['dough', 'sugar', 'fruit'],
    priсe: 120,
    costPrice:0,
};

let food = [pizza, buuza, pasta, cake];

for (let i = 0; i < food.length;i++){
    for (let number = 0; number < food[i].ingredients.length; number++){
let name = food[i].ingredients[number];
food[i].costPrice += ingPrice[name];
    }
   }

alert(`Профит для каждого блюда: пиццы - ${food[0].price - food[0].costPrice}, буузы - ${food[1].price - food[1].costPrice}, паста - ${food[2].price - food[2].costPrice}, торт - ${food[3].price - food[3].costPrice}.`)


// let pizzaSum = 0;
// for (let i = 0; i < pizza.ingredients.length; i++) {
//     let name = pizza.ingredients[i];
//     pizzaSum += ingPrice[name];
// }
// alert(`Себестоимость пиццы = ${pizzaSum}`);

// let buuzaSum = 0;
// for (let i = 0; i < buuza.ingredients.length; i++) {
//     let name = buuza.ingredients[i];
//     buuzaSum += ingPrice[name];;
// }
// alert(`Себестоимость бууз = ${buuzaSum}`);

// let pastaSum = 0;
// for (let i = 0; i < pasta.ingredients.length; i++) {
//     let name = pasta.ingredients[i];
//     pastaSum += ingPrice[name];;
// }
// alert(`Себестоимость пасты = ${pastaSum}`);

// let cakeSum = 0;
// for (let i = 0; i < cake.ingredients.length; i++) {
//     let name = cake.ingredients[i];
//     cakeSum += ingPrice[name];;
// }
// alert(`Себестоимость торта = ${cakeSum}`);


// alert(`Профит для каждого блюда: пицца - ${pizza.price - pizzaSum}, буузы - ${buuza.price - buuzaSum}, паста - ${pasta.priсe - pastaSum}, торт - ${cake.priсe - cakeSum}.`)