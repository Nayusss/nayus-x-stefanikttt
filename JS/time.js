// Fecha inicial
var fechaInicial = new Date('2023-12-09T00:00:00Z').getTime();

// Actualizar contador cada segundo
var intervalo = setInterval(function() {
    // Fecha actual
    var fechaActual = new Date().getTime();
    
    // Diferencia entre la fecha actual y la fecha inicial
    var diferencia = fechaActual - fechaInicial;
    
    // Calcular días, horas, minutos y segundos
    var dias = Math.floor(diferencia / (1000 * 60 * 60 * 24));
    var horas = Math.floor((diferencia % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutos = Math.floor((diferencia % (1000 * 60 * 60)) / (1000 * 60));
    var segundos = Math.floor((diferencia % (1000 * 60)) / 1000);
    
    // Mostrar contador en los elementos con ID correspondientes
    document.getElementById('days').innerHTML = dias;
    document.getElementById('hours').innerHTML = horas;
    document.getElementById('minutes').innerHTML = minutos;
    document.getElementById('seconds').innerHTML = segundos;
}, 1000); // Actualizar cada segundo