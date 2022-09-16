'use strict'

const input = document.querySelector("#input");

input.addEventListener('change',)

const emailVal = (object) => {
    const emailPatter = /^([a-zA-ZÀ-ÖØ-öø-ÿ]{3,25})([\s]?)([a-zA-ZÀ-ÖØ-öø-ÿ]{0,25})$/g;
    if(object.value.match(emailPatter)){
        object.validity ='invalid';
    }
}

