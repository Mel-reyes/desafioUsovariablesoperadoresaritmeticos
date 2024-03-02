// Paso Solicitar grados celciuis


var gradosCelsius = parseInt(prompt("Ingresa grados Celsius:"));

// Paso 2: conversiones
// Transformación a grados Kelvin
var gradosKelvin = gradosCelsius + 273.15;
// Transformación a grados Fahrenheit
var gradosFahrenheit = (gradosCelsius * 9 / 5) + 32;

// Paso 3: mostrar resultados
alert(`Conversión a grados Kelvin: ${gradosKelvin}`);
alert(`Conversión a grados Fahrenheit: ${gradosFahrenheit}`);
