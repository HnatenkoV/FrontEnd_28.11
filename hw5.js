
// Напишите функцию fillArray, которая создает массив и заполняет ее предоставленным значением.
//     let array = fillArray(10, 'qwerty'), // ['qwerty', 'qwerty', 'qwerty'...]
//     где 10 - это длинна массива, а 'qwerty' его значения

console.log('===============task_1==============');

function fillArray(arraySize, value) {
    let arr = Array(arraySize).fill(value);
    console.log(arr);
}

fillArray(10, 'qwerty')
fillArray(4, 'hello')

// 2) Напишите функцию filterArray, которая очищает массив от нежелательных значений (false, undefined, '', 0, null), СПИСОК КОТОРЫХ ПЕРЕДАН ВВИДЕ АРГУМЕНТОВ ФУНКЦИИ.
//     let array = [0, 1, 2, null, undefined, 'qwerty', false];
// let result = filterArray(array, false, undefined, '', 0, null);
// // result - [1,2, 'qwerty'];

console.log('===============task_2==============');
let array = [0, 1, 2, null, undefined, 'qwerty', false];

function filterArray (array, ...args) {
    args.forEach(arg => array = array.filter(el => el !== arg));
    return array
}
let result = filterArray(array, false, undefined, '', 0, null);
console.log(result);

function filterArray1 (arr, ...args) {
    for (let i  of arr) {
        for (let ii of args) {
            if (args[ii] === arr[i]) {
                arr.splice(i, 1);
            }
        }
    }
    return arr;
}

console.log(filterArray1(array, false, undefined, '', 0, null));

// 3) Напишите функцию calcSum, которая вернет сумму всех входящих параметров функции.
//     let sum1 = calcSum(0); // 0
// let sum1 = calcSum(1,2,3); // 6
// let sum1 = calcSum(5,0,10, 1, 5); // 21

console.log('===============task_3==============');

function calcSum () {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum)
}
calcSum(0);
calcSum(1,2,3);
calcSum(5,0,10, 1, 5);


// 4) Напишите функцию декортор, которая будет выводить все данные ей строки добавля в начлч и в конец строку: =====
// как должен выглядить код:
//     createPipe - то что вы должны реализовать
//
// const pipeFunction = createPipe();
// pipeFunction('some text you like');
// // output: ===== 'some text you like' =====

console.log('===============task_4==============');

function pipeFunction() {
    const createPipe = ' ===== ';
    return(text) => `${createPipe} ${text} ${createPipe}`;
}

const make = pipeFunction('some text you like')
console.log(make('Hello JS'))   /* <-----------первый вариант */


function createPipe(decor) {
    return function (txt) {
        console.log(`${decor} ${txt} ${decor}`);
    }
}

const pipeFunctionNew = createPipe( ' ===== ');
pipeFunctionNew('some text you like');
createPipe(); /* <-----------первый вариант */


// 5) Создайте функцию, которая принемает 2а аругемнта, текст и функцию для его вывода
// вызовете ее дважды таким образом, чтобы в первый раз выво строки был в консоль, а второй раз в алерте.

console.log('===============task_5==============');

function textOutput (text, someFunc) {
    someFunc (text);
}

textOutput('это какой то текст',text => console.log(text));
textOutput('это какой то текст', text => alert(text));

