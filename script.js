$(document).ready(function () {
    // PRIMER EJERCICIO
    var mensaje = 'XXcaaamakkCCessseAAllFueeegooDLLKmmNNN',
        primera, segunda,
        orden = 'CeseAlFuego',
        segOrden = 'CorranACubierto';

    let res = '';
    for (let i = 0; i < orden.length; i++) { //el cliclo recorrera el mensaje segun la cantidad de caracteres del texto buscado
        if (mensaje.includes(orden[i])) { //se iterará en 'mensaje' las letras de 'orden'
            res += orden[i];    //en caso de encontrar entonces se van agregando a 'res'
        }
    }
    primera = document.getElementById('primeraLinea');
    segunda = document.getElementById('segundaLinea'); // aqui solo traigo los elementos del html

    if (orden === res) //y aqui comparo si el resultado es igual a la orden, en cualquiera de ambos casos hará una segunda busqueda para ver si existe una segunda orden 
    {
        primera.textContent = 'SI';
        res = '';
        for (let i = 0; i < segOrden.length; i++) {
            if (mensaje.includes(segOrden[i])) {
                res += segOrden[i];
            }
        }
        if (segOrden === res) {
            segunda.textContent = 'SI';
        }
        else {
            segunda.textContent = 'NO';
        }

    }
    else {
        primera.textContent = 'NO';
        res = '';
        for (let i = 0; i < segOrden.length; i++) {
            if (mensaje.includes(segOrden[i])) {
                res += segOrden[i];
            }
        }
        if (segOrden === res) {
            segunda.textContent = 'SI';
        }
        else {
            segunda.textContent = 'NO';
        }

    }

    // SEGUNDO EJERCICIO
    var totalRondas = 0, rondaActual = 0; //esta parte es visual, simplemente par acuando agreguen la cantidad de la ronda al usuario se le muestre en pantalla cuantas rondas se confirmaron
    function guardar_rondas() {
        totalRondas = $('#numRondas').val();
        if (totalRondas > 0) {
            $('#text').hide();
            $('#numRondas').hide();
            $('#guardarRondas').hide();

            $('#infoRondas').show();
            rondas = document.getElementById('totalRondas');
            rondas.textContent = totalRondas;
            document.getElementById('rondaActual').innerHTML = '1';
        }
    }
    $('#guardarRondas').click(guardar_rondas);

    var resUno = 0,
        resDos = 0,
        diferenciaUno = 0,
        diferenciaDos = 0,
        resTablaUno = 0,
        resTablaDos = 0,
        resDifUno,
        resDifDos;

    function agregar_marcadores() {
        var jugadorUno = parseInt($("#jugadorUno").val()); //los valores ingresados se convierten a enteros 
        var jugadorDos = parseInt($("#jugadorDos").val()); 

        resUno += jugadorUno; //se suman los resultados
        resDos += jugadorDos;

        if (resUno > resDos) { //aqui comparo los resultados para saber cual domino en los rondas y guardar las diferencias en un array
            resTablaUno++;
            diferenciaUno = resUno - resDos;
            resDifUno = [];
            resDifUno.push(diferenciaUno);
        } else if (resUno < resDos) {
            resTablaDos++;
            diferenciaDos = resDos - resUno;
            resDifDos = [];
            resDifDos.push(diferenciaDos);
        }

        rondaActual++; //sube de ronda

        if (rondaActual == totalRondas) { //entra aqui cuando ya no hay más rondas para jugar 
            var resFinal, ganadorMsg;

            if (resUno > resDos) { //comienza a comparar los puntos restando el total de los resultados de cada jugador en caso de ser empate de puntos, se evaluara por la veces que domino en el juego
                resFinal = resUno - resDos;
                ganadorMsg = "1";
            } else if (resUno < resDos) {
                resFinal = resDos - resUno;
                ganadorMsg = "2";
            } else if (resTablaUno > resTablaDos) {
                ganadorMsg = "1";
                diferenciaUno = "Mayor dominio en el juego";
            } else if (resTablaUno < resTablaDos) {
                ganadorMsg = "2";
                diferenciaDos = "Mayor dominio en el juego";
            }

            document.getElementById("ganador").innerHTML = ganadorMsg; //aqui solo cambia los valores de html para que se muestre el ganador y la razon o pts
            document.getElementById("diferencia").innerHTML =
                ganadorMsg === "1" ? diferenciaUno : diferenciaDos;

            if(resUno === resDos && resTablaUno === resTablaDos) //en caso que empaten por puntos y dominio se agrega "tiempo extra"
            {
                alert("el juego ha empatado, se agrega una ronda más")
                totalRondas++
            }
            else
            {
                $("#inputs").hide(); //se ocultan los input y se muestran solo los resultados
                $("#resultadoFinal").show();
            }
        }

        $("#jugadorUno").val(""); //aqui se limpian los input cada que se guardan los resultados
        $("#jugadorDos").val("");
    }

    $('#guardarResultados').click(agregar_marcadores);


})
