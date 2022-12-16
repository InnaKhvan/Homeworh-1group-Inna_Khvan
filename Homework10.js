function info(a, b) {
    if (a < b) {
        return a;
    }
    else { return b };
}
let a = prompt('Введи 1ое число');
let b = prompt('Введи 2ое число');
a = Number(a);
b = Number(b);
let result = info(a, b);
alert('Наименьшее число - ' + result);

import foodObj from "./food.json" assert {type: 'json'};
import ingPrice from "./ingPrice.json" assert {type: 'json'}; 

function calcFoodProfit(ingredients, ingredientsCost, foodPrice) {
    let costPrice = 0;
    for (let i = 0; i < ingredients.length; i++) {
        let name = ingredients[i];
        costPrice += ingredientsCost[name];
    }
    return foodPrice - costPrice;
}

let text = "";
for (let i = 0; i < foodObj.food.length; i++) {
    let profit = '"'+ foodObj.food[i].name + '" - ' + (calcFoodProfit(foodObj.food[i].ingredients, ingPrice, foodObj.food[i].price)) + '. ';
text += profit;}
alert('Профит для блюда ' + text)