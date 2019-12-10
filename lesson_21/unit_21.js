
// Task 1 ============================================
/* Создайте блок div-1. Добавьте на него событие touchstart. Выведите в out-1 слово  touch если событие сработает. */

document.querySelector('.div-1').addEventListener("touchstart", t1);
// прикосновение

function t1(){
  document.querySelector('.out-1').innerHTML += 'touch '
}



// ваше событие здесь!!!

// Task 2 ============================================
/* Создайте блок div-2. Добавьте на него событие touchstart. Выведите в out-2 число срабатываний события. */

document.querySelector('.div-2').addEventListener("touchstart", t2);


function t2(e) {
  document.querySelector('.out-2').innerHTML += e.touches.length;
}

// ваше событие здесь!!!


// Task 3 ============================================
/*  Создайте блок div-3_1 и div-3_2. Добавьте на них событие touchstart. Выведите в out-3 номер блока 1 или 2 на котором сработало событие. */


document.querySelector('.div-3_1').addEventListener("touchstart", t3);
document.querySelector('.div-3_2').addEventListener("touchstart", t3);

function t3() {
  document.querySelector('.out-3').innerHTML += this.innerText+' ';
}

// ваше событие здесь!!!


// Task 4 ============================================
/*  Создайте блок div-4. И кнопку b-4. При нажатии кнопки - добавляйте событие 
ontouchstart на блок div-4. При событии происходит вывод текста touch в out-4.  */

document.querySelector('.b-4').onclick = function ()  {
  document.querySelector('.div-4').addEventListener("touchstart", t4);
}

function t4() {
  document.querySelector('.out-4').innerHTML += 'touch ';
}




// ваше событие здесь!!!

// Task 5 ============================================
/*  Дана кнопка b-5. При ее нажатии очищайте событие ontouchstart на блоке div-4. */

document.querySelector('.b-5').onclick = t5; 

function t5() {
  document.querySelector('.div-4').removeEventListener("touchstart", t4);
}

// ваше событие здесь!!!





// Task 6 ============================================
/*  Добавьте событие ontouchend на div-4. При его срабатывании выведите в out-6 слово touchend. */

document.querySelector('.div-4').addEventListener("touchend", t6);


function t6() {
  document.querySelector('.out-6').innerHTML += 'touchend ';
}

// ваше событие здесь!!!


// Task 7 ============================================
/*  Дан блок div-7. Добавьте событие touch, при срабатывании которого окрашивайте блок в красный цвет. */
document.querySelector('.div-7').addEventListener("touchstart", t7);


function t7() {
  document.querySelector('.div-7').style.background = 'red'
}

// ваше событие здесь!!!

// Task 8 ============================================
/*  Дан блок div-8. Добавьте на него событие touch, которое при срабатывании окрашивает блок 
случаным цветом из массива a8=[red, green, blue, orange, pink, yellow] */

document.querySelector('.div-8').addEventListener("touchstart", t8);


function t8() {


  let a8 = ['red', 'green', 'blue', 'orange', 'pink', 'yellow'];

  function randomInteger(min, max) {
    let rand = min - 0.5 + Math.random() * (max - min + 1);
    return Math.round(rand);
  }

  document.querySelector('.div-8').style.background = a8[randomInteger(0, 5)]
}

// ваше событие здесь!!!


// Task 9 ============================================
/* Дан блок div-9. Добавьте событие ontouch. Выводите количество одновременных касаний в out-9. */

document.querySelector('.div-9').addEventListener("touchstart", t9);


function t9(e) {
  document.querySelector('.out-9').innerHTML += e.changedTouches.length;
}

// ваше событие здесь!!!


// Task 10 ============================================
/*  Дан блок div-10. Добавьте на него событие touchmove. При срабатывании события - 
увеличивайте его ширину на 1. */

document.querySelector('.div-10').addEventListener("touchmove", t10);

let w = 75;
function t10() {
  w = w+5;
  document.querySelector('.div-10').style.width = w+'px';
}

// ваше событие здесь!!!

// Task 11 ============================================
/*  Дан блок div-11. Добавьте на него событие touch. При срабатывании выводите радиус 
события radiusX, radiusY. */

document.querySelector('.div-11').addEventListener("touchstart", t11);

function t11(e) {
  console.log()
  document.querySelector('.out-11').innerHTML = `radiusX = ${e.changedTouches[0].radiusX} <br> radiusY = ${e.changedTouches[0].radiusY}`
}

// ваше событие здесь!!!

// Task 12 ============================================
/*  Мини проект. Ознакомьтесь с версткой в задании 12. Добавьте touch события так, чтобы при клике на img-12-min 
картинка появлялась в блоке div-12-max. Если нажимается кнопка prev - то появляется изображение идущее перед текущим. 
Если нажимается кнопка next - то после текущего. Выбор изображений зациклен.  Изображение, которое сейчас дублируется 
в большом блоке должно выделяться классом .active-img. Добавьте кнопку reset для сброса состояния, когда выводится 
первое изображение. Все изображения и начальное состояние - выводится из массива 
    a = [1.png, 2.png, 3.png, 4.png, 5.png, 6.png] - изображения находятся в папке img.
    Усложните задачу - подумайте как в массиве сохранить информацию текст, которая будет выводиться если картинка активна. 
    Сам текст можно сохранять в data-text при отрисовке изображения.
    Источник иконок https://www.iconfinder.com/iconsets/unigrid-phantom-halloween
*/

a = ['1.png', '2.png', '3.png', '4.png', '5.png', '6.png'];
a2 = ['Череп', 'Тыква', 'Паутина', 'Яд', 'Cуп', 'Рука'];

let imgMax = document.querySelector('.img-12-max');
let imgMin = document.querySelectorAll('.img-12-min');
let imgText = document.querySelector('.img-12-text');
let btnPrev = document.querySelector('.prev');
let btnNext = document.querySelector('.next');
let btnReset = document.querySelector('.reset');
let atr = 0;
var it

document.querySelector('.img-12-text').innerHTML = a2[0];

imgMin.forEach(elem => {
  elem.setAttribute('data-num', atr);
  atr++;
  elem.addEventListener("touchstart", t12);
});


function removeActClass(){
  imgMin.forEach(elem => {
    elem.classList.remove('active-img')
  });
}


function t12() {
  removeActClass();
  this.classList.add('active-img');
  imgMax.setAttribute('src', `img/${+this.getAttribute('data-num')+1}.png`);
  imgText.innerHTML = a2[+this.getAttribute('data-num')];
}


btnReset.onclick = function(){
  removeActClass();
  imgMin[0].classList.add('active-img');
  imgMax.setAttribute('src', `img/${a[0]}`);
  imgText.innerHTML = a2[0];
}


btnPrev.onclick = function(){
  imgMin.forEach(elem => {
    if(elem.classList.contains('active-img')){
      it = elem
    }
  });
  if(+it.getAttribute('data-num') == 0){
    removeActClass();
    imgMin[imgMin.length-1].classList.add('active-img');
    imgMax.setAttribute('src', `img/${a[a.length-1]}`);
    imgText.innerHTML = a2[a2.length-1];
  } else {
    removeActClass();
    imgMin[+it.getAttribute('data-num')-1].classList.add('active-img');
    imgMax.setAttribute('src', `img/${a[+it.getAttribute('data-num')-1]}`);
    imgText.innerHTML = a2[+it.getAttribute('data-num')-1];
  } 
}


btnNext.onclick = function(){
  imgMin.forEach(elem => {
    if(elem.classList.contains('active-img')){
      it = elem
    }
  });
  if(+it.getAttribute('data-num') == imgMin.length-1){
    removeActClass();
    imgMin[0].classList.add('active-img');
    imgMax.setAttribute('src', `img/${a[0]}`);
    imgText.innerHTML = a2[0];
  } else {
    removeActClass();
    imgMin[+it.getAttribute('data-num')+1].classList.add('active-img');
    imgMax.setAttribute('src', `img/${a[+it.getAttribute('data-num')+1]}`);
    imgText.innerHTML = a2[+it.getAttribute('data-num')+1];
  } 
}
  

















// let atr = 1;

// imgMin.forEach(elem => {
//   elem.setAttribute('data-num', atr);
//   atr++;
//   elem.addEventListener("touchstart", t12);
// });


// function t12() {
//   imgMin.forEach(elem => {
//     elem.classList.remove('active-img')
//   });
//   this.classList.add('active-img');
//   imgMax.setAttribute('src', `img/${+this.getAttribute('data-num')}.png`);
//   imgText.innerHTML = a2[+this.getAttribute('data-num') - 1];
// }


// btnReset.onclick = function(){
//   imgMin.forEach(elem => {
//     elem.classList.remove('active-img');
//   });
//   imgMin[0].classList.add('active-img');
//   imgMax.setAttribute('src', `img/${a[0]}`);
//   imgText.innerHTML = a2[0];
// }


// btnPrev.onclick = function(){
//   imgMin.forEach(elem => {

//     if(elem.classList.contains('active-img')){

//       if(+elem.getAttribute('data-num') == 1){

//         console.log(imgMin[imgMin.length-1]);

//         imgMin.forEach(elem => {
//           elem.classList.remove('active-img');
//         });

//         imgMin[imgMin.length-1].classList.add('active-img');
//         imgMax.setAttribute('src', `img/${a[a.length-1]}`);
//         imgText.innerHTML = a2[a2.length-1];
//       } 
//       else{

//         imgMin.forEach(elem => {
//           elem.classList.remove('active-img');
//         });
        
//         imgMin[+elem.getAttribute('data-num')-1].classList.add('active-img');
//         imgMax.setAttribute('src', `img/${a[+elem.getAttribute('data-num')-2]}`);
//         imgText.innerHTML = a2[+elem.getAttribute('data-num')-2];
//       }
//     }
//   });
// }






