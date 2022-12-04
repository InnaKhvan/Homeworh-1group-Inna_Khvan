setTimeout(function () {
    const buuza = {
        name: '1',
        price: 90,
    };
    const pizza = {
        name: '2',
        price: 150,
    };
    const pasta = {
        name: '3',
        price: 100,
    };
    const cake = {
        name: '4',
        price: 120,
    };

    let order1 = 0;
    let order2 = 0;
    let order3 = 0;
    let order4 = 0;

    let food = [buuza, pizza, pasta, cake];

    let choice = prompt('Введите номер блюда?', '1,2,3,4');
    if (food[choice - 1]) { order1 = prompt('Количество порций?') }
    let result = prompt('Что-нибудь еще?', 'Да/Нет')
    if (result == 'Да' || result == 'да') {
        choice = prompt('Введите номер блюда?', '1,2,3,4')
        if (food[choice - 1]) { order2 = prompt('Количество порций?') }
        let result1 = prompt('Что-нибудь еще?', 'Да/Нет')
        if (result1 == 'Да' || result1 == 'да') {
            choice = prompt('Введите номер блюда?', '1,2,3,4')
            if (food[choice - 1]) { order3 = prompt('Количество порций?') }
            let result2 = prompt('Что-нибудь еще?', 'Да/Нет')
            if (result2 == 'Да' || result2 == 'да') {
                choice = prompt('Введите номер блюда?', '1,2,3,4')
                if (food[choice - 1]) { order4 = prompt('Количество порций?') }
            }
            else if (result2 == 'Нет' || result2 == 'нет') { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }
            else { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }
        }
        else if (result1 == 'Нет' || result1 == 'нет') { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }
        else { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }
    }
    else if (result == 'Нет' || result == 'нет') { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }
    else { alert(`Стоимость вашего заказа = ${(order1 * buuza.price) + (order2 * pizza.price) + (order3 * pasta.price) + (order4 * cake.price)}`) }

}, 1000)