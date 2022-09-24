'use strict';

const nombres = document.querySelector('#inputNames');
const edad = document.querySelector('#inputAge');
const correo = document.querySelector('#inputEmail');
const ciudad = document.querySelector('#inputCity');
const politicaData = document.querySelector('#checkPolitica');
const formulario = document.querySelector('#form');

//validacion de formulario
formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if (validFieldsForm() === -1){
        alert("Good, enviando el formulario");
    }

});
const validFieldsForm = () =>{
    const values = Object.values(validFields);
    let response = values.findIndex(e => e === false);
    return response;
}

//objeto de validacion
let validFields = {
    nom:false,
    edad:false,
    mail:false,
    ciud:false,
    politica:false
}

nombres.addEventListener('change',(event)=>{

    const inputNombre = event.target.value;
    const patronNombres = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    //Ternario
    validFields.nom = inputNombre.match(patronNombres) ? true : false;
    console.log(Object.values(validFields));
});
edad.addEventListener('change',function(e){
    const patronEdad =/(^([0-9]){1,2}$)/g;
    if (parseInt(edad.value)>= 18){
        if (edad.value.match(patronEdad)){
            validFields.edad = true;
        }else{
        alert("error en edad");
    }
    }else{
        alert("error en edad");
    }
    console.log(Object.values(validFields));
});

politicaData.addEventListener('change',(e)=>{
    validFields.politica = politicaData.checked === true ? true : false;
    console.log(Object.values(validFields));
});

correo.addEventListener('change',(event)=>{

    const inputCorreo = event.target.value;
    const patronCorreo = /^([a-z]{9})$/g;
    validFields.mail = inputCorreo.match(patronCorreo) ? true : false;
    console.log(Object.values(validFields));
});
ciudad.addEventListener('change',(event)=>{

    const inputCiudad = event.target.value;
    const patronCiudad = /^([a-z]{9})$/g;
    validFields.mail = inputCiudad.match(patronCiudad) ? true : false;
    console.log(Object.values(validFields));
});