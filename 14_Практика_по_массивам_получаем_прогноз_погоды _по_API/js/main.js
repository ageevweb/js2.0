let city = [
  { 
    "Cities of England" : [ "Bath", 
                            "Birmingham", 
                            "Bolton", 
                            "Brighton", 
                            "Bristol", 
                            "Bradford", 
                            "Windsor", 
                            "Wolverhampton", 
                            "Gloucester", 
                            "Derby", 
                            "Dover", 
                            "Ipswich", 
                            "York", 
                            "Cambridge", 
                            "Canterbury",
                            "Coventry", 
                            "Colchester", 
                            "Crosby", 
                            "Liverpool", 
                            "Leeds", 
                            "Lester", 
                            "London", 
                            "Luton", 
                            "Manchester", 
                            "Nottingham", 
                            "Norwich", 
                            "Oxford", 
                            "Peterborough", 
                            "Plymouth", 
                            "Portsmouth", 
                            "Preston", 
                            "Reading",
                            "Sunderland", 
                            "Southampton", 
                            "Swindon", 
                            "Salisbury", 
                            "Stoke-on-Trent", 
                            "Cheltenham", 
                            "Chester", 
                            "Sheffield", 
                            "Exeter"
                          ]
  },
  { 
    "Towns of Wales" : [
                          "Cardiff",
                          "Newport",
                          "Swansea",
                          "Monmouth",
                          "Wrexham"
                        ]
  },
  {
    "Cities of Scotland": [ 
                            "Glasgow",
                            "Dundee",
                            "Edinburgh",
                            "Inverness",
                            "Stirling"
                          ]
  },
  { 
    "Northern Ireland" : [  
                            "Antrim",
                            "Ballymena",
                            "Belfast",
                            "Bangor",
                            "Derry",
                            "Dromore",
                            "Coleraine",
                            "Larne",
                            "Lisburn",
                            "Lurgan",
                            "Newry",
                            "Newtownabbey"
                          ]
  },
  { "Isle of the Man": [  "Dolby",
                          "Castletown",
                          "Crosby",
                          "Peel"
                        ]
  }
]


$(document).ready(function() {
  $('select').niceSelect();
});

let s1 = document.querySelector('.select-first');

s1.onchange= () => {

  let opac1 = document.querySelector('select.select.select-second');
  let opac2 = document.querySelector('div.nice-select.select.select-second');

  // чистим селекты при повторной активации
  if (s1.value == 'Choose'){
    opac1.classList.remove('show');
    opac2.classList.remove('show');
  } else {
    opac1.classList.add('show');
    opac2.classList.add('show');
    
    let s2 = document.querySelectorAll('select.select.select-second option');
    let s2Div = document.querySelectorAll('div.nice-select.select.select-second ul li'); 

    if(s2.length > 1){
      for(let v = 1; v<s2.length; v++){
        s2[v].remove();
      }
      for(let n = 1; n<s2Div.length; n++){
        s2Div[n].remove();
      }
    }
    
    for(i = 0; i < city.length; i++) {

      for( var key in city[i]) {
        if(key == s1.value){

          let r = city[i][key];

          for(j=0; j<r.length; j++){
            
            let s2_1 = document.querySelector('select.select.select-second');
            let s2Div_1 = document.querySelector('div.nice-select.select.select-second ul'); 

            let b = document.createElement('li');
            b.classList.add('option');
            b.innerHTML = r[j];
            b.setAttribute('data-value', r[j])
            s2Div_1.appendChild(b);

            let a = document.createElement('option');
            a.innerHTML = r[j];
            s2_1.appendChild(a);
          }
        }
      }
    }
  }
}

let s2 = document.querySelector('.select-second');

s2.onchange = () => {
  fetch('http://api.openweathermap.org/data/2.5/weather?q='+s2.value+',GB&appid=8c63dbdcf04c817af6a297d0b1fa9e25')
  .then(function(resp){
    return resp.json()
  })
  .then(function(data){
    console.log(data)
    document.querySelector('.info-block').innerHTML = 
    
    `<div class="info-block-wrap"><div class="info-block-name">Weather in ${data.name}, GB</div> 
      <div class="info-block-row"> 
        <div class="info-block-icon"><img src="https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png"></div>
        <div class="info-block-col"> 
          <div class="info-block-sky">${data.weather[0].description}</div>
          <div class="info-block-temp">${Math.round(data.main.temp - 273)} &degC</div>
        </div>
      </div>
      <div class="info-block-row">
        <div class="info-block-minTemp">min t: <span>${Math.round(data.main.temp_min - 273)} &degC  /</span></div>
        <div class="info-block-maxTemp">max t: <span>${Math.round(data.main.temp_max - 273)} &degC</span></div>
      </div>
      <div class="info-block-pressure">Pressure: <span>${data.main.pressure} hpa</span></div>
      <div class="info-block-humidity">Humidity: <span>${data.main.humidity} %</span></div>
      <div class="info-block-wind">Wind: <span>${data.wind.speed} m/s</span></div>
      <div class="info-block-coords">Geo coords: <span></span>[${data.coord.lat}, ${data.coord.lon}]</div>
    </div>`
  })
}



