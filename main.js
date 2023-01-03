import Bola from './bola.js'

const palco = document.getElementById('palco');
const numObjetos = document.getElementById('numObjects');
const addBubble = document.getElementById('numBubblesAdd');
const btnAdicionar = document.getElementById('btnAdicionar');
const btnRemover = document.getElementById('btnRemoveAll');
 
let palcoWidth = palco.offsetWidth;
let palcoHeight = palco.offsetHeight;

let bolas = [];

window.addEventListener('resize', () => {
    palcoWidth = palco.offsetWidth;
    palcoHeight = palco.offsetHeight;

    numObjetos.innerHTML = bolas.length;
})

btnAdicionar.addEventListener('click', () => {
    const bubblesToAdd = addBubble.value;

    for(let i = 0; i < bubblesToAdd; ++i){
        bolas.push(new Bola(bolas, palco));
        numObjetos.innerHTML = bolas.length;
    }

})

btnRemover.addEventListener('click', () => {
    bolas.forEach(b => b.delete());
})