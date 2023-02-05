// const userName = [
//   "Петрик Ольга Ивановна",
//   "Головань Евгения Сергеевна",
//   "Гнатюк Ирина Петровна",
// ];

// userName.sort();
// let finish = [];

// for (const a of userName) {
//   let result = "";

//   for (const b of a.split(" ")) {
//     result = b[0] + "." + result;
//   }
//   finish.push(result);
// }
// console.log(finish);
// finish.push(result.join(" "));
// console.log(finish);

// const num = 45678;
// let number = num.toString();
// let result = "";
// for (let i = 0; i < number.length; i++) {
//   result = number[i] + result;
// }
// console.log(result);

// глибиною вкладеності:
const resultsArray = [1, 2, [3, [4]]];
let productOfArray = 1;
let resultA = resultsArray.flat(Infinity);
console.log(resultA);
for (let i = 0; i <= resultsArray.length; i++) {
  productOfArray *= resultA[i];
}
console.log(productOfArray);
// тут ваш код...
