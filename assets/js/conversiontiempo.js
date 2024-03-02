// Paso 1 solicitar datos usuarios

var total_dias = parseInt(prompt("ingresa la cantidad de dias"));


// Paso 2 realizar operacion

var anios = total_dias / 365;
var semanas = Math.floor(total_dias / 7);
var dias = Math.floor(total_dias / 1);

alert(semanas);

// Paso 3 mostrar resultado


alert(`Durante los ${total_dias} dias que estuviste afuera, pasaron ${anios} años, ${semanas} semanas y ${dias} dias `);

