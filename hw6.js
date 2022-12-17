//
// 1.Создайте массив длинною в 15 елементов, заполните его случайными числами от 0 - 20. ВАЖНО, ЭТОТ МАССИВИ БУДЕТ УЧАВСТВОВАТЬ ВО ВСЕХ ЗАДАНИЯХ НИЖЕ. И НЕ ДОЛЖЕН БЫТЬ ИЗМЕНЕН! ВСЕ ОПЕРАЦИИ БУДУТ НАД ЭТИМ МАССИВОМ.
// 2.Выведите все элементы которые делятся на 3 в консоль
// 3.Выведите первый элемент, который больше 7, если такого нет, напишите что все элементы меньше 7и
// 4.Выведете массив. в котором каждый элемент умножен на 2. (ИСХОДНЫЙ МАССИВ ИСПОЛЬЗУЕМ ИЗ ПУНКТА 1)
// 5.Сложить все четные элементы массива
// 6.Удалите из массива первый элемент и выведете резаультат, затем удалите последний элемент и выведите результат

// ЗАДАНИЕ СО ЗВЕЗДОЧКОЙ*
//
// ДАНО:
// const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
// const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];
//
// Определить какие элементы массива arrayTwo есть в arrayOne.
// вывести массив с этими элеентами
//

console.log('================task_1================');

const newArray = [...Array(15)].map( newArray => Math.floor(Math.random() * 20) );
console.log(newArray);

console.log('================task_2================');

const newArray2 = newArray.filter(newArray => newArray % 3 === 0);

console.log(newArray2);

console.log('================task_3================');

const newElement = newArray.find(newArray => newArray > 7);
console.log(newElement ? newElement : 'все элементы меньше 7и');

console.log('================task_4================');

const newArray3 = newArray.map((num) => num * 2);
console.log(newArray3);

console.log('================task_5================');

const newArray4 = newArray.filter(newArray => newArray % 2 === 0);
console.log(newArray4);
const initialValue = 0;
const sumWithInitial = newArray4.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    initialValue
);
console.log(sumWithInitial);

console.log('================task_6================');

newArray.shift();
console.log(newArray);

newArray.pop();
console.log(newArray);

console.log('================TASK WITH STAR================');

const arrayOne = ['dog', 'cat', 'bird', 'rabbit', 'horse'];
const arrayTwo = ['apple', 'car', 'cat', 'ball', 'horse'];

const newArray5 = arrayOne.filter(element => arrayTwo.includes(element));
console.log(newArray5);