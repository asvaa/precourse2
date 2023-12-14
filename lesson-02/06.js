//Давайте-ка нашего парня, чтобы он не зазнавался переселим в ‘city’ 'Bobryisk' ,
//а потом опять же убедимся в консоли, что мы все правильно скопировали.
//(Т.е. необходимо создать глубокую копию объекта passportWithAddress, а затем 'LA' заменить на 'Bobryisk' в city).
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
    country: "USA",
    city: "LA",
  },
};

let copiedPassport = JSON.parse(JSON.stringify(passportWithAddress));
copiedPassport.address.city = "Bobryisk";
console.log("Исходный объект passportWithAddress:");
console.log(passportWithAddress);
console.log("Глубокая копия с измененным городом:");
console.log(copiedPassport);
