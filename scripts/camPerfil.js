'use strict';

const nombre = document.querySelector('#inputNombre');
const apellido = document.querySelector('#inputApellido');
const telefono = document.querySelector('#inputTel');
const documento = document.querySelector('#inputDocument');
const correo = document.querySelector('#inputEmail');
const formulario = document.querySelector('#form');

let validFields = {
    nom: false,
    apel: false,
    tel: false,
    id: false,
    email: false,
    form: false
}

nombre.addEventListener('change', (event)=>{
    const inputName = event.target.value;
    const patronName = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,50})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,50})$/g;
    validFields.nom = inputName.match(patronName) ? true : false;
    console.log(Object.values(validFields));
});

apellido.addEventListener('change', (event)=>{
    const inputApel = event.target.value;
    const patronApel = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,50})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,50})$/g;
    validFields.apel = inputApel.match(patronApel) ? true : false;
    console.log(Object.values(validFields));
});

telefono.addEventListener('change', function(e){
    const inputTel = event.target.value;
    const patronTel = /(^[0-9]{10}$)/g;
    validFields.tel = inputTel.match(patronTel) ? true : false;
    console.log(Object.values(validFields));

 //   console.log('en telefono');
 /*   const patronTel = /(^[0-9]{10}$)/g;
        if(parseInt(telefono.value) >=3000000000){
        if (telefono.value.match(patronTel)){
            validFields.telefono = true;
        }else{
            alert("Por favor, digite un número de teléfono válido");
        }
    }else{
        alert("Por favor, digite un número de teléfono válido");
    }
        console.log(Object.values(validFields));*/
});

documento.addEventListener('change', (event)=>{
    const inputID = event.target.value;
    const patronID = /(^[0-9]{10}$)/gm;
    validFields.id = inputID.match(patronID) ? true : false;
    console.log(Object.values(validFields));
});

correo.addEventListener('change',(event)=>{
    const inputCorreo = event.target.value;
    const patronCorreo = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/g;
    validFields.email = inputCorreo.match(patronCorreo) ? true : false;
    console.log(Object.values(validFields));
});


/*
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
});*/