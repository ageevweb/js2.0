// Task 1.
// Выведите массив a1 на страницу.
a1 = {
 3 : 'hello',
 'one' : 'hi'
};

for( var key in a1) {
  document.querySelector('.div1').innerHTML += key +' ---- '+a1[key]+'<br>';
}



// Task 2.
// Выведите на страницу элементы из масиива a2 у которых символов больше 4.
a2 = {
 3 : 'hello',
 'one' : 'hi',
 'testt' : 'vodoley',
 'ivan' : 'ivanov'
};

for( var key in a2) {
  if(a2[key].length > 4){
    document.querySelector('.div2').innerHTML += a2[key]+'<br>';
  }
}



// Task 3.
// Выведите на страницу элементы из масиива a3 у которых ключ содержит больше 4 символов.
a3 = {
  3 : 'hello',
  'one' : 'hi',
  'testt' : 'vodoley',
  'ivan' : 'ivanov'
};

for( var key in a3) {
  if(key.length > 4){
    document.querySelector('.div3').innerHTML += key+'<br>';
  }
}




// Task 4.
// Выведите на страницу элементы из масиива a4 у которых значение - число.
a4 = {
 3 : 'hello',
 'one' : 4,
 'testt' : 'vodoley',
 'ivan' : 6
};

for( var key in a4) {
  if(typeof(a4[key]) == 'number'){
    document.querySelector('.div4').innerHTML += a4[key]+'<br>';
  }
}





// Task 5.
// Дан ассоциативный массив a5. Найдите сумму элементов находящихся в нем.
a5 = {
 a : 7,
 z : 4,
 45 : 12,
 f : 6
};

let sum5 = 0;

for( var key in a5) {
  if(typeof(a5[key]) == 'number'){
    sum5 = sum5 + a5[key];
  }
}
document.querySelector('.div5').innerHTML += sum5;




// Task 6.
// Создайте ассоциативный массив a6, который содержит ключи name, age, sex, height и значения любого персонажа. Выведите массив на страницу.
ageev = {
  "name" : "Andrey",
  "age" : 26,
  "sex" : "male",
  "height" : 186
};

for( var key in ageev) {
  document.querySelector('.div6').innerHTML += key +' : '+ageev[key]+'<br>';
}





// Task 7.
// Создайте ассоциативный массив a7, два input (u7-key__input, u7-value__input) и кнопку. При нажатии кнопки добавляйте 
// в массив новое значение с соответствующим ключем. Выводите массив на страницу.

a7 = {
  "qw" : "zzzzzz",
  "12" : "dfgdfg",
  "asd" : "ddd",
  "244" : "zxcv"
};

for( var key in a7) {
  document.querySelector('.div7').innerHTML += key +' ---- '+a7[key]+'<br>';
}

document.querySelector('.btn7').onclick = ()=>{
  inpK = document.querySelector('.u7-key__input').value;
  inpV = document.querySelector('.u7-value__input').value;

  a7[inpK] = inpV;

  let out = '';

  for( var key in a7) {
    out += key +' ---- '+a7[key]+'<br>';
  }
  document.querySelector('.div7').innerHTML = out;
}


// Task 8.
// Добавьте к предыдущей задачи input.u8-key__input и кнопку. При нажатии кнопки - удаляйте значение с соответствующим ключем. 
// Выводите массив на страницу.
document.querySelector('.btn8').onclick = ()=>{

  inpD = document.querySelector('.u8-key__input').value;  

  let out = '';

  delete a7[inpD];

  for( var key in a7) {
    out += key +' ---- '+a7[key]+'<br>';
  }
  document.querySelector('.div7').innerHTML = out;
}




// Task 9.
// Добавьте к предыдущей задачи input.u9-delete-value__input и кнопку. При нажатии кнопки - удаляйте записи с соответствующим значением. 
// Выводите массив на страницу.

document.querySelector('.btn9').onclick = ()=>{
  inpDV = document.querySelector('.u9-delete-value__input').value;  
  let out = '';

  for( var key in a7) {
    if(a7[key] == inpDV){
      delete a7[key];
      console.log(key);
    }
  }

  for( var key in a7) {
    out += key +' ---- '+a7[key]+'<br>';
  }
  document.querySelector('.div7').innerHTML = out;
}




// Task 10.
// Добавьте к предыдущей задачи input.u10-has-key__input и кнопку. При нажатии кнопки - возвращайте true если 
// такой ключ есть в массиве, и false если нет.
document.querySelector('.btn10').onclick = ()=>{
  inpDH = document.querySelector('.u10-has-key__input ').value;  

  for( var key in a7) {
    if(key == inpDH){
      document.querySelector('.span10').innerHTML = 'true';
      return true;
    }
    else{
      document.querySelector('.span10').innerHTML = 'false';
    }
  }
}



// Task 11.
// Создайте массив, который описывает метро киевского метрополитена, выведите его на страницу.
a11 = {
  "red":        ['Академгородок',
                'Житомирская',
                'Святошин',
                'Нивки',
                'Берестейская',
                'Шуляевская',
                'Политехнический институт',
                'Вокзальная',
                'Университет',
                'Театральная',
                'Крещатик',
                'Арсенальная',
                'Днепр',
                'Гидропарк',
                'Левобережная',
                'Дарница',
                'Черниговская',
                'Лесная'   
                ],
  "green":      ['Сырец',
                'Дорогожичи',
                'Лукьяновская',
                'Золотые ворота',
                'Дворец спорта',
                'Кловская',
                'Печерская',
                'Дружбы народов',
                'Выдубичи',
                'Славутич',
                'Осокорки',
                'Позняки',
                'Харьковская',
                'Вырлица',
                'Бориспольская',
                'Красный хутор'
                ],
  "blue":       ['Лыбедская',
                'Дворец Украина',
                'Республиканский стадион',
                'Площадь Лва Толстого',
                'Площадь независимости',
                'Почтовая площадь',
                'Контрактовая площадь',
                'Тараса Шевченко',
                'Петровка',
                'Оболонь',
                'Минская',
                'Героев Днепра'
                ]
}

o11 = '';
for(var key in a11) {
 
  o11 += '<br>'+key +' : '+'<br><br>';

  for(i = 0; i < a11[key].length; i++){
    o11 += '/' + a11[key][i];
  }
  o11 += '<br>';
}
document.querySelector('.div11').innerHTML = o11;




// Task 12.
// Добавьте к предыдущей задаче select.u12-branch и кнопку. Пользователь может выбрать цвет ветки и нажать кнопку, 
// после чего на страницу будут выведены только станции данной ветки.
s12 = document.querySelector('.u12-branch');

document.querySelector('.show-brunch').onclick = ()=>{
  let q = s12.value;  
  
  document.querySelector('.div11').innerHTML = a11[q];
}




// Task 13.
// Добавьте к предыдущей задаче кнопку button.u13-reverse которая при нажатии выводит станции ветки в обратном порядке. 
// Внимание! Все подобные задачи не меняют массив, а меняют только вывод!!!
document.querySelector('.u13-reverse').onclick = ()=>{
  let q = s12.value;

  document.querySelector('.div11').innerHTML = a11[q].reverse();
}





// Task 14.
// Добавьте к предыдущей задаче select.u14-find-station и кнопку. В select - пользователь может выбрать станцию, 
// а вы перебирая массив - вывести ветку на которой эта станция находится.
document.querySelector('.b14-find-station').onclick = ()=> {
  let i14 = document.querySelector('.i14-find-station').value;

  for(var key in a11) {
    for(i = 0; i < a11[key].length; i++){ 
      if(i14 == a11[key][i]){
        document.querySelector('.span14').innerHTML = key;
      }
    }
  }
}





// Task 15.
// Добавьте к предыдущему заданию 2 select где пользователь может выбрать 2 станции, и если они на одной ветке - то 
// по нажатию на кнопку будет показано сколько станций между ними (сами станции не включаем. Если это соседние станции - то 0).
document.querySelector('.b15').onclick = ()=> {
  let from = document.querySelector('.i15-from').value;
  let to = document.querySelector('.i15-to').value;

  let one = '';
  let two = '';
  let m = '';

  for(var key in a11) {
    for(i = 0; i < a11[key].length; i++){ 
      if(from == a11[key][i]){
        one = a11[key][i];
        m = key;
      }
      else if(to == a11[key][i]){
        two = a11[key][i];
      }
    }
  }

  console.log(one,key,   two);

  if(a11[m].indexOf( `${two}` ) != -1 ){

    let m1 = '';
    let m2 = '';

    for(i = 0; i < a11[m].length; i++){

      if(a11[m][i] == one){
        m1 = i+1;
      }
      else if(a11[m][i] == two){
        m2 = i;
      }
    }
    console.log(m1,m2);

    if(m2 > m1 || m2 == m1){
      document.querySelector('.span15').innerHTML = m2 - m1;
    }
    else{
      document.querySelector('.span15').innerHTML = m1 - m2-2;
    }
  } else {
    document.querySelector('.span15').innerHTML = 'Станции должны быть на одной ветке!';
  }
}




// Task 16.
// Добавьте 3 radiobutton.u16-radio которые содержат value = red, green, blue - в соотвтествии с цветом веток метро. 
// Добавьте пустой select.u16-select. При выборе radio - программа должна в select добавлять option с названиями станций метро. 
// Т.е. выбрали radio(value="green") то внутрь select должны быть записаны option со станциями зеленой ветки. 
// Выбрали red - select должен быть очищен и добавлены option со станциями красной ветки.
document.querySelector('.b16').onclick = ()=> {
  let radio = document.querySelectorAll('.r16');
  let select = document.querySelector('.s16');
  let options = document.querySelectorAll('.s16 option');

  for(i=0; i < options.length; i++){
    options[i].remove(); 
  }

  myOpt = ''

  for(let i=0; i<radio.length; i++){
    if(radio[i].checked){
      myOpt = radio[i].value
    }
  }
  for(i=0; i < a11[myOpt].length; i++){
    console.log(a11[myOpt][i]);

    a = document.createElement('option');
    a.innerHTML = `${a11[myOpt][i]}`;
    select.appendChild(a);
  }
}





// Task 17.
// Создайте массив, который описывает метро киевского метрополитена и обозначаются конечные и станции перехода, 
// выведите его на страницу. Конечные - обозначать 0, перехода - 1.
// a17 = {
// 	"red" : [ ['Академгородок', 0] ,...],
// 	"green" : 
// }

a17 = {
	"red":        [['Академгородок', 0],
                'Житомирская',
                'Святошин',
                'Нивки',
                'Берестейская',
                'Шуляевская',
                'Политехнический институт',
                'Вокзальная',
                'Университет',
                ['Театральная', 1],
                ['Крещатик', 1],
                'Арсенальная',
                'Днепр',
                'Гидропарк',
                'Левобережная',
                'Дарница',
                'Черниговская',
                ['Лесная', 0]   
                ],
  "green":      [['Сырец', 0],
                'Дорогожичи',
                'Лукьяновская',
                ['Золотые ворота', 1],
                ['Дворец спорта', 1],
                'Кловская',
                'Печерская',
                'Дружбы народов',
                'Выдубичи',
                'Славутич',
                'Осокорки',
                'Позняки',
                'Харьковская',
                'Вырлица',
                'Бориспольская',
                ['Красный хутор', 0]
                ],
  "blue":       [['Лыбедская', 0],
                'Дворец Украина',
                'Республиканский стадион',
                ['Площадь Лва Толстого', 1],
                ['Площадь независимости', 1],
                'Почтовая площадь',
                'Контрактовая площадь',
                'Тараса Шевченко',
                'Петровка',
                'Оболонь',
                'Минская',
                ['Героев Днепра', 0]
                ]
}
o17 = '';
for(var key in a17) {
 
  o17 += '<br>'+key +' : '+'<br><br>';

  for(i = 0; i < a17[key].length; i++){
    o17 += '/' + a17[key][i];
  }
  o17 += '<br>';
}
document.querySelector('.div17').innerHTML = o17;



// Task 18.
// Выведите на страницу только станции с переходами из массива a17.
o18 = '';
for(var key in a17) {
  for(i = 0; i < a17[key].length; i++){

    if(a17[key][i][1] == 1){
      o18 += '/' + a17[key][i][0];
    }
  }
}
document.querySelector('.div18').innerHTML = o18;





// Task 19.
// Создайте ассоциативный массив где ключами являются страны азии, а вложенными массивами - ассоциативный массив содержащий 
// название столицы, количество населения, площадь. Выведите его на страницу.
const country = {
  "china" :       {
                  "capital" : "beijing",
                  "population" : 1380083000,
                  "area" : "9 596 960 km2"
                  },
  "vietnam" :     {
                  "capital" : "hanoi",
                  "population" : 85789573,
                  "area" : "329 560 km2"
                  },   
  "thailand" :   {
                  "capital" : "bangkok",
                  "population" : 63525062,
                  "area" : "514 000 km2"
                  }        
}

let o19 = ""; 
  for (var key in country) { 
    let c = country[key]; 
    o19 += '<b>'+key+'</b>'+'<br>';
    for (var key2 in c) { 
      o19 += '/' + c[key2]; 
    }
    o19 += '<br>';
  }
document.querySelector('.div19').innerHTML = o19;




// Task 20.
// Дополните массив из задачи 19 так, чтобы пользователь мог сам выбирать страну в select, а необходимая информация 
// подтягивалась на страницу.
let s20 = document.querySelector('.s20');
let div20 = document.querySelector('.div20');


for (var key in country) { 
  a = document.createElement('option');
  a.innerHTML = key;
  a.setAttribute('value', key);
  s20.appendChild(a);
}

s20.oninput = ()=>{
  let o20 = '';
  let c = country[s20.value];

  for (var key in c) { 
    o20 += key +' ---- '+c[key]+'<br>'
  }
  div20.innerHTML = o20;
}

