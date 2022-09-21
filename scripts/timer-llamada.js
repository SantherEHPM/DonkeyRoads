'use strict';

let timer = document.querySelector("#timer");

let sec;
let min;
let msg;

sec=0;
min=0;
msg="";

setInterval(()=>{
    sec+=1;
    if(sec===60){
        sec=0;
        min+=1;
    }
    let res = (min<=9)? msg+='0'+min:msg+=min;
    msg+=":";
    res = (sec<=9)? msg+='0'+sec:msg+=sec; 
    timer.innerHTML=msg;
    msg='';
},1000);