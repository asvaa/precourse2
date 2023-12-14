//Исправь функцию так что бы она работала? и получи 'Something wrong!' 
//передав числа, которые вызовут это условие. Обрати внимание здесь «и» (&&), а не или(||)
const giveMeRightCondition = (value1, value2, maximum) => {
    if (value1 === value2 && value1 <= maximum) {
        console.log('Success!');
    } else {
        console.log('Something wrong!');
    }
}

giveMeRightCondition(202, 200, 200);
