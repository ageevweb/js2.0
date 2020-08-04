const a = [
  [1,2,3],
  ['a','b','c'],
  [ 4,5,6],
  ['d','e','f'],
  [ 7,8,9],
];

// Task 1.
// Создайте массив a. Выведите его на страницу. Элементы внутри вложенных массивов разделяйте пробелом, между вложенными массивами - перенос строки!
for(i = 0; i < a.length; i++){
  for(let k = 0; k < a[i].length; k++){
    document.querySelector('.div1').innerHTML += a[i][k] + ' ';
  }
  document.querySelector('.div1').innerHTML += '<br>';
}



// Task 2.
// Выведите на страницу символ 3 из массива a.
document.querySelector('.div2').innerHTML += a[0][2];



// Task 3.
// Выведите на страницу символ e из массива a.
document.querySelector('.div3').innerHTML += a[3][1];




// Task 4.
// Выведите на страницу содержимое третьего вложенного массива в массиве a.
document.querySelector('.div4').innerHTML += a[2];



// Task 5.
// Выведите на страницу только первые элементы вложенных массивов массива a.
for(i=0; i<a.length; i++) {
  document.querySelector('.div5').innerHTML += a[i][0]+'  ';
}



// Task 6.
// Выведите на страницу только четные вложенные массивы массива a.
for(i=0; i<a.length; i++) {
  if(i % 2 == 0){
    document.querySelector('.div6').innerHTML += a[i]+'<br>';
  }
}



// Task 7.
// Выведите на страницу только числа из массива a.
for(i = 0; i < a.length; i++){
  for(let k = 0; k < a[i].length; k++){
    if(typeof(a[i][k])== "number"){
      document.querySelector('.div7').innerHTML += a[i][k] + ' ';
    }
  }
}



// Task 8.
// Выведите на страницу длины вложенных массивов в массив a.
for(i=0; i<a.length; i++) {
  document.querySelector('.div8').innerHTML += a[i].length + '  ';
}



// Task 9.
// Выведите на страницу элементы массива a в обратном порядке, т.е.
// 9 8 7 f e ...
for(i = a.length-1; i >= 0; i--){
  for(let k = a[i].length-1; k >= 0; k--){
    document.querySelector('.div9').innerHTML += a[i][k] + ' ';
  }
}



// Task 10.
// Выведите на страницу элементы массива a, причем вложенные массивы должны выводиться в обратном порядке:
// 3 2 1
// c b a
// 6 5 4
for(i = 0; i < a.length; i++){
  for(let k = a[i].length-1; k >= 0 ; k--){
    document.querySelector('.div10').innerHTML += a[i][k] + ' ';
  }
  document.querySelector('.div10').innerHTML += '<br>';
}



// Task 11.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Выведите на страницу.

const m11 = [
  [0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0],
  [0,1,0,1,0,1,0,1],
  [1,0,1,0,1,0,1,0]
];

for(i = 0; i < m11.length; i++){
  for(let k = 0; k < m11[i].length; k++){
    document.querySelector('.div11').innerHTML += m11[i][k] + ' ';
  }
  document.querySelector('.div11').innerHTML += '<br>';
}



// Task 12.
// Создайте массив шахматную доску. Белые - 0, черные - 1. Напишите функцию, которая выводит данный массив в виде шахматной доски - блоки div в нужном порядке, закранные цветом.
for(i = 0; i < m11.length; i++){
  for(let k = 0; k < m11[i].length; k++){
    if(m11[i][k] == 0){
      document.querySelector('.div12').innerHTML +='<span class="wh"></span>';
    }
    else{
      document.querySelector('.div12').innerHTML +='<span class="bl"></span>';
    }
    
  }
  document.querySelector('.div12').innerHTML += '<br>';
}




// Task 13.
// Создайте массив, который подходит под следующие условия:
// b[0][1] == 4;
// b[3][2] == 5
const b = [
  [null, 4],
  null,
  null,
  [null,null,5]
];
console.log(b);



// Task 14.
// Создайте массив, который подходит под следующие условия.
// c[0][1] == 4;
// c[2] == 5

const c = [
  [null, 4],
  null,
  5
];



// Task 15.
// Создайте массив, который подходит под следующие условия:
// d[0][1] == 4;
// d[2][3] == 5
// d[6] = [4,5]

const d = [
  [null, 4],
  null,
  [null,null,null,5],
  null,
  null,
  null,
  [[4,5]]
];



// Task 16.
// Создайте массив, который подходит под следующие условия:
// e[0][1] == 4;
// e[2][3] == 5
// e[6][0][1] = 6;

const e = [
  [null, 4],
  null,
  [null,null,null,5],
  null,
  null,
  null,
  [[null, 6]]
];



// Task 17.
// Создайте массив, который подходит под следующие условия:
// f[0][1][3] == 4;
// f[2][1][1] == 5
// f[6][0][1] = 6;

const f = [
  [null, [null,[null,null,null,4]]],
  null,
  [null,null,[null,[null,5]]],
  null,
  null,
  null,
  [[null,6]]
];



// Task 18.
// Создайте массив, который подходит под следующие условия:
// g[0][1][3] == 4;
// g[2][1][3] == 5
// g[6][0][1] = 6;
// g[3] == g[5];

const g = [
  [null,[null,null,null,4]],
  null,
  [null,[null,null,null,5]],
  null,
  null,
  null,
  [[null,6]]
];


// Task 19.
// Выведите на страницу сумму элементов массива a (только чисел).
let num19 = 0; 

for(i = 0; i < a.length; i++){
  for(let k = 0; k < a[i].length; k++){
    if(typeof(a[i][k])== "number"){
      num19 = num19 + a[i][k];
    }
  }
}
document.querySelector('.div19').innerHTML = num19;



// Task 20.
// Создайте массив, который эмулирует доску для крестиков - ноликов, напишите все возможные выиграшные комбинации, т.е. 
// a[0][0], a[0][1], a[0][2] - занята первая линия, и т.д.


// // vertical
// a[0][0], a[0][1], a[0][2]
// a[1][0], a[1][1], a[1][2]
// a[2][0], a[2][1], a[2][2]

// //horizontal
// a[0][0], a[1][0], a[2][0]
// a[0][1], a[1][1], a[2][1]
// a[0][2], a[1][2], a[2][2]

// // crosswise
// a[0][0], a[1][1], a[2][2]
// a[0][2], a[1][1], a[2][0]
