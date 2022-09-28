'use strict'

const nDebito=document.querySelector("#ndebito");
const codesegu=document.querySelector("#cvc");
const Date=document.querySelector("#fechaex");
const formulario=document.querySelector("#tarjetadebito");

formulario.addEventListener("submit",(e)=>{
    e.preventDefault();
    if(validFieldsForm()===-1){
    alert("Se han recibido los datos correctamente");
    }else{
        alert("error en formulario");
    }
});
const validFieldsForm=()=>{
    const values=Object.values(validFields);
    let response=values.findIndex(e=>e===false);
    return response;
}
//objeto de validación
let validFields={
    num:false,
    Date: true,
    csegu:false
}
nDebito.addEventListener('change',(event)=>{
    const inputNDebito=event.target.value;
    const patronNDebito=/([1-9]{14,16})/g;
    validFields.num=inputNDebito.match(patronNDebito) ? true:false;
    console.log(Object.values(validFields));

});

codesegu.addEventListener('change',(event)=>{
    const inputCvc=event.target.value;
    const patronCvc=/^([1-9]{3})/g;
    validFields.csegu=inputCvc.match(patronCvc) ? true:false;
    console.log(Object.values(validFields));

});