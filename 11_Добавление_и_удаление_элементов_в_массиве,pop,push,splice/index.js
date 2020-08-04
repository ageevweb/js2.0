// Task 1.
// Создайте пустой массив arr1, input.u-1, кнопку button.u-2__push. При нажатии кнопки, функция читает содержимое input 
// и добавляет содержимое в массив, после чего выводит содержимое массива в div.out-1.
let arr1 = [];

document.querySelector('.btn1').onclick = ()=>{
  arr1.push(document.querySelector('.inp1').value);
  document.querySelector('.div1').innerHTML = arr1;
}


// Task 2.
// Добавьте к предыдущему заданию кнопку button.u-2__pop, при нажатии которой, к массиву arr1 применяется метод pop, после чего массив выводится в div.out-1
document.querySelector('.btn1-1').onclick = ()=>{
  arr1.pop();
  document.querySelector('.div1').innerHTML = arr1;
}


// Task 3.
// Добавьте к заданию 1 кнопку button.u-3__shift, которая применяет к массиву arr1 метод shift ( читать за метод shift). После применения shift, массив arr1 выподится в div.out-1.
document.querySelector('.btn1-2').onclick = ()=>{
  arr1.shift();
  document.querySelector('.div1').innerHTML = arr1;
}


// Task 4.
// Добавьте к заданию 1 кнопку button.u-4__unshift, которая применяет к массиву arr1 метод unshift ( читать за метод unshift). 
// После применения unshift, массив arr1 выподится в div.out-1. Надеюсь, вы догадаетесь проверять input на пустоту перед применением unshift. Надеюсь, вы это сделали и в первой задаче?
document.querySelector('.btn1-3').onclick = ()=>{
  arr1.unshift(document.querySelector('.inp1').value);
  document.querySelector('.div1').innerHTML = arr1;
}


// Task 5.
// Обьявите массив arr5, добате два элемента input, в первый пользователь может ввести индекс элемента, во второй - количество. Добавьте кнопку, по нажатию на которую к массиву arr5 
// применяется метод splice. Результат применения выводите в div.out-5.
let arr5 = [3,14, 15, 92, 6, 54, 123, 87, 66, 43, 12, 90, 'hello'];
document.querySelector('.div5').innerHTML = arr5;

document.querySelector('.btn5').onclick = ()=>{
  arr5.splice(+document.querySelector('.inp5-1').value, +document.querySelector('.inp5-2').value);
  document.querySelector('.div5').innerHTML = arr5;
}


// Task 6.
// Напишите функцию funcPush, которая эмулирует работу метода push, функция, по нажатию кнопки:
// читает содержимое input в переменную
// вычисляет длину массива
// присваивает массиву новый элемент, а в качестве индекса указывает длину массива - 1
// Выводит массив на страницу
let arr6 = [1,2,3,4,5,6,7,8,9, 'hi', 'hello'];
document.querySelector('.div6').innerHTML = arr6;
document.querySelector('.div6-1').innerHTML = 'length: ' + arr6.length;

document.querySelector('.btn6').onclick = ()=>{
  arr6[arr6.length] = document.querySelector('.inp6').value;

  document.querySelector('.div6').innerHTML = arr6;
  document.querySelector('.div6-1').innerHTML = 'length: ' + arr6.length;
}



// Task 7.
// Напишите функцию funcPop, которая эмулирует работу метода pop, функция, по нажатию кнопки:
// удаляет последний элемент массива
// Выводит массив на страницу
let arr7 = [1,2,3,4,5,6,7,8,9, 'hi', 'hello'];
document.querySelector('.div7').innerHTML = arr7;
document.querySelector('.div7-1').innerHTML = 'length: ' + arr7.length;

document.querySelector('.btn7').onclick = ()=>{

  delete arr7[arr7.length-1];
  arr7.length = arr7.length - 1;

  document.querySelector('.div7').innerHTML = arr7;
  document.querySelector('.div7-1').innerHTML = 'length: ' + arr7.length;
}



// Task 8.
// Напишите функцию funcShift, которая эмулирует работу метода shift, функция, по нажатию кнопки:
// Создает новый массив где нулевым элементом выступает первый элемент исходного массива
// Выводит массив на страницу
let arr8 = [1,2,3,4,5,6,7,8,9];

document.querySelector('.div8').innerHTML = arr8;
document.querySelector('.div8-1').innerHTML = 'length: ' + arr8.length;

document.querySelector('.btn8').onclick = ()=>{
  let newArr8 = [];

  for(let i = 1; i < arr8.length; i++){
    newArr8[newArr8.length] = arr8[i];
  }

  arr8 = newArr8;

  document.querySelector('.div8').innerHTML = arr8;
  document.querySelector('.div8-1').innerHTML = 'length: ' + arr8.length;
}





// Task 9.
// Напишите функцию funcUnShift, которая эмулирует работу метода unshift, функция, по нажатию кнопки:
// читает содержимое input в переменную
// создает новый массив где нулевым элементов задает считанную из input строку
// дописывает остальные значения старого массива в новый
// Выводит массив на страницу
let arr9 = [1,2,3,4,5,6,7,8,9];

document.querySelector('.div9').innerHTML = arr9;
document.querySelector('.div9-1').innerHTML = 'length: ' + arr9.length;

document.querySelector('.btn9').onclick = ()=>{
  newArr9 = [];
  newArr9[0] = document.querySelector('.inp9').value;

  for(let i = 0; i < arr9.length; i++){
    newArr9[newArr9.length] = arr9[i];
  }

  arr9 = newArr9;

  document.querySelector('.div9').innerHTML = arr9;
  document.querySelector('.div9-1').innerHTML = 'length: ' + arr9.length;
}






// Task 10.
// Создайте массив arr10, примените к массиву метод reverse ( читать за метод reverse). После применения reverse, 
// массив arr10 выподится в div.out-10.

let arr10 = [2,4, 6, 8, 10, 'hello'];
document.querySelector('.div10').innerHTML = arr10;

document.querySelector('.btn10').onclick = ()=>{
  arr10.reverse();

  document.querySelector('.div10').innerHTML = arr10;
}






// Task 11.
// Создайте input.u-11__input и кнопку button.u-11__button. Объявите массив arr11. По нажатию на кнопку, 
// читайте содержимое input.u-11__input в переменную u11. Потом примените к массиву arr11 метод indexOf ( читать за метод indexOf).
//  Результат применения indexOf выводите на страницу в div.out-11. Последовательно проверьте программу вводя в input числа 1, 3, 5, 12.
let arr11 = [0, 2, 3, 7, 8, 5, 11];
document.querySelector('.div11').innerHTML = arr11;

document.querySelector('.btn11').onclick = ()=>{
  a = +document.querySelector('.inp11').value
  document.querySelector('.div11-1').innerHTML = arr11.indexOf(a);
}



// Task 12.
// Напишите функцию funcIndexOf, которая эмулирует работу метода indexOf. Программа должна:
// читает содержимое input в переменную
// Запускать цикл по массиву и сравнивать каждый элемент массива с введенным.
// Если совпадение есть - останавливать цикл и выводить номер индекса на котором произошло совпадение.
// Если совпадения нет выводить -1.
let arr12 = [0, 2, 3, 7, 8, 5, 11, 99, 17, 41];
document.querySelector('.div12').innerHTML = arr12;

document.querySelector('.btn12').onclick = ()=>{
  a = +document.querySelector('.inp12').value

  for(let i=0; i<arr12.length; i++){
    if (a == arr12[i]){
      document.querySelector('.div12-1').innerHTML = i;
      return i;
    }
    else{
      document.querySelector('.div12-1').innerHTML = '-1';
    }
  }
}



// Task 13.
// Напишите функцию funcReverse, которая эмулирует работу метода reverse. Программа должна:
// Создать новый пустой массив
// Перебирать старый массив с конца (массив создайте сами)
// По очереди по элементу присвоить значения в новый массив.
// Вывести новый массив.
let arr13 = [0, 2, 3, 7, 8, 5, 11, 99, 17, 41];
document.querySelector('.div13').innerHTML = arr13;

document.querySelector('.btn13').onclick = ()=>{
  let newArr13 = [];

  for (i = arr13.length-1; i >= 0; i--){
    newArr13.push(arr13[i]);
  }
  arr13 = newArr13;
  document.querySelector('.div13').innerHTML = arr13;
}





// Task 14.
// Создайте инпут, куда пользователь может ввести число элементов в массиве. Создайте функцию, которая прочитает введенное 
// число и создаст массив такой длины, причем каждый элемент - это случайное число от 0 до 100. Массивы выведите на страницу.
function randomInteger(min, max) {
  let rand = min + Math.random() * (max + 1 - min);
  return Math.floor(rand);
}

document.querySelector('.btn14').onclick = ()=>{
  let inp14 = +document.querySelector('.inp14').value;
  let arr14 = [];
  
  for(i = 0; i < inp14; i++){
    arr14.push(randomInteger(0, 100));
  }
  document.querySelector('.div14').innerHTML = arr14;
}



// Task 15.
// Создайте массив arr15. Напишите функцию, которая создаст новый массив, в который входят только четные элементы массива arr15 
// (элементы с четным индексом). Выведите на экран.
let arr15 = [1,2,3,4,5,6,7,8,9];
document.querySelector('.div15').innerHTML = arr15;

document.querySelector('.btn15').onclick = ()=>{
  let arr15new = []

  for(i = 0; i < arr15.length; i++){
    if(i % 2 == 0){
      arr15new.push(arr15[i]);
    }
  }
  document.querySelector('.div15').innerHTML = arr15new;
}




// Task 16.
// Создайте button.u-16__button. Объявите массив arr16_1 и arr16_2. По нажатию на кнопку примените к массивам метод concat ( читать за метод concat). 
// Результат применения concat выводите на страницу в div.out-16.
let arr16_1 = [3, 5, 7 ];
let arr16_2 = [2, 4, 6 ];
let arr16_3 = [111, 222, 333];

document.querySelector('.btn16').onclick = ()=>{
  let arr16 = arr16_1.concat(arr16_2, arr16_3);

  document.querySelector('.div16').innerHTML = arr16;
}





// Task 17.
// Напишите функцию funcConcat, которая эмулирует работу метода concat. Программа должна:
// Перебирает второй массив и его элементы добавляет в первый массив.
// Выводит массив на страницу.
let arr17_1 = [3, 5, 7, 10];
let arr17_2 = [2, 4, 6, 11];

function funcConcat(a,b){
  for(i = 0; i < b.length; i++){
    a.push(b[i]);
  }
  return a;
}
document.querySelector('.div17').innerHTML = funcConcat(arr17_1, arr17_2);





// Task 18.
// Создайте button.u-18__button и input.u-18__input. Объявите массив arr18 . По нажатию на кнопку примените к массивам метод includes, 
// который проверяет есть ли в массиве значение введенное в input. ( читать за метод includes). Результат применения includes выводите 
// на страницу в div.out-18.
let arr18 = [3, 5, 7, 11, 12, 13, 14 ];
document.querySelector('.div18').innerHTML = arr18;

document.querySelector('.btn18').onclick = ()=>{

  let inp18 = +document.querySelector('.inp18').value;

  if(arr18.includes(inp18)){
    document.querySelector('.div18-1').innerHTML = true;
    return true;
  }
  else{
    document.querySelector('.div18-1').innerHTML = false;
  }
}




// Task 19.
// Напишите функцию funcIncludes, которая эмулирует работу метода includes. Программа должна:
// Перебирает второй массив и сравнивать если введенный элемент совпал с текущим - прекращать работу цикла и выводить true.
// Если совпадений нет - false.
let arr19 = [3, 5, 7, 11, 12, 13, 14 ];
document.querySelector('.div19').innerHTML = arr19;

document.querySelector('.btn19').onclick = ()=>{
  let inp19 = +document.querySelector('.inp19').value;

  for(i = 0; i<arr19.length; i++){
    if( inp19 ==arr19[i]){
      document.querySelector('.div19-1').innerHTML = true;
      return true;
    }
    else{
      document.querySelector('.div19-1').innerHTML = false;
    }
  }
}



// Task 20.
// Объявите массив arr20. Создайте кнопку, по нажатию которую к массиву применяется метод join ( читать за метод join). Результа выведите на страницу.
let arr20 = [1,2,3,4,5,6,7,8,9,10];
document.querySelector('.div20').innerHTML = arr20.join('_');

