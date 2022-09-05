'use strict';
let pregunta = document.querySelectorAll('.pregunta');
//console.log(pregunta);
let btnRespuesta = document.querySelectorAll('.pregunta .more');
let respuesta = document.querySelectorAll('.respuesta');
let parrafo = document.querySelectorAll('.respuesta p');

for (let i = 0; i< btnRespuesta.length; i ++){

    let subirParrafo = parrafo[i].clientHeight;
    let cambio = 0;
    console.log('here');
    btnRespuesta[i].addEventListener('click', ()=>{
        
        if (cambio == 0){

            respuesta[i].style.height = `${subirParrafo}px`;
            pregunta[i].style.marginBottom = '20px';
            btnRespuesta[i].innerHTML = '<i>▲</i>'
            cambio ++;
        }    
        else if (cambio == 1){

            respuesta[i].style.height = `0`;
            pregunta[i].style.marginBottom = '0';
            btnRespuesta[i].innerHTML = '<i>▼</i>'
            cambio --;
        }
    })
}