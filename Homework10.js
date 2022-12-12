function info(a, b) {
    if (a < b) {
        return a;
    }
    else { return b };
}
let a = prompt('Введи 1ое число');
let b = prompt('Введи 2ое число');
let result = info(a, b);
alert('Наименьшее число - ' + result);

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

function calcFoodProfit(ingredients, ingredientsCost, foodPrice) {
    let costPrice = 0;
    for (let i = 0; i < ingredients.length; i++) {
        let name = ingredients[i];
        costPrice += ingredientsCost[name];
    }
    return foodPrice - costPrice;
}

let pizzaProfit = calcFoodProfit(pizza.ingredients, ingPrice, pizza.price);
pizza.profit = calcFoodProfit(pizza.ingredients, ingPrice, pizza.price);
alert('Профит пиццы - ' + pizzaProfit);

let buuzaProfit = calcFoodProfit(buuza.ingredients, ingPrice, buuza.price);
buuza.profit = calcFoodProfit(buuza.ingredients, ingPrice, buuza.price);
alert('Профит буузы - ' + buuzaProfit);

let pastaProfit = calcFoodProfit(pasta.ingredients, ingPrice, pasta.price);
pasta.profit = calcFoodProfit(pasta.ingredients, ingPrice, pasta.price);
alert('Профит пасты - ' + pastaProfit);

let cakeProfit = calcFoodProfit(cake.ingredients, ingPrice, cake.price);
cake.profit = calcFoodProfit(cake.ingredients, ingPrice, cake.price);
alert('Профит торта - ' + cakeProfit);