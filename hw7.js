// 1) Создайте массив frameworks со значениями: ‘AngularJS’, ‘jQuery’
// a. Добавьте в начало массива значение ‘Backbone.js’
// b. Добавьте в конец массива значения ‘ReactJS’ и ‘Vue.js’
// c. Добавьте в массив значение ‘CommonJS’ вторым элементом
// d. Найдите и удалите из массива значение ‘jQuery’ и выведите его в консоль со словами “Это здесь лишнее”

console.log('===============task_1==============');

let frameworks = ['AngularJS', 'jQuery'];
frameworks.unshift('Backbone.js');
console.log(frameworks);
frameworks.push('ReactJS', 'Vue.js');
console.log(frameworks);
frameworks.splice(2, 0, 'CommonJS');
console.log(frameworks);
let jQuery = frameworks.findIndex(frameworks => frameworks ===`jQuery`)
let newFrameworks = frameworks.filter(function(f) { return f !== 'jQuery' });
console.log(`Это здесь лишнее - ${frameworks[jQuery]}`)
console.log(newFrameworks);

//
// 2) Создайте функцию removeNegativeElements, которая удаляет из входящего массива все негативные числа.
//
//     РЕШИТЬ ДВУМЯ СПОСОБАМИ с ипользованием методов массива и просто циклами
//
// let result = removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
// let result = removeNegativeElements([-9, -21, -12]; // []
// let result = removeNegativeElements(['-102', 102]); // ['-102', 102]

console.log('===============task_2==============');

function removeNegativeElements (array) {
    let result = array.filter(array => array > -1 || typeof array !== "number" );
    console.log(result);
}
removeNegativeElements([-9, 2, 3, 0, -28, 'value']); // [2, 3, 0, 'value'];
removeNegativeElements([-9, -21, -12]); // []
removeNegativeElements(['-102', 102]); // ['-102', 102]

console.log('===============task_2.1==============');

function removeNegativeElements2 (array2) {
    let result = [];
    for (let i = 0; i < array2.length; i++) {
        if (array2[i] > 1 || typeof array2[i] !== "number") {
            result.push(array2[i]);
        }
    }
    console.log(result);
}

removeNegativeElements2([-9, 2, 3, 0, -28, 'value']);
removeNegativeElements2([-9, -21, -12]); // []
removeNegativeElements2(['-102', 102]); // ['-102', 102]


// 3) Создайте фнкцию getStringElements, которая возвращает входящий массив только со строковыми значениями.
//
//     РЕШИТЬ ДВУМЯ СПОСОБАМИ с ипользованием методов массива и просто циклами
//
// let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
// let result = getStringElements(arr); // ['green', 'web']
//

console.log('===============task_3==============');

function getStringElements (arr) {
    let result = arr.filter(arr => typeof arr === "string" ) ;
    console.log(result);
}

let arr = [1 , true , 42 , "red" , 64 , "green" , "web" , new Date() , -898 , false]
getStringElements(arr); // ['green', 'web']

console.log('===============task_3.1==============');

function getStringElements2 (arr2) {
    let result = [];
    for (let i = 0; i < arr2.length; i++) {
        if (typeof arr2[i] === "string") {
            result.push(arr2[i]);
        }
    }
    console.log(result);
}
getStringElements2(arr);

// ========= Задания по рекурсии НЕ ОБЯЗАТЕЛЬНЫ ========
//
// 2.1) Напищите функцияю, которая рикурсивно суммирует все элементы массива,
//     массв 10 элементов, заполнен случайными числами от 0 - 10, как в ДЗ ранее

const newArray = [...Array(10)].map( newArray => Math.floor(Math.random() * 10) );
console.log(newArray);


// function summ(arr) {
//     let sum = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (i !== 0 ) {
//             sum += arr[i]
//         }
//     }
//     return sum
// }
// console.log(summ(newArray));


function getSum (arr, sum) {
    if (sum === undefined) {
        sum = 0;
    }

    sum += arr.shift();

    if (arr.length !== 0) {
        sum = getSum(arr, sum);
    }
    return sum
}

console.log(getSum(newArray));
//
// 2.2) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3 5, 6, 10, 3]
// напишите функцию, рикурсивно сумирующую все элементы = 10
//

// 2.3) Дан массив const arr = [0, 2, 4, 5, 7, 10, 2, 3 5, 6, 10, 3]
// напишите функцию, которая рекурсивно ищет все элементы > 5 и возвращает их ввиде массива