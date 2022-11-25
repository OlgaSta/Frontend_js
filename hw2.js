// Напишите программу которая проверит длину каждого имя в массиве
// Если длина меньше или равна 5 символам - добавить в массив shortNames
// *** Сложное *** удалить это же имя из массива users
// Решение задачи с удалением из массива
const users = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
const shortNames = [];

users.forEach(names => {
    if (names.length <= 5){
        shortNames.push(names);
    }
})
console.log(shortNames);




// Напишите функцию, которая для каждого имени в массиве
// выведет в консоль строку 
// Hello ИМЯ. Your name is ДЛИНА characters long!
console.log('');

const names = ['Jack', 'Mariah', 'Sarah', 'Jonathan', 'Piere', 'Bob', 'Samantha', 'Mary'];
function sayHello(nam) {
    names.forEach(nam => console.log(`Hello ${nam}. Your name is ${nam.length} characters long!`))  
}
    sayHello();


// напишите функцию которая примет объект в качестве аргумента
// Функция должна вернуть одну строку
// Your Honda Civic (is popular / is not popular). (It is not / it is) covered by warranty anymore!
// Вывод в скобках (is popular) зависит от свойства popular в объекте (т.е. если False то пишем что не популярная)
// Вывод в скобках (Is covered by warranty) зависит от свойства mileage (т.е. если больше или равно 100000 то нет гарантии)

console.log('');

const myCar = {
    make: 'Honda',
    model: 'Civic',
    popular: false,
    mileage: 10000
}
function carPopular() {
    if (myCar.popular){
    console.log(`Your ${myCar.make} ${myCar.model} is popular.`);
    } else   
        { console.log(`Your ${myCar.make} ${myCar.model} is not popular.`); 
} 

if (myCar.mileage >= 100000){
    console.log( 'Its is not covered by warrenty anymore');
    } else { console.log('Its is covered by warrenty');
    }
}

carPopular(myCar)

// Напишите функцию которая принимает два числа в качестве аргумента
// Если число отрицательное, то приводит его к положительному (-10 => 10)
// И складывает их

console.log('');

const numb = (x,y)=> {
    // let x = 7;

   if (x > 0 && y > 0) {
    console.log(x + y);
   } 
   if (x < 0 && y > 0 ){
    x = -x;
    console.log(x+y);
   }
   if (x > 0 && y < 0){
    y = -y;
    console.log(x + y);
   }
   if (x < 0 && y < 0) {
    x = -x;
    y =-y
    console.log(x+y);
   }
    }

   numb(10, 3)






// // Напишите функцию, которая складывает только положительные числа
// // если одно из чисел отрицательное, то выводит строку (одно из чисел негативное)
console.log('');
const num2 = (x, y) => {
if (x >= 0 && y >= 0){
    console.log(x + y);
} else if ((x > 0 && y < 0) || (x < 0 && y > 0)){
    console.log('One of the numbers is negative');
} else {
    console.log('Both numbers are negative');
}
}
 num2(8, -9)