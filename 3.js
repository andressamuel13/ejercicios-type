"use strict";
//ejercicio 1
// const funcion = () => {
//     return new Promise<string>((resolve, reject) => {
//         resolve('Somos programadores, hacemos mover el mundo')
//     })
// }
// funcion()
// .then(x => console.log(x))
//ejercicio 2 
// const rechazo = () => {
//     return new Promise<string>((resolve, reject) => {
//         reject('Ha ocurrido un errordesconocido')
//     })
// }
// rechazo()
// .catch(error => console.error(error))
//ejercicio 3
// const instituto = () => {
//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             const estrato = -2
//             if(estrato <= 2){
//                 resolve('el usuario tiene derecho al subsidio')
//             }else{
//                 if(estrato > 2 || isNaN(estrato) || estrato < 0){
//                     reject(new Error("Estrato no válido"))
//                 }
//             }  
//         }, 1000);
//     })
// }
// instituto()
// .then(x => console.log(x))
// .catch(error => console.error('ha ocurrido un error: ' + error.message))
// const instituto = () => {
//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             const estrato = 2
//             if (isNaN(estrato) || estrato < 1 || estrato > 6) {
//                 reject(new Error("Estrato no válido"));
//             } else {
//                 if (estrato <= 2) {
//                     resolve('El usuario tiene derecho al subsidio')
//                 } else {
//                     resolve('El usuario NO tiene derecho al subsidio')
//                 }
//             }  
//         }, 1000)
//     })
// }
// instituto()
//     .then(x => console.log(x))
//     .catch(error => console.error('Ha ocurrido un error: ' + error.message))
//ejercicio 4 
// const elevar = () => {
//     return new Promise<number>((resolve, reject) => {
//         resolve(2)
//     })
// }
// elevar()
// .then(x => x **= 2)
// .then(x => x **= 2)
// .then(x => x **= 2)
// .then(x => console.log('el valor final es: ' + x))
//ejercicio 5 
// const promesa1 = () => {
//     return new Promise<string>((resolve) => {
//         resolve("Somos ADSI")
//     })
// }
// const promesa2 = (estado: boolean) => {
//     return new Promise<string>((resolve, reject) => {
//         if (estado) {
//             resolve("Somos programadores")
//         } else {
//             reject(new Error("Promesa 2 no cumplida"))
//         }
//     })
// }
// const promesa3 = () => {
//     return new Promise<string>((resolve) => {
//         resolve("Hacemos mover el mundo")
//     })
// }
// const estadoPromesa2 = false
// promesa1()
//     .then((mensaje1) => {
//         console.log(mensaje1);
//         return promesa2(estadoPromesa2)
//     })
//     .then((mensaje2) => {
//         console.log(mensaje2);
//     })
//     .then((mensaje3) => {
//         console.log(mensaje3)
//     })
//     .catch((err) => {
//         console.error('Ha ocurrido un error:', err.message)
//     })
// const p1 = () => {
//     return new Promise<string>((resolve, reject) => {
//         const estado = true
//         return estado ? resolve('somos adsi') : reject('error')
//     })
// }
// const p2 = () => {
//     return new Promise<string>((resolve, reject) => {
//         const estado2 = false
//         return estado2 ? resolve('somos programadores') : reject(new Error("Promesa 2 no cumplida"))
//     })
// }
// const p3 = () => {
//     return new Promise<string>((resolve, reject) => {
//         const estado3 = true
//         return estado3 ? resolve('hacemos mover el mundo') : reject('Error')
//     })
// }
// p1().then(x => console.log(x))
// p2()
// .then(z => console.log(z))
// .catch(error => console.error(`ha fallado algo: ${error.message}`))
// p3().then(w => console.log(w))
//ejercicio 7 
// const prom = () => {
//     return new Promise<string>((resolve, reject) => {
//         setTimeout(() => {
//             const promesa = false
//             return promesa ? resolve('promesa resulta ') : reject(new Error('info error'))
//         }, 1000);
//     })
// }
// prom()
// .then(x => console.log(x))
// .catch(error => console.log(`error ${error.message}`))
//ejercicio 8
const crear = (tiempo, mensaje) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            const ejecucion = Math.random() < 0.2;
            return ejecucion ? reject(new Error(mensaje + ' falló')) : resolve(mensaje);
        }, tiempo);
    });
};
const p1 = crear(1000, 'promesa 1 hecha');
const p2 = crear(1500, 'promesa 2 hecha');
const p3 = crear(2000, 'promesa 3 hecha');
const p4 = crear(2500, 'promesa 4 hecha');
Promise.all([p1, p2, p3, p4])
    .then(x => {
    x.forEach(y => console.log(y));
})
    .catch(error => console.log(`ha ocurrido un error en la promesa ${error.message}`));
