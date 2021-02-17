(function(){

    const actualizarHora = function() {
        let fecha = new Date(),
            horas = fecha.getHours(),
            minutos = fecha.getMinutes(),
            segundos = fecha.getSeconds(),
            diaSemana = fecha.getDay(),
            ampm;
            dia = fecha.getDate(),
            mes = fecha.getMonth(),
            año = fecha.getFullYear();
            


    let pHoras = document.getElementById("horas"),
        pMinutos = document.getElementById("minutos"),
        pSegundos = document.getElementById("segundos"),
        pDiaSemana = document.getElementById("diaSemana"),
        pDia = document.getElementById("dia"),
        pMes = document.getElementById("mes");
        pAño = document.getElementById("año"),
        pAmpm = document.getElementById("ampm");


    let semana = ["Domingo", "Lunes", "Martes", "Miercoles", "Jueves", "Viernes", "Sabado"];
    pDiaSemana.textContent = semana[diaSemana];  //diaSemana nos trae el numero del dia y ese valor lo pasamos al arreglo
    pDia.textContent = dia;   
    
    let meses = ["Enero", "Febrero", "Marzo", "Abril", "Mayo", "Junio", "Julio", "Agsto", "Septiembre", "Octubre", "Noviembre", "Diciembre"];
    pMes.textContent = meses[mes];

    pAño.textContent = año;

    if (horas => 12){
        horas = horas -12;
        ampm = "PM";
    } else{
        ampm = "AM";
    };

    if (horas == 0){
        horas = 12;
    }


    pHoras.textContent = horas;
    pAmpm.textContent = ampm;

    if (minutos <10){
        minutos = "0"+ minutos;
    }

    if (segundos <10){
        segundos = "0" + segundos;
    }


    pMinutos.textContent = minutos;
    pSegundos.textContent = segundos;


    };
   
    actualizarHora();
    
    const intervalo = setInterval(actualizarHora, 1000);

}());