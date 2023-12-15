//Давайте-ка нашего парня, чтобы он не зазнавался переселим в ‘city’ 'Bobryisk' ,
//а потом опять же убедимся в консоли, что мы все правильно скопировали.
//(Т.е. необходимо создать глубокую копию объекта passportWithAddress, а затем 'LA' заменить на 'Bobryisk' в city).
let passportWithAddress = {
  name: "Petr",
  surname: "Petrov",
  address: {
      country: "USA",
      city: "LA"
  }
};


let deepCopyPassport = JSON.parse(JSON.stringify(passportWithAddress));


deepCopyPassport.address.city = 'Bobryisk';


console.log(passportWithAddress);
console.log( deepCopyPassport);
