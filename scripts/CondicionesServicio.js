const politica= document.querySelector("#checkPolitica");
const Detalle= document.querySelector("#inputDeta");
const formulario=document.querySelector("#form");

formulario.addEventListener("submit", (e)=>{
    e.preventDefault();
    if(validFieldsForm() === -1){
        alert("Enviando formulario");
    }else{
        alert("No se puede enviar");
    }
});

const validFieldsForm= ()=>{
    const values = object.values(validfields);
    let response = values.findIndex(e => e === false);
    return response;
}

let validfields = {
    deta:false,
    politica:false
}

Detalle.addEventListener('change',(event)=>{
    const inputDet= event.target.value;
    const patronDeta= /^([a-zA-ZÀ-ÖØ-öø-ÿ\s]{0,1000})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,1000})$/g;
    //Ternario
    validfields.deta = inputDet.match(patronDeta) ? true : false;
    console.log(Object.values(validfields));
});

politica.addEventListener('change',(e)=>{
    validfields.politica = politica.checked === true ? true : false;
    console.log(Object.values(validfields));
});