'use strict';

const headBasic = document.querySelector("head");


headBasic.innerHTML = '<meta charset="UTF-8"><meta http-equiv="X-UA-Compatible" content="IE=edge"><meta name="viewport" content="width=device-width, initial-scale=1.0"><link rel="stylesheet" href="../styless/styless-basic.css"><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Combo&family=Oswald:wght@300;400;500&family=Prompt:ital,wght@0,300;0,400;1,300;1,400&display=swap" rel="stylesheet"><link rel="icon" href="./assets/img/iconF.png"><title>DonkeyRoads</title>';


let head = document.querySelector('head');

let TXTFile = new XMLHttpRequest();

let fragment = document.createDocumentFragment();

TXTFile.open("GET","../assets/txt/header.txt",false);
TXTFile.send(false);

let template = document.createElement("template");

template.innerHTML = `${TXTFile.responseText}`;
fragment.appendChild(template.content.cloneNode(true));

console.log(document.body);

document.body.insertBefore(fragment,document.querySelector("main"));

TXTFile.open("GET","../assets/txt/footer.txt",false);
TXTFile.send(false);

template.innerHTML = `${TXTFile.responseText}`;
fragment.appendChild(template.content.cloneNode(true));

console.log(document.body);

document.body.appendChild(fragment);

function insertStyless(ruta){
    head.innerHTML = ` <link rel="stylesheet" href="../styless/${ruta}.css">`;
}


