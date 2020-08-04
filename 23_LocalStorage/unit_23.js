
// Task 1 ============================================
/* Создайте функцию t1 которая записывает  в LS  ключ 5 со значением 11. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-1. */

function t1() {
    localStorage.setItem('5', 11)
}
document.querySelector('.b-1').onclick = t1;

// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте функцию t2 которая записывает  в LS  массив a2 = [7,6,5]. Ключ a2. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-2. */
let a2 = [7,6,5];

function t2() {
    localStorage.setItem('a2', JSON.stringify(a2))
}
document.querySelector('.b-2').onclick = t2;

// ваше событие здесь!!!


// Task 3 ============================================
/*  При нажатии кнопки t3 выведите из LS сохранненный массив a2. Выведите в out-3 в формате ключ пробел значение перенос строки.  */

function t3() {
    let d = localStorage.getItem('a2');
    d = JSON.parse(d);
    document.querySelector('.out-3').innerHTML = d;
}
document.querySelector('.b-3').onclick = t3;

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте функцию t4 которая записывает  в LS  массив a4 = {hello: world, hi:mahai}. Ключ a4. Проверьте что происходит при повторном вызове функции. Запускается ф-я по кнопкуе b-4.*/
let a4 = { 
        hello: 'world', 
        hi:'mahai'
}

function t4() {
    localStorage.setItem('a4', JSON.stringify(a4))
}
document.querySelector('.b-4').onclick = t4;

// ваше событие здесь!!!

// Task 5 ============================================
/*   При нажатии кнопки t5 выведите из LS сохранненный массив a4. Выведите в out-4 в формате ключ пробел значение перенос строки. */

function t5() {
    let d = localStorage.getItem('a4');
    d = JSON.parse(d);
    for(let key in d) {
        document.querySelector('.out-5').innerHTML += key +'-'+d[key]+'<br>'
    }
}
document.querySelector('.b-5').onclick = t5;

// ваше событие здесь!!!

// Task 6 ============================================
/*  Создайте функцию t6 которая очищает весь LS. Запуск по кнопке b-6*/

function t6() {
    localStorage.clear();
}
document.querySelector('.b-6').onclick = t6;

// ваше событие здесь!!!


// Task 7 ============================================
/*  Создайте input i-7 куда пользователь может вводить числа и строки. Создайте массив a7. Когда пользователь нажимает кнопку b-7 число должно добавляться в массив. 
Массив должен сохраняться в LS с ключем a7.*/
let a7 = [];
let i7 = document.querySelector('.i-7');

function t7() {
    a7.push(i7.value);
    localStorage.setItem('a7', JSON.stringify(a7));
    // console.log(a7)
}
document.querySelector('.b-7').onclick = t7;

// ваше событие здесь!!!

// Task 8 ============================================
/*   Создайте функцию t8 при запуске которой из a7 удаляется последний элемент. После чего массив сохраняется в LS с ключем a7. Использовать массив из предыдущего задания. */

function t8() {
    let d = localStorage.getItem('a7');
    d = JSON.parse(d);
    d.pop();
    localStorage.setItem('a7', JSON.stringify(d));
}
document.querySelector('.b-8').onclick = t8;
// ваше событие здесь!!!


// Task 9 ============================================
/* Создайте 3 radiobutton c именем rb-9. Задайте для каждого value: #fff, #c0c0c0, #555. 
При изменении radibutton записывайте значение value в LS с ключем bg. Добавьте слушатель событий на изменение LS. 
Если есть ключ bg то при наступлении события изменять цвет фона на заданный в LS. */

let fieldset = document.querySelector('fieldset');
let ch = document.querySelectorAll('.ch');



ch.forEach(elem => {
    elem.onclick = () => {
        if(elem.checked){
            localStorage.setItem('bg', elem.getAttribute('value'));
            fieldset.style.background = elem.getAttribute('value');
        }
    }
});

window.addEventListener('storage', function(e){
    fieldset.style.background = localStorage.getItem('bg');
});

// ваше событие здесь!!!



// Task 10 ============================================
/*  Проект. Дана переменная card - корзина. Добавьте кнопку b-10 и функцию t10, которые сохраняют card в LS.*/

const card = {
    'apple': 3,
    'grape': 2
}

t11();
total();

function t10() {
    localStorage.setItem('card', JSON.stringify(card));
    t11();
    total();
}
document.querySelector('.b-10').onclick = t10;


// Task 11 ============================================
/*  Создайте фукнцию t11 которая читает корзину из LS и выводит на страницу в виде таблицы. Формат -  название товара - количество. 
Функция должна вызываться всегда после перезаписи LS ( в данном случае - просто добавьте ее вызов в нужные функции). */


// Task 12 ============================================
/*  Добавьте в таблицу кнопки плюс и минус возле каждого товара. При нажатии кнопки - изменяйте количество товаров в card, обновляйте LS, выводите на страницу. */


// Task 13 ============================================
/*  Добавьте в таблицу footer который считает общее количество товара. */


// Task 14 ============================================
/*  Добавьте функцию t13, которая при загрузке страницы проверяет наличие card в LS и если есть 
-выводит его на страницу. Если нет - пишет корзина пуста. */


function t11() {
    let d = localStorage.getItem('card');
    d = JSON.parse(d);

    let c='';

    for(let key in d) {
        c+= `<div class="wrap-item" >
                <span class="table" >${key}</span>
                <span class="table btnMinus" data-item="${key}">-</span>                                                           
                <span class="table">${d[key]}</span>                                                           
                <span class="table btnPlus" data-item="${key}">+</span>
            </div>`
    }

    document.querySelector('.out-10').innerHTML = c;

    let minus = document.querySelectorAll('.btnMinus');

    minus.forEach(elem => {
        elem.onclick = function(){
            let r = elem.getAttribute('data-item');  

            for(let key in d) {
                if (key == r){
                    d[key]--;
                    localStorage.setItem('card', JSON.stringify(d));
                    if(d[key] == 0){
                        delete d[key];
                        localStorage.setItem('card', JSON.stringify(d));
                    }
                    total();
                }
            }
            t11();
        }
    });

    let plus = document.querySelectorAll('.btnPlus');
    plus.forEach(elem => {
        elem.onclick = function(){
            let r = elem.getAttribute('data-item');  

            for(let key in d) {
                if (key == r){
                    d[key]++;
                    localStorage.setItem('card', JSON.stringify(d));
                }
                total();
            }
            t11();   
        }
    });
}

function total(){
    let d = localStorage.getItem('card');
        d = JSON.parse(d);

    count = 0;

    for(let key in d) {
        count = count + d[key];
    }

    if(count == 0){
        document.querySelector('.total').innerHTML = 'Корзина пуста!';
    } else {
        document.querySelector('.total').innerHTML = `Колличество товара в корзине: ${count}`;
    }   
}
