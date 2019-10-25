// Task 1 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. Выведите в out-1 результат. Запускаться функция должна по нажатию b-1. */

let xhttp1 = new XMLHttpRequest();
xhttp1.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-1').innerHTML = this.responseText
  }
}

function t1() {
  xhttp1.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=1');
  xhttp1.send();
}
document.querySelector('.b-1').onclick = t1




// Task 2 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. Добавьте параметр name с вашим именем на латинице. 
Если все сделано верно, сервер пришлет строку hello ваше имя. Выведите в out-2 результат. Запускаться функция должна по нажатию b-2. */
let xhttp2 = new XMLHttpRequest();
xhttp2.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-2').innerHTML = this.responseText
  }
}

function t2() {
  xhttp2.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=andrey');
  xhttp2.send();
}
document.querySelector('.b-2').onclick = t2



// Task 3 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет сумму чисел.  Выведите в out-3 результат. Запускаться функция должна по нажатию b-3. */

let xhttp3 = new XMLHttpRequest();
xhttp3.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-3').innerHTML = this.responseText
  }
}

function t3() {
  xhttp3.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=2&num2=3');
  xhttp3.send();
}
document.querySelector('.b-3').onclick = t3




// Task 4 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. 
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. 
Не забывайте указывать параметр auth (ключ в чате).  Выведите в out-4 результат. Запускаться функция должна по нажатию b-4. */

let xhttp4 = new XMLHttpRequest();
xhttp4.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-4').innerHTML = this.responseText
  }
}

function t4() {
  a = 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=1&num2=10'
  xhttp4.open('GET', a);
  xhttp4.send();
}
document.querySelector('.b-4').onclick = t4



// Task 5 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. Если все сделано верно,
 сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-5 результат. 
 Запускаться функция должна по нажатию b-5. */
let xhttp5 = new XMLHttpRequest();
xhttp5.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-5').innerHTML = this.responseText
  }
}

function t5() {
  xhttp5.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=5');
  xhttp5.send();
}
document.querySelector('.b-5').onclick = t5




// Task 6 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. 
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-6 результат. Запускаться функция должна по нажатию b-6. */
let xhttp6 = new XMLHttpRequest();
xhttp6.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-6').innerHTML = this.responseText
  }
}

function t6() {
  xhttp6.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=11&num2=10');
  xhttp6.send();
}
document.querySelector('.b-6').onclick = t6



// Task 7 ============================================
/*  Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. 
Если все сделано верно, сервер случайную ссылку на изображение. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-7 результат. Запускаться функция должна по нажатию b-7. */
let xhttp7 = new XMLHttpRequest();
xhttp7.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-7').innerHTML = `<img src="${this.responseText}">`
  }
}

function t7() {
  xhttp7.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=7');
  xhttp7.send();
}
document.querySelector('.b-7').onclick = t7



// Task 8 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. 
В качестве параметра по очереди укажите year равный году вашего рождения. 
Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-8 результат. Запускаться функция должна по нажатию b-8.*/

let xhttp8 = new XMLHttpRequest();
xhttp8.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-8').innerHTML = this.responseText;
  }
}

function t8() {
  xhttp8.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1993');
  xhttp8.send();
}
document.querySelector('.b-8').onclick = t8;



// Task 9 ============================================
/* Отправьте GET запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. 
В качестве параметра по очереди укажите m = 1, d=1, y=1. Если все сделано верно, сервер 
возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-9 результат. Запускаться функция должна по нажатию b-9. */

let xhttp9 = new XMLHttpRequest();
xhttp9.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-9').innerHTML = this.responseText;
  }
}

function t9() {
  xhttp9.open('GET', 'http://getpost.itgid.info/index2.php?auth=zhrgB3DxC8LoG7Gcisjc&action=9&year=1993&m=1&d=1&y=1');
  xhttp9.send();
}
document.querySelector('.b-9').onclick = t9;





// Task 10 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 1. 
Если все сделано верно, сервер пришлет строку hello. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-10 результат. Запускаться функция должна по нажатию b-10.*/

let xhttp10 = new XMLHttpRequest();
xhttp10.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-10').innerHTML = this.responseText;
  }
}

function t10() {
  xhttp10.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp10.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp10.send('auth=zhrgB3DxC8LoG7Gcisjc&action=1');
}
document.querySelector('.b-10').onclick = t10;







// Task 11 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 2. 
Добавьте параметр name с вашим именем на латинице. Если все сделано верно, сервер пришлет строку hello ваше имя. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-11 результат. Запускаться функция должна по нажатию b-11. */
let xhttp11 = new XMLHttpRequest();
xhttp11.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-11').innerHTML = this.responseText;
  }
}

function t11() {
  xhttp11.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp11.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp11.send('auth=zhrgB3DxC8LoG7Gcisjc&action=2&name=andrey');
}
document.querySelector('.b-11').onclick = t11;





// Task 12 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 3. 
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет сумму чисел. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-12 результат. Запускаться функция должна по нажатию b-12.*/
let xhttp12 = new XMLHttpRequest();
xhttp12.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-12').innerHTML = this.responseText;
  }
}

function t12() {
  xhttp12.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp12.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp12.send('auth=zhrgB3DxC8LoG7Gcisjc&action=3&num1=5&num2=17');
}
document.querySelector('.b-12').onclick = t12;






// Task 13 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 4. 
Добавьте параметр num1 и num2 содержащие числа. Если все сделано верно, сервер вернет случайное число в заданном диапазоне. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-13 результат. Запускаться функция должна по нажатию b-13.*/
let xhttp13 = new XMLHttpRequest();
xhttp13.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-13').innerHTML = this.responseText;
  }
}

function t13() {
  xhttp13.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp13.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp13.send('auth=zhrgB3DxC8LoG7Gcisjc&action=4&num1=5&num2=17');
}
document.querySelector('.b-13').onclick = t13;





// Task 14 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 5. 
Если все сделано верно, сервер вернет текущее время и дату. Не забывайте указывать параметр auth (ключ в чате). 
Выведите в out-14 результат. Запускаться функция должна по нажатию b-14.*/
let xhttp14 = new XMLHttpRequest();
xhttp14.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-14').innerHTML = this.responseText;
  }
}

function t14() {
  xhttp14.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp14.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp14.send('auth=zhrgB3DxC8LoG7Gcisjc&action=5');
}
document.querySelector('.b-14').onclick = t14;




// Task 15============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 6. Добавьте параметр num1 и num2 содержащие числа. 
Если все сделано верно, сервер вернет большее число. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-15 результат. 
Запускаться функция должна по нажатию b-15. */
let xhttp15 = new XMLHttpRequest();
xhttp15.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-15').innerHTML = this.responseText;
  }
}

function t15() {
  xhttp15.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp15.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
  xhttp15.send('auth=zhrgB3DxC8LoG7Gcisjc&action=6&num1=5&num2=17');
}
document.querySelector('.b-15').onclick = t15;




// Task 16 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 7. Если все сделано верно, сервер случайную ссылку на изображение. 
Не забывайте указывать параметр auth (ключ в чате). Выведите в out-16 результат. Запускаться функция должна по нажатию b-16. */
let xhttp16 = new XMLHttpRequest();
xhttp16.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-16').innerHTML = `<img src="${this.responseText}">`
  }
}

function t16() {
  xhttp16.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp16.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhttp16.send('auth=zhrgB3DxC8LoG7Gcisjc&action=7');
}
document.querySelector('.b-16').onclick = t16;


// Task 17 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 8. В качестве параметра по очереди укажите year равный году вашего рождения. Если все правильно сервер вернет ваш возраст. Не забывайте указывать параметр auth (ключ в чате).Выведите в out-17 результат. Запускаться функция должна по нажатию b-17. */
let xhttp17 = new XMLHttpRequest();
xhttp17.onreadystatechange = function () {
  if (this.readyState == 4 && this.status == 200) {
    document.querySelector('.out-17').innerHTML = this.responseText;
  }
}

function t17() {
  xhttp17.open('POST', 'http://getpost.itgid.info/index2.php', true);
  xhttp17.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhttp17.send('auth=zhrgB3DxC8LoG7Gcisjc&action=8&year=1993');
}
document.querySelector('.b-17').onclick = t17;




// Task 18 ============================================
/*  Отправьте POST запрос на сайт http://getpost.itgid.info/index2.php. В качестве action укажите 9. В качестве параметра по очереди укажите m = 1, d=1, y=1. 
Если все сделано верно, сервер возвратит дату или месяц или год. Не забывайте указывать параметр auth (ключ в чате). Выведите в out-18 результат. Запускаться 
функция должна по нажатию b-18. */
// let xhttp18 = new XMLHttpRequest();
// xhttp18.onreadystatechange = function () {
//   if (this.readyState == 4 && this.status == 200) {
//     document.querySelector('.out-18').innerHTML = this.responseText;
//   }
// }

// function t18() {
//   xhttp18.open('POST', 'http://getpost.itgid.info/index2.php', true);
//   xhttp18.setRequestHeader("content-type", "application/x-www-form-urlencoded");
//   xhttp18.send('auth=zhrgB3DxC8LoG7Gcisjc&action=9&&m=1&d=1&y=1');
// }
// document.querySelector('.b-18').onclick = t18;




// можно было все упростить в 1 функцию типа такой

function ajax(task, method, send){
  let xhttp = new XMLHttpRequest();
  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      document.querySelector(`.out-${task}`).innerHTML = this.responseText;
    }
  }
  xhttp.open(method, 'http://getpost.itgid.info/index2.php', true);
  xhttp.setRequestHeader("content-type", "application/x-www-form-urlencoded");
  xhttp.send(send);
}

function t18() {
  ajax(18, 'POST', 'auth=zhrgB3DxC8LoG7Gcisjc&action=9&&m=1&d=1&y=1');
}
document.querySelector('.b-18').onclick = t18;



