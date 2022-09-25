'use strict';

const creador = (parte,destino) =>{
    const partTp = document.querySelector(`${parte}`).content;
    const destiny =  document.querySelector(`${destino}`);
    const partFrg = document.createDocumentFragment();
    for(let i = 0;i < Math.round((parseFloat(Math.random()+1)*5)); i++){
        const partTemporal = partTp.cloneNode(true);
        partFrg.appendChild(partTemporal);
        console.log(partFrg);
    }
    destiny.appendChild(partFrg);
}

export {creador}