import food from "./food.json" assert {type: 'json'};
import ingPrice from "./ingPrice.json" assert {type: 'json'};


food.forEach(function (element) {
    let costPrice = element.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    console.log(costPrice)
})

let costSum = food.map(function (foodItem) {
    let costPrice = foodItem.ingredients.reduce(function (sum, item) {
        return sum + ingPrice[item]
    }, 0)
    return foodItem.cost = costPrice
});
console.log(costSum)


console.log(food)



// Отфильтруйте меню по какой-то предельной стоимости (например блюда стоимостью менее 100 рублей).

// let foodLess = food.filter(foodItem => foodItem.price <= 100)
// console.log(foodLess);


// Определите, есть ли в меню хоть одно вегетарианское блюдо, используя some.

let vegetFood = food.some(function (foodElem) {
    if (foodElem ==! "meet" || "muton") {
        return true;
    } else {
        return false;
    }
});
console.log(vegetFood)


// Определите, полностью ли у вас вегетарианское меню с помощью every.
let vegetMenu = food.every(function (menuItem) {
    if (menuItem == "meet" || "muton") {
        return false;
    } else {
        return true;
    }
console.log(menuItem)
})
console.log(vegetMenu)


// // выбрали меньшe 100 по стоимости

// let foodLess = food.filter(foodItem => foodItem.price <= 100)
// console.log(foodLess);