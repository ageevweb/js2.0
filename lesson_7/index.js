// 1.Создайте функцию (именнованную), которая при клике на кнопке выводит в консоль ваше имя.
document.querySelector('.btn1').onclick = shomMyName;

function shomMyName(){
  console.log('Andrey Ageev');
}




// 2.Создайте функцию (именованную). Функция должна примать один параметр - имя (например Ivan) и выводить имя переданное ей в консоль. 
// Запустите функцию и передайте в качестве имени Sergey.
function showSmthName(a = 'Ivan'){
  return a;
}
console.log(showSmthName('Sergey'));




// 3.Создайте именнованную функцию, которая принимает параметр число и выводит его значение умноженное на 10 в консоль. 
// Запустите выполнение функции. Убедитесь, что она работает. Теперь создайте кнопку и добавьте на нее событие onclick 
// которое вызывает данную функцию с параметром.Если вы напишите, подобный синтаксис elem.onclick = myFunc(11), то увидите, 
// что данная функция - выполняется сразу при загрузке страницы! Действительно, ведь мы поставили скобки. Как передать 
// параметр и не запустить функцию сразу? Довольно хитро:
// elem.onclick = function(){
//     myFunc(22);
// }
// Т.е. использовать обертку из анонимной функции.
document.querySelector('.btn3').onclick = function(){
  function shomNum(a = 5){
    return a * 10;
  }
  console.log(shomNum(7));
}






// 4.Создайте кнопку и функцию. При нажатии кнопки, функция окрашивает данную кнопку в background: red.
document.querySelector('.btn4').onclick = function(){
  document.querySelector('.btn4').style.background = 'red';
}





// 5.Создайте функцию, которая возвращает ваше имя. Имя вводится с input
document.querySelector('.btn5').onclick = function(){
  let inp5 = document.querySelector('.inp5').value;
  
  function writeName(a = 'Olgerd'){
    return a;
  }
  console.log(writeName(inp5));
}




// 6.Создайте функцию, которая принимает 2 числа и возвращает большее число из двух, либо любое из них если они равны.
function comparing(a, b){
  if ( a > b){
    return a;
  }
  else if( b > a){
    return b;
  }
  else if( b == a){
    return 'равны';
  }
}
console.log('unit6 - '+ comparing(5, 9));




// 7.Создайте функцию, которая принимает год рождения и возвращает ваш возраст. Текущий год задавать как 2019.
function birth(a){
  return 2019 - a;
}
console.log('unit7 - ' + birth(1993));




// 8.Создайте функцию, которая возвращает случайное число от 1 до 10. По случайным числам читаем все здесь и задаем вопросы в чате.
function randomInt1() {
  let rand = 1 - 0.5 + Math.random() * (10 - 1 + 1);
  return Math.round(rand);
}
console.log('unit 8 - ' + randomInt1());



// 9.Создайте функцию, которая возвращает случайное число в указанном диапазоне. Диапазон указывает пользователь с помощью двух переменных, 
// которые передаются функции в качестве параметров.
function randomInt2(min, max) {
  let rand = min - 0.5 + Math.random() * (max - min + 1);
  return Math.round(rand);
}
console.log('unit 9 - ' + randomInt2(5, 8));





// 10.Создайте функцию, которая возвращает случайный цвет. Напомню - цвет это строка rgb(0..255, 0..255, 0..255) - которая 
// содержит 3 числа от нуля до 255 включительно, разделенных запятыми. Т.е. вам нужно три раза создать случайное число от 0 до 255.
function color(){
  let a = randomInt2(0, 255);
  let b = randomInt2(0, 255);
  let c = randomInt2(0, 255);

  return `rgb(${a},${b},${c})`;
}
document.querySelector('.span7').style.background = color();




// 11.Создайте функцию f11, которая возвращает число 5. Создайте функцию которая принимает 2 параметра и перемножает их между собой. 
// В качестве первого параметра передайте f11().
function f11(){
  return 5;
}

function newF11(a, b){
  return a * b
}
console.log('unit 9 - ' + newF11(f11(), 7));





// 12.Создайте функцию toNum, которая принимает 1 параметр - объект input, и возвращает введенное в него значение преобразованное в число.
function toNum(){
  inp12 = document.querySelector('.inp12').value;
  return +inp12;
}
console.log(toNum());





// 13.Создайте функцию emptyInput - которая принимает в качестве параметра input, удаляет все пробелы введенные до и после 
// значения (trim), и проверяет - если результат равен пустой строке - то возвращает false, если нет - то сам результат с обрезанными пробелами.
btn13 = document.querySelector('.btn13').onclick = function(){
  inp13 = document.querySelector('.inp13').value;

  inp13 = inp13.trim();

  if(inp13 == ''){
    console.log('unit 13 - ' + false);
    return false;  
  }
  else{
    console.log('unit 13 - ' + inp13);
    return inp13;
  }
}



// 14.Создайте функцию, которая принимает параметр число и возвращает true если число четное и false если нечетное.
function myFunct(a){
  if (a % 2 == 0){
    return true;
  }
  else{
    return false;
  }
}



// 15.Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmousemove - и стрелочную 
// функцию срабатывающую при этом событии. Стрелочная функция должна выводить move в консоль.
document.querySelector('.div15').onmousemove = () =>{
  console.log('move');
}


// 16.Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmouseenter - и стрелочную 
// функцию срабатывающую при этом событии. Стрелочная функция должна выводить enter в консоль.
document.querySelector('.div16').onmouseenter = () =>{
  console.log('enter');
}


// 17.Создайте div, задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onmouseleave- и стрелочную 
// функцию срабатывающую при этом событии. Стрелочная функция должна выводить leave в консоль.
document.querySelector('.div17').onmouseleave = () =>{
  console.log('leave');
}


// 18.Создате div задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onclick и анонимную ( не стрелочную) функцию, 
// внутрь которой запишите this.style.background = 'red'; В этом случае this указывает на объект, на котором приозошло событие.
document.querySelector('.div18').onclick = function() {
  this.style.background = 'red';
}


// 19.Создате div задайте ему ширину и высоту в CSS, границу. Добавьте на div событие onclick и стрелочную функцию, внутрь которой
//  запишите this.style.background = 'red'; Увы, в данном случае (особенность стрелочных функций) не указывает на объект где произошло событие.
document.querySelector('.div19').onclick = ()=> {
  this.style.background = 'red';
}



// 20.Создайте 5 div.go с текстом. C помощью цикла повесьте на них событие клик и анонимную (не стрелочную) функцию. Внутри функции 
// укажите this.style.background = 'red'; Кликайте по div, изучите результат.
let div20 = document.querySelectorAll('.div20');
for(let i = 0; i < div20.length; i++){
  div20[i].onclick = function(){
    this.style.background = 'red';
   }
}


