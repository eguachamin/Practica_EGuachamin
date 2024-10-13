//JS - Lado del cliente
//NODE + V8 Lade del servidor

//Variables
//Contenedor de informacion

//Tipos simples
let data = 12               //entero
let data1 = 23.6            //float 
let data2= "Hola"           //string
let data3= '@'              //char
let data4 = false           //boolean
let data5 = undefined       //undefined

//Tipos compuestas

let data6 = ['hola',54,false]   //array 

let user = {                    //objeto
    name:"Ariel",
    activo:true
}

//no usar var - hoisting
//Let y const este si usar

//---------------------------------------------------------------------------

//Strings - cadena de caracteres
let password = "12345Ariel  "

//propiedades - metodos
console.log(password.length);

//métodos 
//console.log(password.trim()); //borra los espacios en blanco metodo trim
//console.log(password.includes('8')); //detecta el cambio y reinicia el servidor de forma automaticamente
//console.log(password.toUpperCase()); //convierte en mayusculas
//console.log(password.toLocaleLowerCase()); //convierte en minisculas

// ES6 - nuevas caracteristicas
// Template Strings
console.log(`El password de Ariel es: ${password}`); //Ayuda a mezclar texto con variables

// -----------------------------------------------------------------------------------------------

let gamePrice1 = "500.35"
let gamePrice2 = 500.35

//Casting - ES6
console.log(+gamePrice1 + gamePrice2); //el + al principio se tranforma en number o float (casting)

// Orden de ejecucion de los operadores ( */ + - ** )

// ----------------------------------------------------------------------------

let userCardBalance = 500
let cardBalance = 1000

// ES6 Operador ternario

let result = cardBalance <= userCardBalance ? "Pay" : "Consuming"  //if mas abreviado

//Valores verdaderos - truthy siempre va dar un valor verdadero

//Valores falsos - falsy siempre va dar un valor falso incluso la cadena vacia

let email
!email ? console.log("Provie an email") : console.log("Registre"); 

// Comparacion estricta === valor y tipo de dato
let userID = 123
userID === "123" ? console.log("User found") : console.log("User doesn't exit");

// --------------------------------------------------------------------------------------

// Loops

const goals = ['Learn JS', 'Play soccer', "Watching Netflix", "Enjoy the holiday"]

goals.forEach((goal)=>{console.log(goal)})

const newGoals = goals.map((goal)=>{goal.toUpperCase()})

//Summary
console.log(goals);
console.log(newGoals)

//JUEVES 10/10/2024
//------------------------------------------------------------------------------------------------

//FUNCION ANONIMA Y AUTOEJECUTADA
/*(function(){
    console.log("Ejecucion de una funcion");
})()*/

//FUNCION DECLARADA
function getAvatar(){
    console.log('/photo/user.png'); //siempre emoieza la palabra function
}

//FUNCION EXPRESADA
const conectionBDD = function (){
    console.log("Conexion exitosa"); // almacena la informacion en una variable
} 
conectionBDD()

//ARGUMENTOS
const validarEmailAndToken = function(email, token ){
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndToken('ariel@gmail.com','123')

//ARGUMENTOS OPCIONALES
const validarEmailAndTokenTwo = function(email, token ="555"){
    console.log(`El token es ${token} y su email es ${email}`)
}

validarEmailAndTokenTwo('ariel@gmail.com')

//RETORNO
function tiposRetorno(){
    //Logica
    // return "Usuarios premium"
    //return 89
    // return true
    // return 88.4
    // return{'user1','user2'}
    return{
        name:"Juan",
        id:854
    }
}
tiposRetorno()

//ES6
//ARROW FUNCTION
const conectionBDDMongo =  () =>{
    console.log("Conexion exitosa"); // almacena la informacion en una variable
} 
conectionBDDMongo()

const registerUser = (email) => {console.log("User registred")
registerUser('ariel@gmail.com')
}

//********************************************************************************

//Objetos

const datosBananeritoGood = {
    name:"Bananerito",
    age:1,
    address:{
        city:"Machala",
        telephone:123
    },
    friends:['Cocodrigo','Leo Nacho'],
    status:true
}

console.log(datosBananeritoGood.name);
/*console.log(datosBananeritoGood.friends);
console.log(datosBananeritoGood.status);*/


const nameB = datosBananeritoGood.name
const friendsB = datosBananeritoGood.friends

//ES6
//DESESTRUCTURACION
const {name,age,address,friends,status:estado} = datosBananeritoGood

console.log(friends);
console.log(estado);

// Propiedades
datosBananeritoGood.photo = 'bananerito.png'
delete datosBananeritoGood.age

console.log(datosBananeritoGood);

Object.values(datosBananeritoGood).includes("") ? console.log("Error") : console.log("Ok");

const lunch ={
    nameL:"Pollo Broaster",
    price:5
}

const drink ={
    nameD:"Jugo e coco",
    sweet:false
}

const orderUser = {...lunch,...drink}

console.log(orderUser)

// ES6
// Nombres abreviados de propiedades

const nameVideoGame = "MarioKart"
const priceVideGame = 89

const videoGame ={
    nameVideoGame,
    priceVideGame
}

console.log(videoGame);

// INTERNET
// TCP-IP
// ISP = IP - Dispositivo (modem) y (router)
// WEB
// CLIENTE - SERVIDOR (ARQUITECTURA WEB)
// HTTP (segura y no segura)
// Dominio y subdominio
// Hosting y Dominio

// JS - Multiplataforma
// JS - lado del cliente + V8
// ECMA International === W3C
// ECMA Script

// NODE + V8 = JS lado del servidor

// Variables
// Contenedor de informacion
// Tipos simples - compuestos

// Strings
// Numbers
// Conditionals
// Functions
// Objects

