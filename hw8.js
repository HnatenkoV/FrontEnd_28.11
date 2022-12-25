"use strict"
// 1) Создайте объект triangle со следующими свойствами: aSide, bSide, cSide.
//     Создайте метод setValues(), который вызывает функцию prompt и заполняет свойства aSide, bSide, cSide значениями.
//     Создайте в объекте triangle метод для расчета периметра треугольника.
//     Создайте в объекте triangle метод, который проверяет является ли треугольник
// равносторонним:
//     Выведите информацию о созданном треугольнике (включая результат выполнения
// всех методов) в консоль.

    /* Initial object */
    console.log('============Lesson_8(task_1)==============');

    let triangle = {
    aSide: 0,
    bSide: 0,
    cSide: 0,

    setValues: function (setSideValue) {
    this.aSide = +prompt("please enter a value = aSide");
    this.bSide = +prompt("please enter a value = bSide");
    this.cSide = +prompt("please enter a value = cSide");
    console.log(`aSide = ${this.aSide}, bSide = ${this.bSide}, cSide = ${this.cSide}`);
    },

    getPerimeter: function() {
        let perimetr = (this.aSide + this.bSide + this.cSide);
        this.perimetr = perimetr;
        return perimetr;
    },
    isEqualSides: function() {
        return (this.aSide === this.bSide) && (this.aSide === this.cSide) && (this.bSide === this.cSide);
    }
}

triangle.setValues();
console.log(triangle.getPerimeter());
console.log(triangle.isEqualSides());

// В консоли ожидаю увидеть:
//
// triangle.setValues(); // for examle 3 3 3
// console.log(triangle.getPerimeter()); // 9
// console.log(triangle.isEqualSides()); // true

console.log('============task_2==============');
// 2) 3)* Дан объект country и функция format():
//
var country = {
    name: 'Ukraine',
    language: 'ukrainian',
    capital: {
        name: 'Kyiv',
        population: 2907817,
        area: 847.66
    }
};

function format(start, end) {
    console.log(start + this.name + end);
}
// Допишите код так, чтобы в консоли появились строки указанные в комментариях.
//
format.call(country, '', ''); // Ukraine
format.apply(country, [['['], [']']]); // [Ukraine]
format.call(country.capital, '', ''); // Kyiv
format.apply(country.capital, ['', '']); // Kyiv
format.apply(name, ['', '']); // undefined
//
// 3) Со звездочкой: реализовать функцию createCalculator, ваш код должен находиться только внутри этой функции, таким образом что бы код ниже работал и выдовал в консоль то что написано в коментариях к каждой строке. Подсказка: вернуть нужно объект с функциями и использовать замыкания.
//
// function createCalculator(x) {
//     return function (y) {
//         return x + y;
//     }
// }
//
// const calculator = createCalculator(100);
//
// console.log(calculator(10))

console.log('============task_3==============');

function createCalculator(x) {
    let createCalculatorVar = x;
        return {
            add: function (y) {
                if (typeof y === "number") {
                    return createCalculatorVar += y;
                } else if (typeof y !==  "number") {
                    return NaN;
                }
            },
            sub: function (y) {
                if (typeof y === "number") {
                    return createCalculatorVar -= y;
                } else if (typeof y !== "number") {
                    return NaN;
                }
            }
        }
}

let calculator = createCalculator(100);

console.log(calculator.add(10));    // 110
console.log(calculator.add(10)); // 120
console.log(calculator.sub(20)); // 100
console.log(calculator.add('qwe')); // NaN