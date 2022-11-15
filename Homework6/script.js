const myName = "Инна";
const bithday = new Date(1991, 9, 31);
let now = new Date()
const myHome = "Казахстанe"

let strMyStory = `Меня зовут ${myName}. Я живу в ${myHome}. Мне  - ${now.getFullYear() - bithday.getFullYear()} год`;
console.log(strMyStory)
