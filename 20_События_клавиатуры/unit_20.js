
// Task 1 ============================================
/* Дан input .i-1. Напишите функцию t1, которая выводит в .out-1 символ и возвращает его. 
Во всех последующих задачах - работаем с латиницей и цифрами.*/
document.querySelector('.i-1').onkeypress = (e)=>{
    document.querySelector('.out-1').innerHTML += e.key
    return e.key;
}





// Task 2 ============================================
/*  Дан input .i-2. Напишите функцию t2, которая выводит в .out-2 код символа и возвращает его. */
document.querySelector('.i-2').onkeypress = (e)=>{
    document.querySelector('.out-2').innerHTML += e.code+'/'
    return e.code;
}



// Task 3 ============================================
/*  Дан input .i-3. Напишите функцию t3, которая выводит на страницу true если введен символ и false 
если цифра. Для определения - используйте код клавиши. */
document.querySelector('.i-3').onkeypress = (e)=>{
    if(e.keyCode < 48 || e.keyCode > 57){
        document.querySelector('.out-3').innerHTML = true;
    } else {
        document.querySelector('.out-3').innerHTML = false;
    }
}




// Task 4 ============================================
/*  Дан input .i-4. Напишите функцию t4, которая выводит в .out-4 только символы в нижнем регистре. Т.е. 
ввели ab4Bci в out получаем ab4bci. */
document.querySelector('.i-4').onkeypress = (e)=>{
    document.querySelector('.out-4').innerHTML += e.key.toLowerCase();
}




// Task 5 ============================================
/*  Дан input .i-5. Напишите функцию t5, которая выводит в .out-5 все вводимые символы в верхнем регистре. 
Т.е. пользователь ввел AbCd и функция выведет ABCD. */
document.querySelector('.i-5').onkeypress = (e)=>{
    document.querySelector('.out-5').innerHTML += e.key.toUpperCase();
}






// Task 6 ============================================
/*  Дан input .i-6. Напишите функцию t6, которая выводит в .i-6 только символы в 
нижнем регистре.  */
document.querySelector('.i-6').onkeypress = (e)=>{
    e.preventDefault();
    // e.preventDefault();
    // document.querySelector('.i-6').value += e.key.toLowerCase();
    if(e.charCode < 90 && e.charCode > 65 ){
        
    } else {
        document.querySelector('.i-6').value += e.key;
    }
}





// Task 7 ============================================
/*  Дан input .i-7. Напишите функцию t7, которая выводит в .out-7 случаный 
символ из массива a7 при каждом вводе символа. */
document.querySelector('.i-7').onkeypress = (e)=>{
    const a7 = ['&spades;', '&clubs;', '&hearts;', '&diams;'];
    e.preventDefault();

    function randomInteger(min, max) {
        let rand = min + Math.random() * (max + 1 - min);
        return Math.floor(rand);
      }

    document.querySelector('.out-7').innerHTML += a7[randomInteger(0, 3)];
}





// Task 8 ============================================
/*  Дан input .i-8. Напишите функцию t8, которая выводит в .out-8 вводимый 
в input текст, но заменяет i на 1,o на 0, l на 7. */
document.querySelector('.i-8').onkeypress = (e)=>{
    const a8 = [1, 0, 7];
    e.preventDefault();
    if(e.keyCode == 105 || e.keyCode == 73){
        document.querySelector('.out-8').innerHTML += a8[0];
    }
    else if(e.keyCode == 79 || e.keyCode == 111){
        document.querySelector('.out-8').innerHTML += a8[1];
    }
    else if(e.keyCode == 76 || e.keyCode == 108){
        document.querySelector('.out-8').innerHTML += a8[2];
    }
    else{
        document.querySelector('.out-8').innerHTML += e.key;
    }
}



// Task 9 ============================================
/* Дан input .i-9. Напишите функцию t8, выводит в .out-9 количество нажатых клавиш стрелка вниз. */
let DownPress = 0;

document.querySelector('.i-9').onkeydown = (e)=>{
    console.log(e)
    if(e.key == "ArrowDown"){
        DownPress++;
        document.querySelector('.out-9').innerHTML = DownPress;
    }
}





// Task 10 ============================================
/*  Дан input .i-10 и изображение 1.png. Добавьте событие на input, при нажатии клавиш стрелка 
вправо и стрелка влево увеличивать ширину изображения. Клавиши стрелка вверх и вниз - увеличивать высоту 
изображения. Одно нажатие клавиши - 1px. */
let imgBlock = document.querySelector('.div-10');
let imgBlockW = 75;
let imgBlockH = 75;

document.querySelector('.i-10').onkeydown = (e)=>{
    console.log(e);
    if(e.keyCode == 38){
        imgBlockH++;
        imgBlock.style.height = imgBlockH+'px';
    }
    if(e.keyCode == 40){
        imgBlockH--;
        imgBlock.style.height = imgBlockH+'px';
    }
    if(e.keyCode == 39){
        imgBlockW++;
        imgBlock.style.width = imgBlockW+'px';
    }
    if(e.keyCode == 37){
        imgBlockW--;
        imgBlock.style.width = imgBlockW+'px';
    }
}




// Task 11 ============================================
/*  Проект. Дан input .i-11. Используя знания html и css нарисуйте клавиатуру (можно схематически). 
Изображение должно содержать числа, символьные клавиши, пробел, enter, caps lock, shift, tab, alt. 
При вводе текста в input в момент нажатия клавиши - затемняйте ее, в момент отпускания - возвращайте 
к первоначальному состоянию. Аналогично при нажатии enter, space, alt, shift, ctrl. Затемнение 
реализуйте через добавление класса CSS. Для удобства рекомендую каждой клавише добавить 
атрибут data с символом. Если нажата клавиша caps lock - то присвоить ей затемнение, которое работает 
до последующего отжатия клавиши. */

let key = document.querySelectorAll('.key');
let i11 = document.querySelector('.i-11');


key.forEach(function (elem){
    elem.setAttribute('symb', elem.innerText);
});




i11.onkeydown = function(e){
    console.log(e);

    key.forEach(function (elem){
        if(e.key == elem.getAttribute('symb') || 
           e.key == (elem.getAttribute('symb').toLowerCase()) ||

           e.code == "Space" && elem.innerText == "Space" ||
           e.code == "ArrowLeft" && elem.innerText == "Left" ||
           e.code == "ArrowRight" && elem.innerText == "Right" ||
           e.code == "ArrowUp" && elem.innerText == "Up" ||
           e.code == "ArrowDown" && elem.innerText == "Down"
           ){
            elem.style.background = 'grey';
        }
        if(e.code == "CapsLock" && elem.innerText == "CapsLock"){
            elem.classList.toggle('CapsLock');
        }
    });


}

i11.onkeyup = function(e){
    console.log(e);

    key.forEach(function (elem){
        if(e.key == elem.getAttribute('symb') || 
           e.key == (elem.getAttribute('symb').toLowerCase()) ||

           e.code == "Space" && elem.innerText == "Space" ||
           e.code == "ArrowLeft" && elem.innerText == "Left" ||
           e.code == "ArrowRight" && elem.innerText == "Right" ||
           e.code == "ArrowUp" && elem.innerText == "Up" ||
           e.code == "ArrowDown" && elem.innerText == "Down"
        ){
            elem.style.background = 'white';
        }

    });
}





