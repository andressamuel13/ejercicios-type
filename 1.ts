//taller 1 

//variables logicas 
// let n1:boolean = true
// let n2:boolean = false

//variables numericas
// let n3:number = 10
// let n4:number = 20

//variables any
// let n5:any
// let n6:any

//variables de string
// let n7:string = 'hola'
// let n8:string = 'adios'

// let nombre:string = 'paula'
// let apellido:string = 'perez'
// console.log(`bienvenida ${nombre} ${apellido} a nuestro citio web`);

//arrays 
// let numeros:number[] = [1,2,3,4,5]
// console.log(numeros);

// let palabras:string[] = ['pera','manzana','arroz','guayaba','piña']
// console.log(palabras);

// numeros.forEach(numero => {
//     console.log(`${numero}`)
// });

// palabras.forEach(palabra => {
//     console.log(`${palabra}`)
// })

//cómo eliminar elementos de un array, agregar elementos, leer y actualizar elementos.
//Implemente ejemplos prácticos.
// let numero: number[] = [1,2,3,4,5]
//agregar
// numero.push(6)
// numero.unshift(0)
//eliminar
// numero.pop()
// numero.shift()
// numero.splice(1,1)
//leer elementos
// const primer = numero[0] 
// console.log(`primer numero ${primer}`)
//actualizar datos 
// numero[0] = 0
// console.log(numero);

// type DiasDeLaSemana = {
//     [key: string]: string
// }
// const dias: DiasDeLaSemana = {
//     lunes: "Descripción del lunes",
//     martes: "Descripción del martes",
//     miércoles: "Descripción del miércoles",
//     jueves: "Descripción del jueves",
//     viernes: "Descripción del viernes",
//     sábado: "Descripción del sábado",
//     domingo: "Descripción del domingo",
// }
// console.log(dias.lunes)

// type Numeros = {
//     [key: string]: number;
// }
// const numero1: Numeros = {
//     cero: 0,
//     uno: 1,
//     dos: 2,
//     tres: 3,
//     cuatro: 4,
//     cinco: 5,
//     seis: 6,
//     siete: 7,
//     ocho: 8,
//     nueve: 9,
// }
// console.log(numero1.cinco)

// for (const clave in numero1) {
//     if (numero1.hasOwnProperty(clave)) {
//         console.log(`${clave}: ${numero1[clave]}`)
//     }
// }

//investigue 
// //eliminar 
// interface User {
//     id: number,
//     name: string,
//     email: string
// }

// const user: User = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com"
// }
// delete user.email;
// console.log(user)

//leer valores de un objeto
// interface User {
//     id: number,
//     name: string,
//     email: string
// }

// const user: User = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com"
// }
// const userId: number = user.id // Usando notación de punto
// console.log(userId)

// const userName: string = user['name']// Usando notación de corchetes
// console.log(userName)

//actualizar valores de un objeto 
// interface User {
//     id: number,
//     name: string,
//     email: string
// }
// const user: User = {
//     id: 1,
//     name: "John Doe",
//     email: "john.doe@example.com"
// }
// user.name = "Jane Doe"
// console.log(user)

// user['email'] = "jane.doe@example.com"
// console.log(user)
