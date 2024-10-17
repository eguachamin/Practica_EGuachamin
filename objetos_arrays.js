// Objetos 
// Evelyn Guachamin
const user = {
    name: "Evelyn",
    lastName: "Guachamin",
    age: 27,
    address: {
        city: "Quito",
        telephone: "0992801667",
        street: "Yanacona"
    },
    friends: ['Andres', 'Cristian', 'Henry', 'Jhonny'],
    state: true,
    sendMail() {
        return `Enviar correo a ${this.friends[2]}`; // Cambiado para español
    },
    sendNotification: function () {
        return `Enviar notificación a ${this.friends[1]}`; // Cambiado para español
    }
};

console.log(user.state);                     
console.log(user.sendMail());                 
console.log(user.sendNotification());           

// AGREGA Y ELEMINAR ELEMENTOS DEL OBJETOS 
const user2 = {
    name: "Evelyn",
    lastName: "Guachamin",
    age: 27,
    address: {
        city: "Quito",
        telephone: "0992801667",
        street: "Yanacona"
    },
    friends: ['Andres', 'Cristian', 'Henry', 'Jhonny'],
    state: true,
    sendMail() {
        return `Enviar correo a ${this.friends[2]}`; // Cambiado para español
    },
    sendNotification: function () {
        return `Enviar notificación a ${this.friends[1]}`; // Cambiado para español
    }
};
// Agregar un par de clave y valor al objeto
user2.image = "t.ly/Rhgs";  // Puedes cambiar esto a un enlace de imagen relacionado con Multicines
// Eliminar un par de clave y valor del objeto
delete user2.age; // Se elimina la propiedad 'age' del objeto
console.log(user2);

/// DECOSNTRUCCION DE OBJETOS 
const user3 = {
    firstName: "Joel",
    surname: "Sizalima",
    ageS: 22,
    address1: {
        city: "Quito",
        telephone: "0991234567",
        streets: {
            principal: "Av.MAestro",
            secondary: "Real Audiencia"
        }
    }
};

// Desestructuración de propiedades del objeto
const { firstName, surname, ageS, address1 } = user3;
console.log(firstName, surname, ageS, address1);

//// CONGELAR 
const movieUser1 = {
    firstName: "Andrés",
    lastName: "Parra",
    age: 35,
    address: {
        city: "Ambato",
        telephone: "0985236974",
        street: "DALIA Y EL LIBRO ROJO"
    },
    favoriteMovies: ["Animadas", "Comedia", "Infantil", "Aventura"]
};
Object.freeze(movieUser1);
console.log(Object.isFrozen(movieUser1)); // Verifica si el objeto está congelado
// Intentar agregar una nueva propiedad
movieUser1.image = "t.ly/movie875"; // Esto no tendrá efecto debido a Object.freeze
console.log(movieUser1); // Muestra el objeto original sin la nueva propiedad

// Arrays

//Metodos 
const profileUser2= ["Evelyn","Guachamin",27,true,{ciudad:"Quito"}]
const movie = ["DALIA Y EL LIBRO ROJO","Todos los idiomas","Todos los Formato","Todas las Salas"]
const salas =["Sala normal", "Sala Vip"]

// Agrega al final del arreglo
profileUser2.push(movie)
// Agregar al inicio del arreglo
profileUser2.unshift(salas)
console.log(profileUser);

// POP Y SHIFT
const Cliente_multicines= ["Evelyn","Guachamin",27,"Miembro Premium - Multicines",{ciudad:"quito"}]
// Elimina el elemento del final del arreglo
Cliente_multicines.pop(Cliente_multicines)
// Elimina el elemento del inicio del arreglo
Cliente_multicines.shift(Cliente_multicines)
console.log(Cliente_multicines);

// FIND
const Movies = ["EL CANDIDATO HONESTO","AVENTURAS CANINAS","MY HERO ACADEMIA","ROBOT SALVAJE"]
// método find, encuentra la informacion en el array
const movie1 = Movies.find((e)=>e==="ROBOT SALVAJE")
console.log(movie1);

const movie2 = Movies.find((e)=>e==="AVENTURAS CANINAS")
console.log(movie2);

///// FINDINDEX
const Movies1 = ["EL CANDIDATO HONESTO","AVENTURAS CANINAS","MY HERO ACADEMIA","ROBOT SALVAJE"]
// método findIndex
const encontrar = Movies1.findIndex((f)=>f==="JOKER")
console.log(encontrar)

// CONCAT
const nameCines = ["Multicines","SuperCines","Cinemex","CinePlex"]
const place = ["Condado","Av. America","El Portal","Quicentro"]
// método concat
const newNames = nameCines.concat(place)
console.log(newNames);

//// INCLUDES
// Funciona únicamente con arreglos de un solo valor
const profileUser1= ["Evelyn","Guachamin",27,true,{ciudad:"Quito"}]
console.log(profileUser1.includes(27))
console.log(profileUser1.includes(['Quito']))


//// SOME
// Funciona para arreglos de un solo valor y arreglo de objetos

const friends = ["Kevin","Pablo","Luis","Paola","Santiago","Jennie"]
const userCine =[
    {
        name:"Evelyn",
        lastName:"Guachamin",
        age:19
    },
    {
        name:"Parra",
        lastName:"Andrés",
        age:50
    }
]
const existe = userCine.some(u=>u.name==="Guachamin")
console.log(existe)
const verifica = friends.some(f=>f==="Paola")
console.log(verifica)

///  REDUCE 
const grupo_amigos = [
    { name: "Ariel", age: 22 },
    { name: "Jonathan", age:20 },
    { name: "Camila", age: 20 },
    { name: "Daniel", age: 26 },
    { name: "Wilmer", age: 21 },
    { name: "Nayiver", age: 23 },
];
const carritoCompras = [
    {   movie: "ROBOT SALVAJE",
        qty: 1,
        price: 21.30
    },
    {   product: "Palomitas",
        qty: 2,
        price: 10,
    },
    {
        product: "Combo 3",
        qty: 1,
        price: 20,
    }
]
const resultado = grupo_amigos.reduce((pre, act) => pre + act.age, 0);
console.log("Edad del grupo de amigos : ",resultado);
const totalProductos = carritoCompras.reduce((pre,act)=>pre+act.qty,0)
console.log("Total de productos: ",totalProductos);
const totalPagar = carritoCompras.reduce((pre,act)=>pre+act.price,0)
console.log("Total a pagar con IVA: ",totalPagar+(totalPagar*0.12))

/// Deconstruccion 
const dataNewUser = ["Evelyn", "Guachamin", 28, true, { ciudad: "Quito" }, ["Películas", "Series"]];
const [name, lastname, age, active, address, preferences] = dataNewUser;
console.log(name);        // Muestra: Evelyn
console.log(lastname);    // Muestra: Guachamin
console.log(age);         // Muestra: 28
console.log(active);      // Muestra: true
console.log(address);     // Muestra: { ciudad: "Quito" }
console.log(preferences);  // Muestra: ["Películas", "Series"]
// Saltar el valor en un arreglo
const [accion, , comedia] = ['Acción', 'Drama', 'Comedia'];
console.log(accion);     // Muestra:  Acción
console.log(comedia);    // Muestra:  Comedia
// Desestructurando un arreglo anidado
const categorias = [' Nuevas', ' Clásicas', ' Series', ['Acción', ' Comedia', 'Suspenso']];
const generos = categorias[3];
const suspenso = generos[2];
console.log(suspenso);   // Muestra:  Suspenso