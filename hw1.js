// Дан массив с налогами в виде дробного числа
// Используя forEach посчитайте зараплату после налогов
const taxes = {
    vat: 0.20,
    unemployement: 0.016,
    insurance: 0.008,
    pension: 0.002
}
let salary = 2000;

const taxesArr = Object.values(taxes);
// console.log(taxesArr);
const tax =[];
taxesArr.forEach(num=>{
    tax.push(num*salary)
});
// console.log(tax);

const initialValue = 0;
const sumWithInitial = tax.reduce(
  (accumulator, currentValue) => accumulator + currentValue,
  initialValue
);

console.log(`Netto salary is ${salary-sumWithInitial}`);
    
    


// Для каждого человека в заданом массиве выведете строку
// Hello 'name' 'surname'! You are 'age' years old.
const people = [['Jack', 'Smith', 25], ['Mary', 'Gold', 30], ['Sarah', 'Brown', 18], ['Bob', 'Summers', 20]];
people.forEach(person=>{
    console.log(`Hello ${person[0]} ${person[1]}! You are ${person[2]} years old. `)
});



// Задан список чисел и два пустых массива
// Зполните массив primeSquares квадратами чисел
// Так чтобы числа в массиве были в порядке возрастания
// А массив primeCubes кубами чисел
// Так чтобы числа в массиве были в порядке убывания
const primes = [1, 2, 3, 5, 7, 11, 13, 17, 19];
const primeSquares = [];
const primeCubes = [];
primes.forEach(sq=> {
    primeSquares.push(sq**2)});
    primeSquares.sort((a, b) => b - a);
    console.log(primeSquares);

primes.forEach(cubes=> {
    primeCubes.push(cubes**3)});
    primeCubes.sort((a, b) => b - a);

    console.log(primeCubes);