//Дан объект passport. Создай его копию и поменяй имя с "Petr" на "Ivan",
//и убедись в консоли, что у объекта passport имя осталось "Petr",
//а у твоего нового объекта "Ivan".
let passport = {
  name: "Petr",
  surname: "Petrov",
};
// Создаем копию объекта passport
let myPassport = Object.assign({}, passport);
myPassport.name = "Ivan";
console.log("Имя в исходном объекте passport:", passport.name);
console.log("Имя в моем новом объекте myPassport:", myPassport.name);
