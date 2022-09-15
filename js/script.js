// EJ 1
// let numero1 = -1;
// let numero2 = 8;
// if (numero1 < numero2) {
//     alert("numero1 no es mayor que numero2");
// }
// if (numero2 > 0) {
//     alert("numero2 es positivo");
// }
// if (numero1 < 0 || numero1 != 0) {
//     alert("numero1 es negativo o distinto de cero");
// }
// if (numero1++<numero2) {
//     alert("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// if (numero1 < numero2) {
//     console.log("numero1 no es mayor que numero2");
// }
// if (numero2 > 0) {
//     console.log("numero2 es positivo");
// }
// if (numero1 < 0 || numero1 != 0) {
//     console.log("numero1 es negativo o distinto de cero");
// }
// if (numero1++<numero2) {
//     console.log("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

// if (numero1 < numero2) {
//     document.write("numero1 no es mayor que numero2");
// }
// if (numero2 > 0) {
//     document.write("numero2 es positivo");
// }
// if (numero1 < 0 || numero1 != 0) {
//     document.write("numero1 es negativo o distinto de cero");
// }
// if (numero1++<numero2) {
//     document.write("Incrementar en 1 unidad el valor de numero1 no lo hace mayor o igual que numero2");
// }

//EJ 2
// let numero;
// let pares = 0;
// let impares = 0;
// let sumpar = 0;
// let pos = 0;
// let neg = 0;
// let propos = 1;
// let cont = 0;

// numero = parseInt(prompt("Un numero", ""));

// while (numero != 0) {

//     if (numero % 2 == 0) {
//         pares++;
//         sumpar = sumpar + numero;
//     }
//     else {
//         impares++;
//     }

//     if (numero > 0) {
//         pos++;
//         propos = propos * numero;
//     }
//     else {
//         neg++;
//     }
//     cont++;

//     numero = prompt("Un numero", 0);
// }
// console.log("Valores pares: " + pares + ", Valores impares: " + impares);
// console.log("Suma de valores pares: " + sumpar);
// console.log("Valores positivos: " + pos + ", Valores negativos: " + neg);
// console.log("Producto de valores positivos: " + propos);
// console.log("Valores introducidos: " + cont);

//EJ 3
// let horas;
// let precio;
// let total;
// let hextra;
// let precioExtra;

// horas = parseInt(prompt("Introduce el numero de horas:"));
// precio = parseInt(prompt("Introduce el precio de las horas:"));
// if (horas <= 40) {
//     total=precio*horas;
// }
// else {
//     hextra = horas - 40;
//     precioExtra = hextra * (precio * 1.5)
//     total=(precio*40)+precioExtra;
// }
// console.log(total)

let nombre = "";
let apellido = "";
let horas;
let precio;
let total;
let hextra;
let precioExtra;

for (let i = 0; i < 5; i++) {
    nombre = prompt("Nombre del trabajador:","");
    apellido = prompt("Apellido del trabajador:","");
    horas = parseInt(prompt("Introduce el numero de horas:"));
    precio = parseInt(prompt("Introduce el precio de las horas:"));
    if (horas <= 40) {
        total = precio * horas;
    }
    else {
        hextra = horas - 40;
        precioExtra = hextra * (precio * 1.5)
        total = (precio * 40) + precioExtra;
    }
    console.log(nombre+" "+apellido+": "+total)
}
