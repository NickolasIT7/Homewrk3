//Функции
//Написать функцию, которая принимает 2 числа и возвращает -1, если первое меньше,
//чем второе; 1 - если первое больше, чем второе; и 0 - если числа равны.
var a = +prompt('введите первое число');
var b = +prompt('введите второе число');
function compare(a, b) {
    if (a < b)
        return -1;
    if (a > b)
        return 1;
    else
        (a == b);
    return 0;
}
// Написать функцию, которая вычисляет факториал переданного ей числа
function factorial(a) {
    var fact = 1;
    if (a == 0)
        return fact;
    for (var i = 1; i <= a; i++) {
        fact = fact * i;
    }
    return fact;
}
alert(factorial(5));
// Написать функцию, которая принимает три отдельные цифры и превращает их в одно число.
//Написать функцию, которая принимает длину и ширину прямоугольника и вычисляет его площадь.
//Если в функцию передали 1 парамаетр, то она вычисляет площать квадрата.
// function square(a,b) {
// return a * b; {
// if (b == undefined) {
// return a**2;    
// }  
// }    
// }
// let a = +(prompt('введите первое число') as string)
// let b = +(prompt('введите первое число') as string) 
// console.log(square(a,b));
//Написать функцию, которая проверяет, является ли переданное ей число совершенным. 
//Совершенное число – это число, равное сумме всех своих собственных делителей.
// function perfect(a) {
// var temp = 0
// for (let i = 1; i <= a/2, i++;) {
// if (a % i ===0) {
// temp +=i;    
// }
// }   
// if (temp === a && temp !== 0) {
// document.writeln ('Это идеальное число')    
// } else {
// document.writeln ('Это не идеальное число')    
// }
// }
// perfect (6);
//Написать функцию, которая принимает минимальное и
// максимальное значения для диапазона, и выводит только
// те числа из диапазона, которые являются совершенными. 
// const isPrime = (num) => {
//     let divisor = 2;
//     while (divisor <= Math.sqrt(num)) {
//       if (num % divisor === 0) {
//         return false;
//       }
//       divisor += 1;
//     }
//     return true;
//   }
// function getPerfect(a,b) {
// var temp = 0
// for (let i = a; i <= b; i += 1) {
//     if (isPrime((2 ** i) - 1)) {
//       const num = ((2 ** i) - 1) * 2 ** (i - 1);
//       console.log(num);
//     }
//     continue;
// }
// }
//Написать функцию, которая принимает время (часы, минуты, секунды) и выводит его на экран в формате «чч:мм:сс».
//Написать функцию, которая принимает часы, минуты и
//секунды и возвращает это время в секундах.
//Написать функцию, которая принимает количество секунд,
// переводит их в часы, минуты и секунды и возвращает в виде строки «чч:мм:сс»
// Написатьфункцию, которая считает разницу между датами.
// Функция принимает 6 параметров, которые описывают 2 даты, и возвращает результат в виде строки «чч:мм:сс»
