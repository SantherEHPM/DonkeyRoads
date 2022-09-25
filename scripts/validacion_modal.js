'use stirict';

let bttnEject;
let bttnEnv;
let txtRazon;

const borrarMod = () => {
    console.log("x-x")
    document.querySelector('#modal-bk').remove();
}

setTimeout(()=>{
    bttnEject = document.querySelector('#cancelar');
    bttnEject.addEventListener("click", ()=>{
        let divModal = document.createElement("div");
        divModal.id = "modal-bk";
        divModal.className = "div-modal conjunter";
        console.log(divModal)
        divModal.innerHTML = '<h2>¿Por que quiere cancelar el servicio?</h2><textarea name="razon" id="razon" ></textarea>    <button id="enviar-modal" class="button-main">Cancelar</button>';
        document.body.appendChild(divModal);
        bttnEnv=document.querySelector('#enviar-modal');
        bttnEnv.addEventListener("click",()=>{
            let textArea = document.querySelector("#razon");
            textArea.value.match(/^([a-zA-ZÀ-ÖØ-öø-ÿ;0-9]{10})([a-zA-ZÀ-ÖØ-öø-ÿ;0-9])+/g)?borrarMod():alert("Tiene que ingresar una razon para cancelar el servicio \n Debe tener por lo menos 100 letras");
            console.log(divModal.contains);
            divModal = document.createElement("div");
            divModal.id = "modal-bk";
            divModal.className = "div-modal conjunter";
            console.log(divModal)
            divModal.innerHTML = '<h2 style="margin:20px auto">Servicio cancelado</h2>';
            document.body.appendChild(divModal);
            setTimeout(()=>{
                borrarMod();
            },7000);
        });
    });
},500);
    