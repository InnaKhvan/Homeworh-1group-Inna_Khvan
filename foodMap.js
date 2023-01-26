import food from "./food.json" assert {type: 'json'};
import ingPrice from "../ingPrice.json" assert {type: 'json'};

let costSum = food.map(function (foodItem) {
    let costPrice = foodItem.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    foodItem.cost = costPrice
    return foodItem
});