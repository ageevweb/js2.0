// Task 1
// Создайте функцию func_1, которая возращает строку от нуля до 100 в формате
// 0 1 2. .100(после 100 тоже есть пробел)
// задание сделать с помощью while
function func_1() {
  let str = '';
  let k = 0;

  while (k <= 100){
    str += k + ' ';
    k++
  }
  return str;
}
console.log('task 1: ' + func_1());




// Task 2
// Создайте функцию func_2, которая принимает от пользователя 2 параметра числа и возращает строку от первого числа до второго с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 5 6 7
// считаем что второе число всегда больше первого. Решаем с помощью while
function func_2(a, b) {
  let str = '';

  while (a <= b){
    str += a + ' ';
    a++;
  }
  return str;
}
console.log('task 2: ' + func_2(3, 10));




// Task 3
// Создайте функцию func_3, которая принимает от пользователя 2 параметра числа и возращает строку от большего числа меньшего с шагом 1. Разделитель пробел.
// Пример: пользователь ввел 5 и 7
// 7 6 5
// Решаем с помощью while
function func_3(a, b) {
  let str = '';

  while (b >= a){
    str += b + ' ';
    b--;
  }
  return str;
}
console.log('task 3: ' + func_3(4, 8));


// Task 4
// Создайте функцию func_4, которая принимает от пользователя 3 параметра(число, число и шаг) и возращает строку от большего числа меньшего с заданным. Разделитель пробел.
// Пример: пользователь ввел 1 5 2
// 5 3 1
// Решаем с помощью while
function func_4(a, b, c) {
  let str = '';

  while (b >= a){
    str += b + ' ';
    b = b - c;
  }
  return str;
}
console.log('task 4: ' + func_4(0, 30, 3));




// Task5
// С помощью цикла
// while создайте функцию func_5, считает и возвращает сумму чисел от 0 до 20.
function func_5() {
  sum = 0;
  q = 0;

  while(q <= 20){
    sum = sum + q;
    q++
  }
  return sum;
}
console.log('task 5: ' + func_5());



// Task 6
// C помощью цикла
// while создайте функцию func_6, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает сумму чисел от первого до второго включительно. 
// Если нет - то false.Считаем, что пользователь может ввести только числа.
function func_6(a, b) {
  if (a < b){
    let str = '';

    while (a <= b){
      str += a + ' ';
      a++;
    }
    return str;
  }
  else {
    return false;
  }
}
console.log('task 6: ' + func_6(2, 10));




// Task 7
// C помощью цикла
// while создайте функцию func_7, которая принимает 2 параметра, и если второй параметр больше первого, то возвращает произведение 
// чисел от первого до второго включительно.Если нет - то false.Считаем, что пользователь может ввести только числа.
function func_7(a, b) {
  if (a < b){
    let str = 1;

    while (a <= b){
      str = str * a;
      a++;
    }
    return str;
  }
  else {
    return false;
  }
}
console.log('task 7: ' + func_7(1, 4));




// Task 8
// У пользователя есть 333 монеты в кармане.Каждый день, начиная с первого количество монет увеличиваетя в 2 раза. 
// Напишите функцию func_8, которая вернет день, в который количество монет станет больше или равно 1 000 000.
function func_8() {
  z = 333;
  count = 0;

  while ( z <= 1000000){
    z = z * 2;
    z++;
    count++;
  }
  return count;
}
console.log('task 8: ' + func_8());




// Task 9
// Создайте функцию func_9, которая принимает 2 параметра и возращает строку от первого до второго 
// введенного параметра, где все четные числа заменены на символ нуля(0).
function func_9(a, b) {
  str9 = '';

  while(a <= b){
    if (a % 2 == 0){
      str9 += ' 0 ';
    }
    else{
      str9 += a;
    }
    a++;
  }
  return str9;
}
console.log('task 9: ' + func_9(3, 50));





// Task 10
// Cоздайте функцию func_10, которая вернет строку(решаем через while):
//     **
//     *
//     **
//     *
//     **
//     *
function func_10() {
  q = 0;
  str10 = '';

  while(q < 6){
    if(q%2  == 0){
    str10 += '** ';
    }
    else{
      str10 += '* ';
    }
    q++;
  }
  return str10;
}
console.log('task 10: ' + func_10());


// Task 11
// Создайте функцию func_11, которая вернет следующую строку: 10 1 9 2 8 3. . 1 10. Решаем через
// while.

function func_11() {
  a11 = 1;
  b11 = 10;
  str11 = '';

  while( a11 <= 10){
    str11 += `${b11} ${a11} `;
    a11++;
    b11--;
  }
  return str11;
}
console.log('task 11: ' + func_11());






// Task 12
// Прочитайте о цикле <a href = "https://developer.mozilla.org/ru/docs/Web/JavaScript/Reference/Statements/do...while"
// target = "_blank" >do while</a>. Напишите код:
// let a = 0;
// do{
//   console.log('task 12:  do while work');
// } while (a < 0);

// let b = 0;
// while (b < 0) {
//     console.log('while work');
// }
// изучите вывод.Как видите, цикл do while срабатывает минимум один раз в любом случае.Т.е.вначале идет срабатывание, а потом проверка.
function func_12() {
  let a = 0;

  do{
    console.log('task 12:  do while work');
  } while (a < 0);
  

  let b = 0;

  while (b < 0) {
      console.log('while work');
  }
}
func_12();






// Task 13
// Напишите функцию func_13 которая возвращает строку, от 100 до 0 включительно.Используем цикл do while.
function func_13() {
  str = '';
  a = 100;

  do{
    str += a+' ';
    a--; 
  }while(a >= 0);

  return str;
}
console.log('task 13: ' + func_13());







// Task 14
// Стаханов в первый день своей работы добыл 5 тонн угля.Во второй - на 30 % больше от предыдущего дня .Напишите функцию func_14 которая вернет день, когда Стаханова 
// побьют все, кто с ним работает, этот день наступит тогда, когда Стаханов в день добудет 132 тонны угля.Используйте для решения do while. Считаем, что каждый день Стаханов 
// дает угля на 30% больше предыдущего.

function func_14() {
  a = 5;
  day = 2;

  do{
    perc = a/100*30;

    a = a + perc;
    day++
  } while( a <= 132);

  return day;
}
console.log('task 14: ' + func_14());








// Task 15
// Гермиона Грейнджер в первый день наварила 1.1 литра зелья.Во второй день на 0.3 литра зелья больше.Напишите функцию func_15, 
// которая вернет день, когда в Хоргвардсе не останется пустых котлов(суммарный объем котлов в замке 568 литров).Обратите внимание, 
// что вам нужно найти суммарных объем сваренного зелья, а не дневной объем. Используем do while.
function func_15() {
  v = 1.1;
  day = 1;
  vPlus = 0.3;

  do{
    v = 1.1 + v + vPlus * day;
    day++;
  }while( v <= 568 );

  return day;
}
console.log('task 15: ' + func_15());






// Task 16
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while посчитайте количество параграфов p.task-16 и если 
// число четное - верните значение, если нет - верните false.Код напишите в функции func_16.
function func_16() {
  // par = document.querySelectorAll('.task-16').length;

  // if (par % 2 == 0){
  //   return par;
  // }
  // else{
  //   return false;
  // }

  p = document.querySelectorAll('.task-16');
  z = 0;

  do{
    z++;
  }while(z <= p.length-1);

  if (z % 2 == 0){
    return z;
  }
  else{
    return false;
  }
}
console.log('task 16: ' + func_16());





// Task 17
// На странице есть четыре параграфа p.task-16. Используя цикл do ..while выведите в первый p.task-16 - число 1, 
// во второй 2 и т.д.Решение оформите в виде функции func_17.
function func_17() {
  p = document.querySelectorAll('.task-16');
  i = 0;

  do{
    p[i].innerText = i+1;
    i++;   
  }while(i <= p.length-1);
}
func_17();






// Task 18
// На странице есть три параграфа p.task-18. Используя цикл do ..while выведите в первый p.task-18 - число равное 
// количеству параграфов p.task - 18, во второй на единицу меньше и т.д.Решение оформите в виде функции func_18.
function func_18() {
 let p = document.querySelectorAll('.task-18');
 let i = 0;
 let d = p.length;


  do{
    p[i].innerText = d;
    d--;
    i++;
  }while(i < p.length);
}
func_18();







// Task 19
// Напишите функцию func_19, которая возвращает строку вида: 1*3*5*7*9*11*13*15*17*19. Решите с помощью do while.
function func_19() {
  str = '';
  i = 1;

  do{
    if( i%2 == 0){
      str += '*';
    }
    else{
      str += i;
    }
    i++;
  }while( i <= 19);

  return str;
}
console.log('task 19: ' + func_19());




// Task 20
// Напишите функцию func_20, которая возвращает строку вида:
//     1 * * *
//     * 1 * *
//     * * 1 *
//     * * * 1
function func_20() {
  str = '';
  i = 1;

  do{
    y = 1;
    do{
      if(y == i){
        str += '1';
      }
      else{
        str += '*';
      }
      y++;
    }while(y <= 4)

    str += ' ';
    i++;
  }while(i <= 4);

  return str;
}
console.log('task 20: ' + func_20());