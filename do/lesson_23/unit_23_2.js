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







