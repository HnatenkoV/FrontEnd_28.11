/*  ========== lesson 1 ==========
    alert('Home Work');
    let someNumber = 123456;
    let someString = 'IT School Hillel';
    let someBoolean = true;
    console.log('value:' + someNumber + ';' + ' ' + 'type:' + typeof someNumber);
    console.log('value:' + someString + ';' + ' ' + 'type:' + typeof someString);
    console.log('value:' + someBoolean + ';' + ' '  + 'type:' + typeof someBoolean);

/* ===========lesson2============ */

const num1 = 269;
console.log(`${num1.toString(2)}`);
console.log(`${num1.toString(16)}`);

console.log('=================================');

const num2 = +prompt(`Enter the number`);
console.log(`${+num2 + 2}`);
console.log(`${+num2 - 2}`);
console.log(`${+num2 * 2}`);
console.log(`${+num2 / 2}`);
console.log(`string length: ${num2.length}`);

console.log('=================================');

const num3 = 0.51000002;
console.log(`${+num3.toFixed(2) + 2}`);

console.log('=================================');

const str = 'the quick brown fox jumps over the lazy dogs back';
const str_two = 'brown fox jumps'
console.log(`${str.indexOf(str_two, 0)}`)
console.log(`${str.toUpperCase()}`);

console.log('=================================');

const a = 1;
const b = 2;
const c = 3;
const d = 3;
console.log(`${(a !== b) || (b !== c) || (c === d)}`);
console.log(`${(a <= b) || (b <= c) || (c >= d)}`);
console.log(`${(a !== b) && (b !== c) && (c === d)}`);
console.log(`${(a < b) && (b < c) && (c >= d)}`);

console.log('=================================');

const num4 = 10;
const num5 = '10';
console.log(`${(num5 == num4)}; ${(num5 === num4)}`);
console.log(`${(num4 === num4)}; ${(num4 == num4)}`);
console.log(`${(num5 === num5)}; ${(num5 == num5)}`);

const num6 = 1;
const num7 = 5;
const num8 = null;
console.log(`${num6 ?? num7}; ${num7 ?? num6}; ${num8 ?? num6}`);


console.log('=============Lesson3============');
//
// 1) Напишите программу, которая спрашивает у пользователя его имя и выводит в консоли текстовое поздравление.
// Happy birthday to you
// Happy birthday to you
// Happy birthday, dear <name>
// Happy birthday to you

let name = prompt('Enter your name');
let str = '';
for (let i = 0; i < 4; i++) {
    if (i === 2) {
        str += `Happy birthday to you, dear ${name}\n`;
    }  else {
        str += "Happy birthday to you\n";
    }
}
console.log(str);


console.log('==================================');

// 2) Сформируйте строку '.#.#.#.#.#.#.#' с помощью цикла for, где количество повторений символов '.#' задает пользователь через команду prompt().

let someNumber1 = +prompt('amount .#');
let someStr = '';
for (let i = 0; i < someNumber1; i++) {
    someStr += '.#';
}
console.log(someStr);

console.log('==================================');

//     3)Напишите программу, котрая спрашивает у пользователя число и суммирует все нечетные числа, до этого числа.
//     Если пользователь не ввел число, вызвать команду prompt() c текстом "Invalid. You should enter a number" и попросить его заново ввести число.
//     Результат отобразите в консоли.
//
let someNumber2 = +prompt('Enter please number');
let summ = 0;
if (someNumber2 === null) {
    alert('invalid. You should enter a number');
    +prompt('Enter please number');
} else if (someNumber2 === '') {
    alert('invalid. You should enter a number');
    +prompt('Enter please number');
}
for (let i = 0; i < someNumber2; i++) {
    if (i % 2 !== 0) {
        summ += i
    }
}
console.log(summ);

console.log('==================================');

// 4) Напишите бесконечный цикл, который прерывается при помощи команды break, когда Math.random() > 0.7. Выведите в консоль число, которое прерывает цикл и отобразите количество итераций цикла.
//
let iterations = 0;
while (true) {
    let someRandom = Math.random();
    iterations++;
    if (someRandom > 0.7) {
        console.log(`Loop was finished because of: ${someRandom} \n Number of iterations: ${iterations}`)
        break;
    }
}

console.log('==================================');

// 5) Напишите цикл от 1 до 50, в котором будет выводится поочередно числа от 1 до 50, при этом:
//     Если число делится на 3 без остатка, то выводить не это число, а слово 'Div by 3';
// Если число делится на 5 без остатка, то выводить не это число, а слово 'Div by 5';
// Если число делится и на 3 и на 5, то выводить не это число, а слово 'Div by 5 and 3';

let someAnswer = 0;
for (let i = 1; i <= 50; i++) {
    someAnswer = ''
    if (i % 3 === 0) {
        someAnswer += 'Div by 3'
    }
    if (i % 5 === 0) {
        someAnswer += 'Div by 5'
    } if (i % 3 === 0 && i % 5 === 0) {
        someAnswer += 'Div by 5 and 3'
    }
    console.log(`${someAnswer === '' ? i : someAnswer}`)
}

console.log('==================================');

// 6) Вывтдите текущую дату и время, учитывая часовой пояс
let date = new Date();
console.log(`${date.toString()}`)
