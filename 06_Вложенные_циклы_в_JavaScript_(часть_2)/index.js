// 1. С помощью вложенных циклов и символа * нарисуйте: 
// *** *** ***
for(let i = 0; i < 3; i++){
  for(let k = 0; k < 3; k++){
    document.querySelector('.div1').innerHTML += '*';
  }
  document.querySelector('.div1').innerHTML += '&nbsp;';
}


// 2.С помощью вложенных циклов и символа * нарисуйте:
// *****
// *****
// *****
for(let i = 0; i < 3; i++){
  for(let k = 0; k < 5; k++){
    document.querySelector('.div2').innerText += '*';
  }
  document.querySelector('.div2').innerHTML += '<br>';
}


// 3.С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите
// в зависимости от того четная или нет переменная внутреннего цикла.
// 101010
// 101010
// 101010
for(let i = 0; i < 3; i++){
  for(let k = 0; k < 5; k++){
    if(k % 2 == 0){
      document.querySelector('.div3').innerText += 1;
    }
    else{
      document.querySelector('.div3').innerText += 0;
    }
  }
  document.querySelector('.div3').innerHTML += '<br>';
}



// 4.С помощью вложенных циклов и символа 1,0 нарисуйте прямоугольник. 1 или 0 выводите 
// в зависимости от того четная или нет переменная внутреннего цикла. Каждый третий элемент заменяйте на x:
// 10x01x
// 10x01x
// 10x01x
for(let i = 0; i < 3; i++){
  for(let k = 1; k < 7; k++){ 
    if(k % 3 == 0){
      document.querySelector('.div4').innerText += 'x';
    }
    else if(k % 2 == 0){
      document.querySelector('.div4').innerText += 0;
    }
    else{
      document.querySelector('.div4').innerText += 1;
    }
  }
  document.querySelector('.div4').innerHTML += '<br>';
}


// 5.С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***

for(let i = 0; i < 4; i++){
  for(let k = 0; k < i+1; k++){
    document.querySelector('.div5').innerText += '*';
  }
  document.querySelector('.div5').innerHTML += '<br>';
}



// Task 6.
// С помощью вложенных циклов и символа * нарисуйте:
// *****
// ****
// ***
// **
// *

for(let i = 0; i < 5; i++){
  for(let k = i; k < 5; k++){
    document.querySelector('.div6').innerText += '*';
  }
  document.querySelector('.div6').innerHTML += '<br>';
}


// 7.С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *****
// *****

for(let i = 0; i < 3; i++){
  let q = '&nbsp&nbsp';
  let r = '&nbsp';
  
  for(let k = 0; k < 1; k++){
    if(i == 0){
      document.querySelector('.div7').innerHTML += q+'*****';
    }
    else if(i == 1){
      document.querySelector('.div7').innerHTML += r+'*****';
    }
    else{
      document.querySelector('.div7').innerHTML += '*****';
    }
  }
  document.querySelector('.div7').innerHTML += '<br>';
}




// 8.С помощью вложенных циклов и символа * нарисуйте:
// *
// **
// ***
// **
// *
for(let i = 1; i < 6; i++){  

  for(let k = 0; k < 1; k++){
    if(i % 2 == 0){
      document.querySelector('.div8').innerHTML += '**';
    }
    else if(i % 3 == 0){
      document.querySelector('.div8').innerHTML += '***';
    }
    else{
      document.querySelector('.div8').innerHTML += '*';
    }
  }
  document.querySelector('.div8').innerHTML += '<br>';
}



// 9.С помощью вложенных циклов и символа * нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******

for(let i = 1; i < 6; i++){  

  for(let k = 0; k < 1; k++){
    if(i == 1 || i == 5){
      document.querySelector('.div9').innerHTML += '******';
    }
    else{
      document.querySelector('.div9').innerHTML += '*&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp*';
    }
  }
  document.querySelector('.div9').innerHTML += '<br>';
}



// С помощью вложенных циклов и символа который вводит пользователь нарисуйте:
// ******
// *    *
// *    *
// *    *
// ******

document.querySelector('.btn10').onclick = () => {
  z = document.querySelector('.inp10').value

  for(let i = 1; i < 6; i++){  

    for(let k = 0; k < 1; k++){
      if(i == 1 || i == 5){
        document.querySelector('.div10').innerHTML += z+z+z+z+z+z;
      }
      else{
        document.querySelector('.div10').innerHTML += z+'&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp&nbsp'+z;
      }
    }
    document.querySelector('.div10').innerHTML += '<br>';
  }
}




// Task 11.
// С помощью вложенных циклов вывените таблицу умножения на 6 и 7.
for(let i = 6; i < 8; i++){  

  for(let k = 1; k <= 10; k++){
    document.querySelector('.div11').innerHTML += `${i} * ${k} = ${i*k} <br>`;
  }
  document.querySelector('.div11').innerHTML += '____________________<br>';
}


// 12.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 1 2
// 1 2 3
// 1 2 3 4
// 1 2 3 4 5

for(let i = 1; i < 6; i++){  
  for(let k = 1; k <= i; k++){
    document.querySelector('.div12').innerHTML += k
  }
  document.querySelector('.div12').innerHTML += '<br>';
}





// 13.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 01 02 03 04 05 06 07 08 09 10
// 11 12 13 14 15 16 17 18 19 20
// 21 22 23 24 25 26 27 28 29 30
// 31 32 33 34 35 36 37 38 39 40
// 41 42 43 44 45 46 47 48 49 50

for(let i = 0; i < 6; i++){  
  for(let r = 1; r <= 10; r++){
    if(r==10){
      document.querySelector('.div13').innerHTML += i+1  +'0'+'&nbsp';
    }
    else{
      document.querySelector('.div13').innerHTML += i +''+ r + '&nbsp';
    }
  }
  document.querySelector('.div13').innerHTML += '<br>';
}





// 14.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5 4 3 2 1
// 4 3 2 1
// 3 2 1
// 2 1
// 1

for(let i = 1; i <= 5; i++){  
  for(let k = 6; k >= i+1; k--){
    document.querySelector('.div14').innerHTML += k-i;
  }
  document.querySelector('.div14').innerHTML += '<br>';
}




// 15. С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// X X X X 1
// X X X 2 1
// X X 3 2 1
// X 4 3 2 1
// 5 4 3 2 1

for(let i = 5; i >= 1; i--){  
  for(let f = 1; f <= i-1; f++){
    document.querySelector('.div15').innerHTML += 'X';
  }
  for(let k = 6; k >= i+1; k--){
    document.querySelector('.div15').innerHTML += k-i;
  }
  document.querySelector('.div15').innerHTML += '<br>';
}





// 16.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 1
// 2  2
// 3  3  3
// 4  4  4  4
// 5  5  5  5  5
for(let i = 1; i < 6; i++){  
  for(let k = 1; k <= i; k++){
    document.querySelector('.div16').innerHTML += i
  }
  document.querySelector('.div16').innerHTML += '<br>';
}




// 17.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла:
// 5   
// 4  4   
// 3  3  3   
// 2  2  2  2   
// 1  1  1  1  1 
for(let i = 5; i >= 1; i--){  
  for(let k = i; k <= 5; k++){
    document.querySelector('.div17').innerHTML += i
  }
  document.querySelector('.div17').innerHTML += '<br>';
}




// 18.С помощью вложенных циклов нарисуйте, цифры - из счетчиков цикла (четные заменены на X):
// 5
// X  X
// 3  3  3
// X  X  X  X
// 1  1  1  1  1
for(let i = 5; i >= 1; i--){  
  for(let k = i; k <= 5; k++){
    if( i % 2 == 0){
      document.querySelector('.div18').innerHTML += 'X'
    }
    else{
      document.querySelector('.div18').innerHTML += i;
    }
  }
  document.querySelector('.div18').innerHTML += '<br>';
}





// 19.С помощью вложенных циклов и символа * нарисуйте:
//   *****
//  *******
// *********

for( let i = 5; i >= 1; i = i-2){
  for(v = i; v >= 3; v = v - 2){
    document.querySelector('.div19').innerHTML += '&nbsp';
  }
  for( let k = i; k <= 9; k++ ){
    document.querySelector('.div19').innerHTML += '*';
  }
  document.querySelector('.div19').innerHTML += '<br>';
}








// 20. С помощью вложенных циклов и символа * нарисуйте:
//   **
//  ****
// ******
//  ****
//   **

for(let i = 1; i < 6; i++){
  if( i % 2 == 0 ){
    document.querySelector('.div20').innerHTML += '&nbsp****'
  }
  else if(i % 3 == 0){
    document.querySelector('.div20').innerHTML += '******'
  }
  else{
    document.querySelector('.div20').innerHTML += '&nbsp&nbsp**'
  }
  document.querySelector('.div20').innerHTML += '<br>';
}