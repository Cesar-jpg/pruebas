var mensaje = 'XXcaaamakkCCessseAAllFueeegooDLLKmmNNN',
    primera,segunda,
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
    res ='';
    for (let i = 0; i < segOrden.length; i++) {
        if (mensaje.includes(segOrden[i])) {
            res += segOrden[i];
        }
    }
    if (segOrden === res)
    {
        segunda.textContent = 'SI';
    }
    else
    {
        segunda.textContent = 'NO';
    }

}
else
{
    primera.textContent = 'NO';
    res ='';
    for (let i = 0; i < segOrden.length; i++) {
        if (mensaje.includes(segOrden[i])) {
            res += segOrden[i];
        }
    }
    if (segOrden === res)
    {
        segunda.textContent = 'SI';
    }
    else
    {
        segunda.textContent = 'NO';
    }

}

