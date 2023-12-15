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

// Создаем глубокую копию объекта passportWithAddress
let copiedPassport = JSON.parse(JSON.stringify(passportWithAddress));

// Меняем значение 'LA' на 'Bobryisk' в скопированном объекте
copiedPassport.address.city = 'Bobryisk';

// Выводим оригинальный объект и его копию для проверки
console.log("Оригинальный паспорт:", passportWithAddress);
console.log("Копия паспорта с изменениями:", copiedPassport);
