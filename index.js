const container=document.querySelector(".container");

for(let i=0;i<100;i++){
    const box= document.createElement('div');
    box.classList.add('box');
    container.appendChild(box);    
}   

const randomColorBlocks=document.querySelectorAll('.box');

function generator(){

    randomColorBlocks.forEach(e => {
        var newColor=RandomHexaColorCode();
        e.style.backgroundColor=newColor;
        e.textContent=newColor; 
    })
}

function RandomHexaColorCode(){
    var chars="0123456789abcdef";
    var colorLength=6;
    var color="";

    for(let i=0;i<colorLength;i++){
        var randomNumber=Math.floor(Math.random()*chars.length);
        color+=chars.substring(randomNumber,randomNumber+1);
    }
   return "#"+color;
}

generator();