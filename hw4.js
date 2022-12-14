// 1. Создайте массив из следующих значений
// '455'
// 87.15
// true
// undefined
// 7
// null
// 'false'
//     []
// {}
// Выведите информацию о типе каждого элемента в консоли.
//     Если элемент это число, прибавте к нему 3


console.log('===========task_1============');

let array1 = ['455', 87.15, true, 'undefined', 7, 'null', 'false', [], {}];

for (let key in array1) {
    if (typeof array1[key] === 'number') {
        array1[key] += 3;
    }
    console.log(key, typeof array1[key], array1[key]);
}


// 2. Напишите программу, которая спрашивает у пользователя целое число. Создайте массив из случайных элементов, длинной в это число. Случайные чила долны быть в диапазоне 0 до 10. Используйте методы Math.random() и Math.floor() для реализации.
//     Выведите содержимое массива консоль.
//
//     Скопируйте массив в новый массив. Каждый третий элемент нового массива умножте на 3.
// Выведите содержимое нового массива в консоли. Подсказака. ПОМНИТЕ ПРО ССЫЛКИ НА МАССИВ ПРИ КОПИРОВАНИИ;) Object.assign([], arr)
//

console.log('===========task_2============');

let someNumber = +prompt('Enter some number')
let array2 = [];
for (let i = 0; i < someNumber; i++) {
    array2.push(Math.floor(Math.random() * 11));
}
console.log(array2);

let array3 = array2.slice();
for (let i = 2; i < array3.length; i+=3) {
    array3[i] *= 3;
}
console.log(array3);


// 3. Создайте объект student1 со свойствами firstName, lastName и mark;
// Скопируйте объект student1 в новый объект student2 с помощью spread оператора ( ... ) и измените значение mark;
// Скопируйте объект student1 в новый объект student3 с помощью Object.assign() и измените значение mark;
// Посчитайте среднюю оценку по группе (тоесть между 3я новыми объектами)
//
// Просто получить значения свойства mark у каждого студента через точку или []
// Выведите полученные результаты в консоль.
//
//     Отобразите все ключи и значения объекта student1 в виде:
//     ключ - значение
//     ключ - значение
//
// Используя цыкл

console.log('===========task_3============');

const student1 = {
    firstName: 'John',
    'lastName': 'Smith',
    mark: 5,
};
console.log(student1);

const student2 = {...student1};
student2.mark = 2;
console.log(student2);

const student3 = Object.assign({}, student1);
student3.mark = 4;
console.log(student3);

let sum = 0;
let grope = [student1, student2, student3];
for (let key of grope) {
    sum += key.mark;
    console.log(`${key.firstName} - ${key.mark}`);
}
console.log(`sum - ${sum}`);

let averageMark = sum / grope.length;
console.log(`средняя оценка - ${averageMark}`);

for (let key in student1) {
    console.log(`${key} - ${student1[key]}`);
}



