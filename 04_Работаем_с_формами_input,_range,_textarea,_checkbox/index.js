// 1.Создайте button - при нажатии на него выводите alert с номером задачи
document.querySelector('.btn1').onclick = () => {
  alert('задача № 1');
}



// 2.Создайте input type=button - при нажатии на него выводите alert с номером задачи.
document.querySelector('.btn2').onclick = () => {
  alert('задача № 2');
}



// 3.Создайте p - при нажатии на него выводите alert с номером задачи.
document.querySelector('.p3').onclick = () => {
  alert('задача № 3');
}



// 4.Создайте input(checkbox) и button - при нажатии на него выводите true если checkbox выбран и false если нет.
document.querySelector('.btn4').onclick = () => {
  checkbox = document.querySelector('#check4');

  if(checkbox.checked){
    alert(true);
  } else {
    alert(false);
  }
}



// 5.Создайте input(checkbox) и button. Добавьте value для checkbox. При нажатии на него выводите value если checkbox выбран и false если нет.
document.querySelector('.btn5').onclick = () => {
  checkbox = document.querySelector('#check5');

  if(checkbox.checked){
    alert(checkbox.value);
  } else {
    alert(false);
  }
}




// 6.Создайте input(hidden) и button - при нажатии на него выводите alert с value прописанным в input.
document.querySelector('.btn6').onclick = () => {
    alert(document.querySelector('#inp6').value);
}




// 7.Создайте input(password) и button - при нажатии на него выводите alert с value прописанным в input. 
// Выводите в консоль предупреждение, если длина пароля меньше 6 символов.
document.querySelector('.btn7').onclick = () => {
  inp7 = document.querySelector('#inp7');
  if(inp7.value.length >= 6){
    alert(inp7.value);
  }
  else{
    alert('введите пароль больше 6 символов');
  }
}




// 8.Создайте div и кнопку. При нажатии кнопки создавайте внутри div элемент input и кнопку (innerHTML). 
// Добавьте на созданную кнопку событие - при клике выводить alert c содержимым созданного input.
document.querySelector('.btn8').onclick = () => {
  div8 = document.querySelector('.div8');

  div8.innerHTML = '<input type="text" id="inp8"><br><button class="btn8-1" onclick="showNewInp()">NEW press</button>'
}

function showNewInp(){
  alert(document.querySelector('#inp8').value);
}




// 9.Создайте один input(radio) . и button - при нажатии на button выводите alert с value прописанным
// в активном (если он активен, если нет - то alert - false) radiobutton.
document.querySelector('.btn9').onclick = () => {
  inp9 = document.querySelector('#inp9');

  if(inp9.checked){
    alert(inp9.value);
  }
  else{
    alert(false);
  }
}



// 10.Создайте input(color) и button - при нажатии на него окрашивайте div выбранным цветом.
document.querySelector('.btn10').onclick = () => {
  document.querySelector('.div10').style.background = document.querySelector('#inp10').value;
}



// 11.Создайте input(color) - два элемента и button - при нажатии на кнопку присвойте цвет из первого input в value второго.
document.querySelector('.btn11').onclick = () => {
  document.querySelector('#inp11-2').value = document.querySelector('#inp11').value;
}



// 12.Создайте input(date) и button - при нажатии на кнопку выводите на страницу выбранную дату.
document.querySelector('.btn12').onclick = () => {
  document.querySelector('.div12').innerText = document.querySelector('#inp12').value;
}


// 13.Создайте input(range) и button - при нажатии на кнопку выводите на страницу значение из input. 
// Добавьте событие oninput на range и тоже выводите значение на страницу.
document.querySelector('.btn13').onclick = () => {
  document.querySelector('.div13').innerText = document.querySelector('#inp13').value;
}

document.querySelector('#inp13').oninput = () => {
  document.querySelector('.div13_2').innerText = document.querySelector('#inp13').value;
}


// 14.Создайте text-area и button - при нажатии на кнопку выводите на страницу значение из textarea.
document.querySelector('.btn14').onclick = () => {
  document.querySelector('.div14').innerText = document.querySelector('#inp14').value;
}


// 15.Создайте text-area, input и button - при нажатии на кнопку выводите текс из input в textarea и на страницу.
document.querySelector('.btn15').onclick = () => {
  document.querySelector('.div15').innerText = document.querySelector('#inp15_2').value;
  document.querySelector('#inp15').value = document.querySelector('#inp15_2').value;
}


// 16.Создайте select и button - при нажатии на кнопку выводите на страницу value выбраннов в select option.
document.querySelector('.btn16').onclick = () => {
  document.querySelector('.div16').innerText = document.querySelector('#sel16').value;
}


// 17.Эту задачу пока не делаем!!!!!    OK



// 18.Создайте select добавьте на него событие onchange. По данному событию выводите value выбранного option на страницу.
document.querySelector('#sel18').onchange = () => {
  document.querySelector('.div18').innerText = document.querySelector('#sel18').value;
}



// 19.Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text и password в консоль!.
document.querySelector('.btn19').onclick = (e) => {
  e.preventDefault();
  console.log(document.querySelector('#inp19').value);
  console.log(document.querySelector('#inp19_2').value);
}


// 20.Создайте форму. В ней input(text) и input(password) - и кнопку. По нажатию кнопки выводите значение text 
// и password в консоль! Используйте form.elements (читать)
document.querySelector('.btn20').onclick = (e) => {
  e.preventDefault();
  myForm = document.querySelector('.myForm')

  console.log(myForm.elements.inp20.value);
  console.log(myForm.elements.inp20_2.value);
}
