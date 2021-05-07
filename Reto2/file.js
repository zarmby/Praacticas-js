/*****************************************************
Reto 2, array a matriz cuadrada
*****************************************************/

var vector = [19, 5, 7, 2];
var matriz = [];

var vectorCuad = Math.sqrt(vector.length);

if (Number.isInteger(vectorCuad)) {
    var aux = new Array();
    vector.forEach((element, index) => {
        if (aux.length < vectorCuad) {
            aux.push(element);
        }
        if (aux.length == vectorCuad) {
            matriz.push(aux);
            aux = new Array();
        }
    });
    var izquierda = 0;
    var diagonalIzquierda = 0;
    var derecha = matriz.length - 1;
    var diagonalDerecha = 0;

    matriz.forEach(element => {

        diagonalIzquierda += element[izquierda];
        izquierda++;

        diagonalDerecha += element[derecha];
        derecha--;
    });
    document.write(`el resultado de la diagonal izquierda es: ${diagonalIzquierda} <br>`);
    document.write(`el resultado de la diagonal derecha es: ${diagonalDerecha} <br>`);

    var diferencia = diagonalIzquierda - diagonalDerecha;
    diferencia = (diferencia < 0) ? diferencia * (-1) : diferencia;
    document.write(`diferencia entre lass diagonales es:  ${diferencia}`);
}
else
    document.write("Este arreglo no cumple con los requerimientos para hacer una matriz cuadrada");
