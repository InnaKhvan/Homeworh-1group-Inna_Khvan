for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
        console.log(i);
    }
}

for (i = 0; ; i++) {
    if (i === 5)
        break; {
        console.log(i);
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
    costPrice: 0,
    profit: 0,
};

let buuza = {
    name: 'Буузы',
    ingredients: ['dough', 'meat', 'mutton'],
    price: 90,
    costPrice: 0,
    profit: 0,
};

let pasta = {
    name: 'Паста',
    ingredients: ['souce', 'spaghetti'],
    price: 100,
    costPrice: 0,
    profit: 0,
};

let cake = {
    name: 'Торт',
    ingredients: ['dough', 'sugar', 'fruit'],
    price: 120,
    costPrice: 0,
    profit: 0,
};

let food = [pizza, buuza, pasta, cake];

for (let i = 0; i < food.length; i++) {
    for (let number = 0; number < food[i].ingredients.length; number++) {
        let name = food[i].ingredients[number];
        food[i].costPrice += ingPrice[name];
    }
    food[i].profit = food[i].price - food[i].costPrice;
    alert('Профит для блюда "' + food[i].name + '" - ' + food[i].profit);
}