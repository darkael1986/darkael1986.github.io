(function(){
	// Variables
	let lista = document.getElementById("lista"),
		tareaInput = document.getElementById("tareaInput"),
        btnNuevaTarea = document.getElementById("btn-agregar");
        
    //funciones
    const agregarTarea = function(){
        let tarea = tareaInput.value,
            nuevaTarea = document.createElement("li"),
            enlace = document.createElement("a"),
            contenido = document.createTextNode(tarea);

            //comprobacion
            if(tarea == ""){ 
                tareaInput.setAttribute("placeholder", "Agregue una tarea valida");
                tareaInput.className("error");
                return false; //para salir de la funcion
            }

            enlace.appendChild(contenido); //agregamos el contenido al enlace
            enlace.setAttribute("href", "#"); //le damos el atributo href para q sea clickeable
            nuevaTarea.appendChild(enlace); //agregamos el enlace al li
            lista.appendChild(nuevaTarea); //agregamos la nueva tarea a la lista
            

            tareaInput.value = ""; //limpia el intput

            //ponemos en escucha a los nuevos elementos

            for (var i = 0; i <= lista.children.length -1; i++) {
                lista.children[i].addEventListener("click", function(){
                    this.parentNode.removeChild(this);
                });
            }
        
    }

    const comprobarInput = function(){
        
        tareaInput.className = "";
        tareaInput.setAttribute("placeholder", "Agrega tu tarea");
    }

    const eleminarTarea = function(){
        this.parentNode.removeChild(this);
    }

    //eventos

    // Agregar Tarea
	btnNuevaTarea.addEventListener("click", agregarTarea);
 
	// Comprobar Input
    tareaInput.addEventListener("click", comprobarInput);
    

 
	// Borrando Elementos de la lista
	for (var i = 0; i <= lista.children.length -1; i++) {
		lista.children[i].addEventListener("click", eleminarTarea);
	}
   
}())