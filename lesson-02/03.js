//Передай такие числа, что бы у нас выдало надпись 'Something wrong!'
const giveMeRightNumbers = (value1, value2, maximum) => {
    if (value1 === value2 || value1 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}
giveMeRightNumbers(204, 200, 200)
