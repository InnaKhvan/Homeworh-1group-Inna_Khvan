for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        alert(i);
    }
}

for (i = 0; ; i++) {
    if (i === 5)
        break; {
        alert(i);
    }
}

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
};

let buuza = {
    name: 'Буузы',
    ingredients: ['dough', 'meat', 'mutton'],
    price: 90,
};

let pasta = {
    name: 'Паста',
    ingredients: ['souce', 'spaghetti'],
    priсe: 100,
};

let cake = {
    name: 'Торт',
    ingredients: ['dough', 'sugar', 'fruit'],
    priсe: 120,
};

let pizzaSum = 0;
for (let i = 0; i < pizza.ingredients.length; i++) {
    let name = pizza.ingredients[i];
    pizzaSum += ingPrice[name];
}
alert(`Себестоимость пиццы = ${pizzaSum}`);

let buuzaSum = 0;
for (let i = 0; i < buuza.ingredients.length; i++) {
    let name = buuza.ingredients[i];
    buuzaSum += ingPrice[name];;
}
alert(`Себестоимость бууз = ${buuzaSum}`);

let pastaSum = 0;
for (let i = 0; i < pasta.ingredients.length; i++) {
    let name = pasta.ingredients[i];
    pastaSum += ingPrice[name];;
}
alert(`Себестоимость пасты = ${pastaSum}`);

let cakeSum = 0;
for (let i = 0; i < cake.ingredients.length; i++) {
    let name = cake.ingredients[i];
    cakeSum += ingPrice[name];;
}
alert(`Себестоимость торта = ${cakeSum}`);


alert(`Профит для каждого блюда: пицца - ${pizza.price - pastaSum}, буузы - ${buuza.price - buuzaSum}, паста - ${pasta.priсe - pastaSum}, торт - ${cake.priсe - cakeSum}.`)