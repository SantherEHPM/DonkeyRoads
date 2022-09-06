'use strict'

const btGuardar= document.getElementById("guardar");
console.log(btGuardar);

btGuardar.addEventListener("click",function(e) {
    e.preventDefault();
    let form=document.getElementById("tarjetadebito");
    let form2=document.getElementById("tarjetadebito");
    let form3=document.getElementById("tarjetadebito");
    console.log(form[0].value);
    console.log(form2[1].value);
    console.log(form3[2].value);
});