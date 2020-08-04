// 1.Создайте две переменные a = 7 и b = 9. Выведите в консоль результа умножения a на b.
let a = 7;
let b = 9;

console.log(a*b);




// 2.Создайте две переменные c = 7 и d = 9. Выведите на страницу результат деления c на d.
let c = 7;
let d = 9;

document.querySelector('.out').innerText = c / d;




// 3.Создайте две переменные e = 3 и f = 5. Выведите на страницу результат сложения e + f.
let e = 3;
let f = 5;

document.querySelector('.out-2').innerText = e + f;





// 4.Создайте две переменные e1 = '3' и f1 = 5. Выведите на страницу результат сложения e1 + f1. Объясните разницу.
let e1 = '3';
let f1 = 5;

document.querySelector('.out-3').innerText = e1 + f1;





// 5.Создайте две переменные e2 = 3 и f2 = 0. Выведите на страницу результат деления e2 на f2.
let e2= 3;
let f2 = 0;

document.querySelector('.out-4').innerText = e2 / f2;





// 6.Создайте две переменные e3 = 3 и f3 = 'Hello'. Выведите на страницу результат сложения двух переменных.
let e3 = 3;
let f3 = 'Hello';

document.querySelector('.out-5').innerText = e3 + f3;





// 7.Создайте две переменные e4 = 3 и f4 = 'Hello'. Выведите на страницу результат умножения двух переменных.
let e4 = 3;
let f4 = 'Hello';

document.querySelector('.out-6').innerText = e4 * f4;





// 8.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит в консоль то, что пользователь ввел в input.
let inp1 = document.querySelector('.inp1');
let btn1 = document.querySelector('.btn1');

btn1.onclick = function(){
  console.log(inp1.value);
}



// 9.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу, что пользователь ввел в input.
// Добавьте очистку input после нажатия кнопки.
let inp2 = document.querySelector('.inp2');
let btn2 = document.querySelector('.btn2');
let span2 = document.querySelector('.span2');

btn2.onclick = function(){
  span2.innerText = inp2.value;
  inp2.value = '';
}




// 10.Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь умноженное на 10.
let inp3 = document.querySelector('.inp3');
let btn3 = document.querySelector('.btn3');
let span3 = document.querySelector('.span3');

btn3.onclick = function(){
  span3.innerText= +inp3.value * 10;
  inp3.value = '';
}





// 11. Создайте input и кнопку. По нажатию на кнопку выполняется функция, которая выводит на страницу число, которое ввел пользователь и к нему добавленное число 10.
let inp4 = document.querySelector('.inp4');
let btn4 = document.querySelector('.btn4');
let span4 = document.querySelector('.span4');

btn4.onclick = function(){
  span4.innerText= +inp4.value + 10;
  inp4.value = '';
}





// 12.Создайте два input и кнопку. В первый input пользователь вводит имя, во второе фамилию. 
// При нажатии кнопки выполняется функция, которая выводит в консоль строку 'Hello имя фамилия', 
// где имя - имя пользователя и фамилия - введенная фамилия.
let name = document.querySelector('.name');
let lastname = document.querySelector('.lastname');
let btn5 = document.querySelector('.btn5');

btn5.onclick = function(){
  console.log(name.value + ' '+ lastname.value);
}






// 13.Создайте два input и кнопку. В input пользователь вводит числа. 
// При нажатии кнопки выполняется функция, которая выводит сумму данных двух чисел на страницу.
let num1 = document.querySelector('.num1');
let num2 = document.querySelector('.num2');
let span6 = document.querySelector('.span6');
let btn6 = document.querySelector('.btn6');

btn6.onclick = function(){
  span6.innerText = +num1.value + +num2.value;
  num1.value = '';
  num2.value = '';
}





// 14.Создайте input и пропишите ему в html value = 77. С помощью JS измените value на 'Hello'.
document.querySelector('.new-value').value = 'Hello';





// 15.Создайте input и получите его в переменную y. 
// В js выполните следующее присвоение: y.style.border = '2px solid red' . Изучите результат операции.
document.querySelector('.bord').style.border = '2px solid red';






// 16.Создайте два input type=number, куда пользователь может ввести числа. 
// Выведите на страницу сумму данных чисел.

// тоже самое что и в [13], type="number" не влияет на тип данных, в любом случае нужно преобразовать value в число








// 17.Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. А затем сделайте операцию t = parseInt(t), и результат операции выведите в консоль. 
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
document.querySelector('.btn7').onclick = function(){
  let t = document.querySelector('.nu').value;
  t = parseInt(t);
  console.log(t);
}





// 18.Создайте input type="text" куда пользователь может ввести строку и число. Создайте функцию, которая запускается по нажатию на кнопку. 
// Получите значение из input в переменную t. А затем сделайте операцию t = parseFloat(t), и результат операции выведите в консоль. 
// Прочитайте за эту операцию. Попробуйте по очереди вводить 44, 44aaa, 44.3, a45 . Изучите вывод.
document.querySelector('.btn8').onclick = function(){
  let t = document.querySelector('.nu2').value;
  t = parseFloat(t);
  console.log(t);
}



// 19.Создайте два input type=number, куда пользователь может ввести отрицательные числа. Выведите на страницу сумму данных чисел.
let nu3 = document.querySelector('.nu3');
let nu4 = document.querySelector('.nu4');
let span7 = document.querySelector('.span7');

document.querySelector('.btn9').onclick = function(){
  span7.innerText = +nu3.value + +nu4.value;
  console.log(+nu3.value + +nu4.value);
  nu3.value = '';
  nu4.value = '';
}



// 20.Создайте опросник, куда пользователь может ввести имя, фамилию, возраст, род занятий. И кнопку. По нажатию кнопки выведите на 
// страницу предложение 'Уважаемый Иван, Иванов, ваш возраст 33 года, по професси вы ...' куда поставьте соответствующие данные из inputов.

let myName = document.querySelector('.my-name');
let myLastname = document.querySelector('.my-lastname');
let myAge = document.querySelector('.my-age');
let myProfession = document.querySelector('.my-profession');
let span8 = document.querySelector('.span8');

document.querySelector('.btn10').onclick = function(){
  span8.innerText = `Уважаемый ${myName.value} ${myLastname.value}, ваш возраст ${myAge.value} года, по професси вы ${myProfession.value}`;
}