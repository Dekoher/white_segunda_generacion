/* Ejercicio 1
1. - Union de 2 objetos
Dados 2 objetos crear un solo objeto que tenga las propiedades de los dos iniciales*/
const mujeres = {
    rak: "koder",
    caro: "koder",
    daniela: "koder"
}
const hombres = {
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
}

console.log({...mujeres,...hombres})
console.log('------------Ejercicio 1-------------');

/* 2. - Deconstruccion de objetos
Descripción:
Dado el objeto```koders``` tomar solo los keys de las koders mujeres */

const koders = {
    rak: "koder",
    caro: "koder",
    daniela: "koder",
    antonio: "koder",
    daniel: "koder",
    edwin: "koder",
    manuel: "koder"
}
const {rak,caro,daniela,...spreadObj} = koders;
const womenKoders = {koders, ...spreadObj2}
console.log(spreadObj);
console.log(womenKoders);
console.log('------------Ejercicio 2-------------');