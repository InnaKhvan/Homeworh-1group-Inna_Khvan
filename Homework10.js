function info(a, b) {
    if (a < b) {
        return a;
    }
    else { return b };
}
let a = +prompt('Введи 1ое число');
let b = +prompt('Введи 2ое число');
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
for (let i = 0; i < foodObj.length; i++) {
    let profit = '"'+ foodObj[i].name + '" - ' + (calcFoodProfit(foodObj[i].ingredients, ingPrice, foodObj[i].price)) + '. ';
text += profit;}
alert('Профит для блюда ' + text)