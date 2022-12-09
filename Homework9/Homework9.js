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
};

let buuza = {
    name: 'Буузы',
    ingredients: ['dough', 'meat', 'mutton'],
    price: 90,
};

let pasta = {
    name: 'Паста',
    ingredients: ['souce', 'spaghetti'],
    price: 100,
};

let cake = {
    name: 'Торт',
    ingredients: ['dough', 'sugar', 'fruit'],
    price: 120,
};

let food = [pizza, buuza, pasta, cake];
let text = "";
for (let i = 0; i < food.length; i++) {
    let costPrice = 0;
    let profit = 0;
    for (let number = 0; number < food[i].ingredients.length; number++) {
        let name = food[i].ingredients[number];
        costPrice += ingPrice[name];
        console.log(costPrice);
    }
        profit = '"'+ food[i].name + '" - ' + (food[i].price - costPrice) + '. ';
       text += profit
}

alert('Профит для блюда ' + text);
