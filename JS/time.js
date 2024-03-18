// Fecha inicial en hora de Lima (UTC-5)
var fechaInicialLima = new Date('2023-12-09T00:00:00-05:00').getTime();

// Actualizar contador cada segundo
var intervalo = setInterval(function() {
    // Obtener la hora actual en la zona horaria de Lima
    var fechaActualLima = new Date().toLocaleString('en-US', { timeZone: 'America/Lima' });
    var fechaActualLimaObj = new Date(fechaActualLima);

    // Convertir la fecha actual de Lima a milisegundos
    var fechaActualLimaMs = fechaActualLimaObj.getTime();

    // Diferencia entre la fecha actual en Lima y la fecha inicial
    var diferencia = fechaActualLimaMs - fechaInicialLima;

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
