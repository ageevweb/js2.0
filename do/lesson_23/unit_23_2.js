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
