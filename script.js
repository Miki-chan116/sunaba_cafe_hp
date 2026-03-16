const fadeElements=document.querySelectorAll(".fade");

function fadeIn(){

fadeElements.forEach(element=>{

const position=element.getBoundingClientRect().top;

const windowHeight=window.innerHeight;

if(position<windowHeight-100){

element.classList.add("show");

}

});

}

window.addEventListener("scroll",fadeIn);

fadeIn();