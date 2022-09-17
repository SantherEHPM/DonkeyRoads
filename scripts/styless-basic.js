'use strict'

const iconHeader = document.querySelector('.header-s-icon');
const sheader = document.querySelector('.header>a');
console.log(iconHeader.width);

setInterval(()=>{

    sheader.setAttribute('box-shadow',`0 ${iconHeader.width}px 15px 5px #ffffffa2`);
    console.log(`${sheader.getAttribute('box-shadow')}`)
},1000);
