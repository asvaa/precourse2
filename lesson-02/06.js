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
let deepCopyPassport = JSON.parse(JSON.stringify(passportWithAddress));

// Меняем значение city на 'Bobryisk' в глубокой копии
deepCopyPassport.address.city = 'Bobryisk';

// Выводим исходный объект и его копию для проверки
console.log('Исходный паспорт с адресом:', passportWithAddress);
console.log('Глубокая копия паспорта с измененным городом:', deepCopyPassport);
