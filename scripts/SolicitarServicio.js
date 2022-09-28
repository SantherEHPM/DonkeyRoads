const salida=document.querySelector("#inputDire");
const llegada=document.querySelector("#inputLlega");
const Tamaño=document.querySelector("#inputTama");
const peso=document.querySelector("#inputPeso");
const Politica=document.querySelector("#checkPolitica");
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
    sali:false,
    lleg:false,
    tam:false,
    peso:false,
    polit:false
}

salida.addEventListener('change',(event)=>{
    const inputSali= event.target.value;
    const patronSalid= /^([a-zA-ZÀ-ÖØ-öø-ÿ\s\d*#*-]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    validfields.sali = inputSali.match(patronSalid) ? true : false;
    console.log(Object.values(validfields));
});

llegada.addEventListener('change',(event)=>{
    const inputLlega= event.target.value;
    const patronLlegad= /^([a-zA-ZÀ-ÖØ-öø-ÿ\s\d*#*-]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    validfields.lleg = inputLlega.match(patronLlegad) ? true : false;
    console.log(Object.values(validfields));
});

Tamaño.addEventListener('change',(event)=>{
    const inputTama= event.target.value;
    const patronTamañ= /^([a-zA-ZÀ-ÖØ-öø-ÿ\s\d*#*-]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    validfields.tam= inputTama.match(patronTamañ) ? true : false;
    console.log(Object.values(validfields));
});

peso.addEventListener('change', function(e){ /**/
    console.log('En peso');
    const patronPes = /(^[0-9]{1,2}$)/g;
    if(parseInt(peso.value) >=200){
        if(peso.value.match(patronPes)){
            validfields.peso=true;

        }else{
            alert("Exceso de peso");
        }
    }
    console.log(Object.values(validfields));
});

Politica.addEventListener('change',(e)=>{
    validfields.polit = Politica.checked === true ? true : false;
    console.log(Object.values(validfields));
});

