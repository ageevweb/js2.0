
// Task 1 ============================================
/* Добавьте на блок .div-1 событие клик и по клику запуск функции t1. Функция должна возвращать и выводить на экран содержимое
блока (только текст). Вывод осуществляется в out-1.  */
let d1 = document.querySelector('.div-1');

d1.onclick = function t1() {
  document.querySelector('.out-1').innerHTML = d1.outerText;
}

// ваше событие здесь!!!

// Task 2 ============================================
/*  Добавьте на блок .div-2 событие клик и по клику запуск функции t2. Функция должна возвращать true или false в зависимости от того, 
нажата ли клавиша alt или нет в момент клика. Также, выводите на экран результат. Вывод осуществляется в out-2. */
let d2 = document.querySelector('.div-2');

d2.onclick = function t2(e) {
  document.querySelector('.out-2').innerHTML = e.altKey;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Добавьте на блок .div-3 событие клик. При клике - увеличивайте ширину блока на 5px. Каждый клик - увеличение ширины на 5px. 
10 кликов - на 50px. Ширину выводите в out-3. */
let d3 = document.querySelector('.div-3');
let w3 = 75;

d3.onclick = function t3() {
  w3 = w3 + 5;
  d3.style.width = w3+'px';
  document.querySelector('.out-3').innerHTML = w3;
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Добавьте на блок .div-4 событие двойной клик и по двойному клику запуск функции t4. Функция должна возвращать и выводить на экран 
содержимое блока (только текст). Вывод осуществляется в out-4. */
let d4 = document.querySelector('.div-4');

d4.ondblclick = function t4() {
  document.querySelector('.out-4').innerHTML = d4.outerText;
}

// ваше событие здесь!!!

// Task 5 ============================================
/*  Дан блок .div-5.active. Добавьте на него событие двойной клик, по которому удалется класс active если он 
есть и добавляется если такого класса нет. */
let d5 = document.querySelector('.div-5');

d5.ondblclick = function t5() {
  d5.classList.toggle('active');
}

// ваше событие здесь!!!

// Task 6 ============================================
/*  Дан блок .div-6 и список .ul-6. При двойном клике на блоке скрывайте .ul-6 еcли он показан и показывайте если скрыт. 
Скрытие и показ делайте через добавление - удаление класса .hide */
let d6 = document.querySelector('.div-6');
let ul6 = document.querySelector('.ul-6');

d6.ondblclick = function t6() {
  ul6.classList.toggle('hide');
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок .div-7. При клике правой кнопкой мыши на блоке добавляйте ему класс .active. При повторном клике - удаляйте. */
let d7 = document.querySelector('.div-7');

d7.oncontextmenu = function t7() {
  d7.classList.toggle('active');
  return false;
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дано checkbox .ch-8. Повесьте на него событие onchange при котором на документе отключается клик правой кнопкой 
мыши если checkbox выбран и отключает если не выбран. */
let d8 = document.querySelector('.ch-8');

d8.onchange = function t8() {
  if(d8.checked){
    window.oncontextmenu = ()=>{
      return false;
    } 
  } else {
    window.oncontextmenu = ()=>{
      return true;
    } 
  }
}

// ваше событие здесь!!!


// Task 9 ============================================
/*  Дан блок .div-9. Внутри блока - изображение 1.png. При клике правой кнопкой мыши
  - меняйте изображение на 2.png. Надеюсь вы догадаетесь изменить только src изображения? */
let d9 = document.querySelector('.div-9 img');

d9.oncontextmenu = function t9() {
  d9.src = 'img/2.png';
  return false;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок .div-10. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - 
меняйте изображение на 2.png. */

let d10 = document.querySelector('.div-10 img');

d10.onmouseenter = function t10() {
  d10.src = 'img/2.png';
}


// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок .div-11. Внутри блока - изображение 1.png. При наведении мыши (mouseenter)  - меняйте 
изображение на 2.png. При уведении мыши - mouseleave - возвращайте исходное изображение. */
let d11 = document.querySelector('.div-11 img');

d11.onmouseenter = function t11() {
  d11.src = 'img/2.png';
}
d11.onmouseleave = function t11_1() {
  d11.src = 'img/1.png';
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Дан блок .div-12. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. */

let d12 = document.querySelector('.div-12');

d12.onmousedown = () => {
  d12.classList.add('active');
}

// ваше событие здесь!!!


// Task 13 ============================================
/*  Дан блок .div-13. Добавьте на него событие mousedown - при нажатии кнопки мыши - добавляйте ему класс active. 
Добавьте ему событие mouseup - при отпускании мыши - удаляйте класс active. */
let d13 = document.querySelector('.div-13');
d13.onmousedown = () => {
  d13.classList.add('active');
}

d13.onmouseup = () => {
  d13.classList.remove('active');
}
// ваше событие здесь!!!


// Task 14 ============================================
/*  Дан блок .div-14. При нажатии кнопки b-14 добавляйте к нему событие onclick - которое, 
при клике добавляем блоку div-14 класс active. */
let d14 = document.querySelector('.div-14');

function t14() {
  d14.classList.add('active');
}
document.querySelector('.b-14').onclick = t14;


// Task 15 ============================================
/*  Дан блок .div-15. Добавьте на него событие move. При каждом движении мыши увеличивайте число внутри на 1. */
let d15 = document.querySelector('.div-15');
let mm15 = 1;

d15.onmousemove = function t15() {
  mm15++;
  d15.innerHTML = mm15;
}
// ваше событие здесь!!!


// Task 16 ============================================
/*  Дан блок .div-16. Добавьте на него событие move. При каждом движении мыши увеличивайте ширину блока на 1px. */
let d16 = document.querySelector('.div-16');
let mm16 = 75;

d16.onmousemove = function t16() {
  mm16++;
  d16.style.width = mm16+'px';
}
// ваше событие здесь!!!

// Task 17 ============================================
/*  Дано две кнопки - b-17_on и b-17_off. Напишите фукнции t17On и t17Off которые включают и отключают событие move 
в задании 16. */

document.querySelector('.b-17_on').onclick = function t17On() {
  d16.onmousemove = function t16() {
    mm16++;
    d16.style.width = mm16+'px';
    return true;
  }
}
document.querySelector('.b-17_off').onclick = function t17Ooff() {
  d16.onmousemove = function t16() {
    return false;
  }
}
// ваше событие здесь!!!
// ваше событие здесь!!!




// Task 18 ============================================
/*  Дан блок div-18. Напишите фукнцию t18 которая выводит в данный блок его ширину при событии onmouseenter. */
let d18 = document.querySelector('.div-18');

d18.onmouseenter = function t18() {
  d18.innerHTML = d18.offsetWidth;
}
// ваше событие здесь!!!





// Task 19 ============================================
/*  Дан блок div-19. Напишите фукнцию t19 которая выводит в данный блок его классы при событии onmouseout. */
let d19 = document.querySelector('.div-19');

d19.onmouseout = function t19() {
  document.querySelector('.out-19').innerHTML = d19.classList.value;
}
// ваше событие здесь!!!





// Task 20 ============================================
/*  Дан элемент progress. Напишите фукнцию t20 которая увеличивает его value на 1 при каждом 
событии mousemove внутри progress. */
let bar = document.querySelector('progress');
let v20 = 0;
let val = document.querySelector('#er');

bar.onmousemove = function t20() {
  if(v20 == 100){
    return;
  }
  v20++;
  bar.value = v20;
  val.innerHTML = v20;
}
// ваше событие здесь!!!