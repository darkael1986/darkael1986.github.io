let btn1 = document.getElementById("boton1"),
    overlay = document.getElementById("overlay"),
    popup = document.getElementById("popup"),
    btnCerrarPopup = document.getElementById("btn-cerrar-popup");


let btn2 = document.getElementById("boton2"),
    overlay2 = document.getElementById("overlay2"),
    popup2 = document.getElementById("popup2"),
    btnCerrarPopup2 = document.getElementById("btn-cerrar-popup2");


let btn3 = document.getElementById("boton3"),
    overlay3 = document.getElementById("overlay3"),
    popup3 = document.getElementById("popup3"),
    btnCerrarPopup3 = document.getElementById("btn-cerrar-popup3");
      



btn1.addEventListener('click', function(){
    overlay.classList.add("active");
    popup.classList.add("active");
})


 btnCerrarPopup.addEventListener('click', function(){
     overlay.classList.remove("active");
 }) 
 
 



 btn2.addEventListener('click', function(){
    overlay2.classList.add("active");
    popup2.classList.add("active");
})

 btnCerrarPopup2.addEventListener('click', function(){
     overlay2.classList.remove("active");
 })    




 btn3.addEventListener('click', function(){
    overlay3.classList.add("active");
    popup3.classList.add("active");
})

 btnCerrarPopup3.addEventListener('click', function(){
     overlay3.classList.remove("active");
 })    




