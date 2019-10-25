// 1.Выведите в консоль с помощью цикла числа от 1 до 10.
for(let i = 1; i <= 10; i++){
  console.log(i);
}


// 2.Выведите на страницу с помощью цикла числа от 1 до 10.
for(let i = 1; i <= 10; i++){
  document.querySelector('.div2').innerText += ' '+i;
}


// 3.Выведите на страницу с помощью цикла числа в диапазоне от 10 до 0.
for(let i = 10; i >= 1; i--){
  document.querySelector('.div3').innerText += ' '+i;
}


// 4.Выведите на страницу с помощью цикла числа в диапазоне от 0 до 10 с шагом 2.
for(let i = 0; i <= 10; i+=2){
  document.querySelector('.div4').innerText += ' '+i;
}



// 5. Выведите на страницу с помощью цикла числа в диапазоне от 21 до 0 с шагом 3.
for(let i = 21; i >= 0; i=i-3){
  document.querySelector('.div5').innerText += ' '+i;
}


// 6.Используя строку ****** - нарисуйте квадрат 6х6.
for(let i = 0; i < 6; i++){
  document.querySelector('.div6').innerHTML += '<span>******</span><br>';
}


// 7.Создайте input, button. По клику на кнопку выведите на страницу все числа, начиная от введенного 
// пользователем в input до нуля.
document.querySelector('.btn7').onclick = ()=> {

  let inp7 = ++document.querySelector('.inp7').value;
  
  for(let i = inp7-1; i >= 0; i--){
    document.querySelector('.div7').innerText += ' '+i;
  }
}


// 8.Создайте input,input, button. По клику на кнопку выведите на страницу все числа, в диапазоне 
// введенных пользователем чисел. Считаем что второе число всегда больше первого.


// 9.Доработайте предыдущую задачу. Добавьте проверку введенных чисел, если второе число больше 
// первого - то делаем вывод, если нет - выводим alert о ошибке.
document.querySelector('.btn8').onclick = ()=> {
  let inp8 = ++document.querySelector('.inp8').value;
  let inp8_2 = ++document.querySelector('.inp8_2').value;

  if(inp8 > inp8_2){
    alert('число в втором инпуте должно быть больше чем в первом!')
  } 
  else 
  {
    for(let i = inp8; i <= inp8_2; i++){
      document.querySelector('.div8').innerText += ' '+i;
    }
  }
}




// 10. Выведите на страницу все четные годы в промежутке от 1901 до 1950.
for (let i = 1901; i <= 1950; i++){
  if( i % 2 == 0 ){
     document.querySelector('.div10').innerText += ' '+i;
  }
}


// 11.Создайте несколько div.one. С помощью length выведите количество div.one на странице.
let one = document.querySelectorAll('.one');
document.querySelector('.div11').innerText = one.length;



// 12.Создайте кнопку, при нажатии на которую запускается функция. Функция окрашивает все div.one в оранжевый цвет.
document.querySelector('.btn12').onclick = ()=> {
  for (let i = 0; i <= one.length; i++){
    one[i].style.background = 'orange';
  }
}


// 13.Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль содержимое всех div.one.
document.querySelector('.btn13').onclick = ()=> {
  for (let i = 0; i <= one.length; i++){
    console.log(one[i].innerText);
  }
}


// 14.Создайте кнопку, при нажатии на которую запускается функция. Функция для всех
//  input[type="text"] устанавливает свойство placeholder = 'Введите данные'
document.querySelector('.btn14').onclick = ()=> {
  let allInp = document.querySelectorAll('input[type="text"]');

  for (let i = 0; i < allInp.length; i++){
    allInp[i].placeholder = 'Введите данные';

  }
}


// 15.Создайте кнопку, при нажатии на которую запускается функция. Функция выводит в консоль количество input[type="text"]
document.querySelector('.btn15').onclick = ()=> {
  let allInp = document.querySelectorAll('input[type="text"]');

  console.log(allInp.length);
}




// 16.Создайте три связанных radiobutton[name="p1"]. Задайте им value. При нажатии на кнопку выводите на страницу 
// value выбранного.
document.querySelector('.btn16').onclick = ()=> {
  let allRadio = document.querySelectorAll('input[name="p1"]');
  
  for(let i = 0; i < allRadio.length; i++)
    if(allRadio[i].checked){
      document.querySelector('.div16').innerText = allRadio[i].value;
    }
}


// 17.Добавьте кнопку. При нажатии кнопки делайте первый из созданных radiobutton в примере выше - checked.
document.querySelector('.btn17').onclick = ()=> {
  let allRadio = document.querySelectorAll('input[name="p1"]');
  allRadio[0].checked = true;
}


// 18.Получите все radiobutton[name="p1"]. C помощью цикла замените в них value. Первому элементу 
// присвойте value = 0, второму value = 1 и т.д.
document.querySelector('.btn18').onclick = ()=> {
  let allRadio = document.querySelectorAll('input[name="p1"]');
  
  for(let i = 0; i < allRadio.length; i++){
    allRadio[i].value = i;
  }
}


// 19.Создайте 3 input[radiobutton][name="p2"]. Задайте им value равное 5, 3, 6. Добавьте кнопку при
//  нажатии на которую проверяйте value выбранного элемента. Если оно 
//  не равно 6 - выводите false, если равно - true.
document.querySelector('.btn19').onclick = ()=> {
  let allRadio2 = document.querySelectorAll('input[name="p2"]');

  for(let i = 0; i < allRadio2.length; i++){
    if(allRadio2[i].checked){
      if(allRadio2[i].value != 6){
        console.log(false)
      }
      else{
        console.log(true)
      } 
    }
  }
}



// 20.Создайте 3 input[radiobutton][name="p3"]. С помощью цикла добавьте на них событие oninput. 
// При изменении состояния input - выводите в консоль текст "был изменен input"
let allRadio3 = document.querySelectorAll('input[name="p3"]');

for(i = 0; i<allRadio3.length; i++){
  allRadio3[i].oninput = ()=> {
    console.log('был изменен input');
  }
}