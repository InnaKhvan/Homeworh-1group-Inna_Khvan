import baza from "./baza.json" assert {type: 'json'};
let name = prompt('Ваше имя?', '');
let password = prompt('Ваш пароль?', '');


if (baza[name] !== undefined && baza[name] == password) {
    alert("Вы вошли")
}
else if (baza[name] == undefined) {
    alert("Такого пользователя не существует")
}
else if (password != baza[name] || password == null || password == undefined) {
    alert("Неправильный пароль")
}

