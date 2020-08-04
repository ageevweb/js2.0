// 1.Создайте переменную a = 4. Используя конструкцию if проверьте что a == 4. Выведите сообщение в консоль.
let a = 4;

if (a == 4){
  console.log('переменная равна 4');
}
else{
  console.log('переменная не равна 4');
}



// 2.Создайте b = 8 и с = 10. С помощью if, else выведите в консоль сообщение о том, какая из переменных больше.
// 3.Используя else if добавьте в предыдущую задачу проверку на равенство.
let b = 8;
let c = 10;

if (b > c){
  console.log('b больше');
}
else if(b < c) {
  console.log('c больше');
}
else{
  console.log('они равны');
}



// 4.Создайте на странице 2 input, куда пользователь может вводить числа. Добавьте кнопку. При нажатии кнопки выполняйте функцию,
// которая сравнит два числа и выведет большее на страницу. Если числа равны - выводится строка "равны".
let inp1 = document.querySelector('.inp1');
let inp2 = document.querySelector('.inp2');
let span1 = document.querySelector('.span1');

document.querySelector('.btn1').onclick = () => {
  if(+inp1.value > +inp2.value){
    span1.innerText = +inp1.value
  }
  else if(+inp1.value < +inp2.value){
    span1.innerText = +inp2.value
  }
  else{
    span1.innerText = "они равны"
  }
}



// 5.Создайте на странице input, куда пользователь может вводить год рождения. Добавьте кнопку. При нажатии кнопки выполняйте функцию, 
// которая если год рождения меньше 2000 выводит на страницу возраст пользователя (2019 - введенный год рождения), если год рождения 
// больше или равен 2000 - выводит в консоль возраст пользователя.
let inp3 = document.querySelector('.inp3');
let span2 = document.querySelector('.span2');

document.querySelector('.btn2').onclick = () => {
  if(+inp3.value < 2000){
    span2.innerText = 2019 - +inp3.value;
  }
  else if(+inp3.value > 2000){
    span2.innerText = 2019 - +inp3.value;
    // (на данный момент (2019год))
  }
}



// 6.Создайте input куда пользователь может ввести номер квартиры. Если квартира от 1 до 32 - то выводите сообщение, о том, 
// что такая квартира есть,если другое число - сообщение о том, что квартира не существует.
let inp4 = document.querySelector('.inp4');
let span3 = document.querySelector('.span3');

document.querySelector('.btn3').onclick = () => {
  if(+inp4.value >= 1 && +inp4.value <= 32){
    span3.innerText = 'такая квартира существует';
  }
  else{
    span3.innerText = 'такая квартира НЕ существует';
  }
}


// 7.Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться 
// сообщение - большие или меньше нуля это число.
let inp5 = document.querySelector('.inp5');
let span4 = document.querySelector('.span4');

document.querySelector('.btn4').onclick = () => {
  if(+inp5.value > 0){
    span4.innerText = 'больше 0';
  }
  else if(+inp5.value < 0){
    span4.innerText = 'меньше 0';
  }
  else{
    span4.innerText = 'равно 0';
  }
}



// 8.Создайте input куда пользователь может ввести число. После нажатия кнопки - на страницу должно выводиться сообщение - четное или нет 
// это число. Определить четное или нет число в JS очень просто. Нужно получить целый остаток от деления (читать за оператор), для этого
//  используется оператор % . И проверить. Если остаток от деления 0 - то число четное, если нет - не четное.
let inp6 = document.querySelector('.inp6');
let span5 = document.querySelector('.span5');

document.querySelector('.btn5').onclick = () => {
  let num = +inp6.value % 2;

  if(num == 0){
    span5.innerText = 'четное';
  }
  else{
    span5.innerText = 'не четное';
  }
}


// 9.Создайте 2 инпута. Если оба инпута заполнены (не равны пустой строке), то по нажатию кнопки число из первого инпута возведите 
// в степень из второго input. Результат выведите на страницу. Как возвести в степень? Читаем!
let inp7 = document.querySelector('.inp7');
let inp8 = document.querySelector('.inp8');
let span6 = document.querySelector('.span6');

document.querySelector('.btn6').onclick = () => {
  if(+inp7.value != '' &&  +inp8.value != ''){
    let a = +inp7.value;
    let b = +inp8.value;
    span6.innerText = a ** b;
  } 
}


// 10.Есть поле input куда пользователь может ввести свое имя. Нужно при нажатии кнопки - сказать с помощью alert('Hello имя_пользователя'),
// но хитрые пользователи часто нажимают несколько раз пробел. Вроде ничего и не ввел, но программа считывает пробелы и пытается работать. 
// Напишите проверку, которая выводит предупреждение если пользователь ничего не ввел, или ввел один пробел. В остальных случаях - Hello...
let inp9 = document.querySelector('.inp9');

document.querySelector('.btn7').onclick = () => {
  if(inp9.value == ''){
    alert("введите ваше имя");
  }
  else if(inp9.value == ' '){
    alert("вы ввели 1 пробел вместо имени");
  }
  else{
    alert('Hello ' + inp9.value);
  }
}


// 11.Хитрый пользователь научился обходить нашу предыдущую задачу, и начал вводить где 3, а где и 5 пробелов. 
// Напишите программу, которая проверяет пробелы или нет введены в строку. Как защититься от пробелов? Обрезать их. 
// Допустим вы получили значение из input в переменную a. Теперь напишите a = a.trim(); - это обрежет пробелы и результат 
// запишет в переменную a. Теперь просто сравните переменную a c пустой строкой. Если она равна - выведите ошибку, 
// если нет - сообщение с содержимым input.
let inp10 = document.querySelector('.inp10');

document.querySelector('.btn8').onclick = () => {
  a = inp10.value
  a = a.trim();
  if( a == ''){
    alert('пустая строка');
  } else {
    alert(a);
  }
}


// 12.Пользователь может ввести число от 1 до 3. Если пользователь ввел 1 - то в консоль выведите слово "один" и т.д. 
// Для решения используйте switch.
let inp11 = document.querySelector('.inp11');

document.querySelector('.btn9').onclick = () => {
  switch(+inp11.value){
    case 1:
      console.log('one');
      break;
    case 2:
      console.log('two');
      break;
    case 3:
      console.log('three');
      break;
    default:
      console.log('введите 1, 2 или 3');
  }
}


// 13.Пользователь может ввести номер дома. Если дом от 1 до 5 - то улица 1, если от 6 до 11 - улица 2, если от 11 до 20 - улица 3. 
// Используя if, elseif - реализуйте программу, которая будет указывать улицу в зависимости от введенного дома.
let inp13 = document.querySelector('.inp13');

document.querySelector('.btn13').onclick = () => {
  s = +inp13.value;

  if( s >= 1 && s < 6){
    alert('улица 1');
  }
  else if( s >= 6 && s < 11){
    alert('улица 2');
  }
  else if( s >= 11 && s <=20){
    alert('улица 3');
  }
}


// 14.Создайте input куда пользователь может ввести количество рентген. Это число от 0 и до 1000. 
// С помощью if, else if реализуйте вывод по таблице: от 0 до 25 - не обнаруживается до 50 - снижение числа лимфоцитов 
// до 100 - вялость, рвота, до 150 - смертность 5%, до 350 - смертность 50% за 30 суток, до 600 - 90% смертность за 2 недели. 
// Вывод результатов сделайте на страницу.
let inp14 = document.querySelector('.inp14');
let span14 = document.querySelector('.span14');

document.querySelector('.btn14').onclick = () => {
  r = +inp14.value;

  if( r >= 0 && r < 25){
    span14.innerText = 'не обнаруживается';
  } 
  else if( r >= 25 && r < 50){
    span14.innerText = 'снижение числа лимфоцитов';
  }
  else if( r >= 50 && r < 100){
    span14.innerText = 'вялость, рвота';
  }
  else if( r >= 100 && r < 150){
    span14.innerText = 'смертность 5%';
  }
  else if( r >= 150 && r < 350){
    span14.innerText = 'смертность 50% за 30 суток';
  }
  else if( r >= 350 && r < 600){
    span14.innerText = '90% смертность за 2 недели';
  }
  else if( r >= 600 && r <= 1000){
    span14.innerText = 'see on the other side';
  }
  else{
    span14.innerText = 'введите значение от 0 до 1000';
  }
}


// 15.Создайте переменные x = 1, y = 0. Выведите в консоль результат операции x && y, а затем x || y. Изучите результат.
let x1 = 1;
let y1 = 0;
console.log('_________________');
console.log(x1 && y1);
console.log(x1 || y1);


// 16.В Казахстане, налог на объем двигателя объемом 500 куб составляет 2525 тенге, 1200 куб - 5050 тенге, 
// 1600 - 8275 тенге, 1900 куб - 9675 тенге, 2000 - 11075 тенге. Напишите программу, где пользователь может
// ввести в input объем двигателя до 2000 куб включительно и получить налог на данный двигатель.
let inp16 = document.querySelector('.inp16');
let span16 = document.querySelector('.span16');

document.querySelector('.btn16').onclick = () => {
  k = +inp16.value;

  if( k >= 500 && k < 1200){
    span16.innerText = '2525 тенге';
  } 
  else if( k >= 1200 && k < 1600){
    span16.innerText = '5050 тенге';
  }
  else if( k >= 1600 && k < 1900){
    span16.innerText = '9675 тенге';
  }
  else if( k >= 1900 && k <= 2000){
    span16.innerText = '11075 тенге';
  }
  else{
    span16.innerText = 'введите значение от 500 до 2000';
  }
}


// 17.Создайте 2 инпута. В первый пользователь может ввести число денег в долларах. Во второй - строку euro, rub, uah. 
// Используя if, elseif сделайте по нажатию кнопки пересчет в ту валюту, которую ввел пользователь. Коэффициенты - найдите в сети интернет.

let inp17 = document.querySelector('.inp17');
let inp18 = document.querySelector('.inp18');
let span17 = document.querySelector('.span17');

// document.querySelector('.btn17').onclick = () => {
//   p = +inp17.value;
//   h = inp18.value
//   h = h.trim();

//   if( h!='' && p != ''){
//     if (h == 'euro'){
//       span17.innerText = p * 0.91;
//     }
//     else if(h == 'rub'){
//       span17.innerText = p * 65.4;
//     }
//     else if(h == 'uah'){
//       span17.innerText = p * 25,44;
//     }
//   } else {
//     alert('заполните корректно поля');
//   }
// }



// 18.Проделайте предыдущую задачу с помощью switch case.
document.querySelector('.btn17').onclick = () => {
  p = +inp17.value;
  h = inp18.value
  h = h.trim();

  switch(h){
    case 'euro':
      span17.innerText = p * 0.91;
      break;
    case 'rub':
        span17.innerText = p * 65.4;
      break;
    case 'uah':
      span17.innerText = p * 25,44;
      break;
    default:
      console.log('заполните корректно поля');
  }
}


// 19. Создайте 2 input куда пользователь может ввести числа. В третий input - может ввести знак - минус, 
// плюс, умножить, поделить. С помощью if, else if по нажатию кнопки выводите результат выбранной операции на страницу.


// document.querySelector('.btn19').onclick = () => {
  
//   let num1 = document.querySelector('.num1');
//   let num2 = document.querySelector('.num2');
//   let operator = document.querySelector('.operator');
//   let span19 = document.querySelector('.span19');

//   num1 = +num1.value;
//   num2 = +num2.value;
//   operator = operator.value;
  
//   if( num1 !='' && num2 != '' && operator != ''){
//     if (operator == '+'){
//       span19.innerText = num1 + num2;
//     }
//     else if(operator == '-'){
//       span19.innerText = num1 - num2;
//     }
//     else if(operator == '*'){
//       span19.innerText = num1 * num2;
//     }
//     else if(operator == '/'){
//       span19.innerText = num1 / num2;
//     }

//   } else {
//     alert('заполните корректно поля');
//   }
// }




// 20.Проделайте предыдущую задачу с помощью switch case.
document.querySelector('.btn19').onclick = () => {
  
  let num1 = document.querySelector('.num1');
  let num2 = document.querySelector('.num2');
  let operator = document.querySelector('.operator');
  let span19 = document.querySelector('.span19');

  num1 = +num1.value;
  num2 = +num2.value;
  operator = operator.value;
  
  if( num1 !='' && num2 != '' && operator != ''){
    switch(operator){
      case '+':
        span19.innerText = num1 + num2;
        break;
      case '-':
        span19.innerText = num1 - num2;
        break;
      case '*':
        span19.innerText = num1 * num2;
        break;
      case '/':
        span19.innerText = num1 / num2;
        break;
      default:
        console.log('заполните корректно поля');
    }

  } else {
    alert('заполните корректно поля');
  }
}