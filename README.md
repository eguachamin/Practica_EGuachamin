# Funciones y Fundamentos
## Autor
- [@Eguachamín](https://github.com/eguachamin/)


PRÁCTICA - LABORATORIO
EVELYN - GUACHAMIN
// DESARROLLAR LOS EJERCICIOS EN BASE A LA PAGINA ESCOGIDO POR EL GRUPO (FYBECA)
//VARIABLES (FYBECA)
    //Tipos Simples
        // Entero
        let cantidad_producto=1
        //Float
        let precio_pañal=17.54
        //String
        let descripcion_producto="Pañales Para Adultos Comfort Unisex G 20 Unidades"
        //Boolean
        let stock = true
        // Char
        let tamaño_pañal='G'
        //Undefined
        let data5 = undefined 

    //Tipos Compuestos
        //Array
        let compra1= ['Pañales Para Adultos Comfort Unisex G',5,true]
        //Objeto
        let stock_pañales={                    
            descripcion:"Pañales Para Adultos Comfort Unisex",
            stock:true,
            cantidad:20,
            tamaño_pañal:'G'
        }
![image](https://github.com/user-attachments/assets/c9787b0c-64a3-4d40-8d05-2ecd9927e9ba)
        
//STRINGS - Cadena de Caracteres
    let nombre_medicamento_fybeca="Omeprazol (.Medigener) 20Mg Cx16 -Suelta"
//PROPIEDADES - Va seguido de un punto 
    console.log(nombre_medicamento_fybeca.length)
//MÉTODOS - Son los que on seguidos por un parentecis, requieren en algunos casos un parametro
    console.log(nombre_medicamento_fybeca.trim()); //borra los espacios en blanco metodo trim
    console.log(nombre_medicamento_fybeca.includes('20Mg')); //indica si ese caracter esta incluido 
    console.log(nombre_medicamento_fybeca.toUpperCase()); //convierte en mayusculas
    console.log(nombre_medicamento_fybeca.toLocaleLowerCase()); //convierte en minisculas
//ES6 - NUEVAS CARACTERISTICAS
    //Template Strings - Mezcla texto con variable ${}
        console.log(`El producto a enviar es: ${nombre_medicamento_fybeca}`)    
    //Casting - Suma entre stings y numeros 
        let price_medicamento="1.20"
        let price_pañal=17.54
        console.log(+price_medicamento+price_pañal) //(+) transforma el string en float o entero
![image](https://github.com/user-attachments/assets/c9787b0c-64a3-4d40-8d05-2ecd9927e9ba)
![image](https://github.com/user-attachments/assets/361f7574-6b8b-4636-82a7-7a7506bd79d4)
        
    //Operador Ternario
            //Fybeca - Factura - Cobro para envio
        let valor_a_cancelar=20
        let valor_cobrado=18.80

        let para_envio = valor_cobrado <= valor_a_cancelar ? "Requiere Cambio" : "El saldo es insuficiente para la compra"
![image](https://github.com/user-attachments/assets/04d332f0-d058-4497-9706-165e8fc76f70)
        
            //Ingreso a la cuenta Club-Fybeca
        let email_clubFybeca
        !email_clubFybeca ? console.log("El campo es obligatorio") : console.log("Correo Correcto"); 
![image](https://github.com/user-attachments/assets/d04e2561-ed74-414e-873e-fc7536e4b01e)
            //Registro de Clientes
            let cliente_ID = 1751253400
            cliente_ID === "1751253400" ? console.log("Cliente Registrado") : console.log("Continue con su registro");
            
    //Loops
    const lista_compra_user = ['Omeprazol (.Medigener) 20Mg Cx16 -Suelta', 'Play Jabón Infantil Abcderm Gel Moussant 1 L Dispensador Unidad', 'Crema Abc Derm Nutri-protective Milk 500 Ml Unidad']

    lista_compra_user.forEach((compra)=>{console.log(compra)})

    const lista_compra = lista_compra_user.map((compra)=>{compra.toUpperCase()})
    console.log(lista_compra_user);
    console.log(lista_compra)
    
![image](https://github.com/user-attachments/assets/73c31d2c-d903-435b-a854-12efd323eca8)
    
    //Funcion Anonima y Autoejecutada
    /*(function(){
        console.log("Ejecucion de una funcion");
    })()*/

    //Funcion Declarada - Empieza con la palabra function
    function getAvatar(){
        console.log('C:/Users/taty-/Downloads/API-GR1/API-GR1/logo-Fybeca-01.png'); 
    }
![image](https://github.com/user-attachments/assets/7efcfbcf-e23d-4f81-b33c-542ec487b327)
    //FUNCION EXPRESADA - Almacena en una variable la informacion 
    const conectionBDD = function (){
        console.log("Conexion exitosa"); 
    } 
    conectionBDD()

    //ARGUMENTOS
        //Ingreso a la cuenta Club-Fybeca
    const validarEmailAndPassword = function(email, password){
        console.log(`La contraseña ${password} y el email es ${email} incorrecto`)
    }

    validarEmailAndPassword('taty-1997@outlook.com','Eve12354')

    //ARGUMENTOS OPCIONALES
    const validarEmailAndPassword2 = function(email, password="Eve12354" ){
        console.log(`La contraseña ${password} y el email es ${email} incorrecto`)
    }

    validarEmailAndPassword2('taty-1997@outlook.com')
    //Retorno - Hay varios tipos 
    function tiposRetorno(){
        //Logica
        //return "Usuario premium"
        //return 25
        //return true
        //return 88.4
        //return{'user1','user2'}
        return{
            name:"Juan",
            id:854
        }
    }
    tiposRetorno()
    //Arrow Function - Almacena la informacion en una variable
    const conectionBDDMongo =  () =>{
        console.log("Conexion exitosa"); 
    } 
    conectionBDDMongo()

    const registerUser = (email) => {console.log("User registrado")
    registerUser('taty-1997@outlook.com')
    }
    //Objetos
        //Usado para las fichas técnicas en los productos
    const ficha_tecnica_crema= {
        name:"Crema Abc Derm Nutri-protective Milk",
        ml:500,
        aroma:"Si",
        unidad_presentacion:1,
        aplicacion:{
            rostro:"Si",
            cuerpo:"SI"
        },
        beneficios:['Hidrata','Protege','Suaviza'],
        stock:true
    }
    //Presentacion de las fichas técnicas
    console.log(ficha_tecnica_crema.name);
    console.log(ficha_tecnica_crema.ml);
    console.log(ficha_tecnica_crema.beneficios);
    //Otra forma de llamar 
    const nameB = ficha_tecnica_crema.name
    const ml1 = ficha_tecnica_crema.ml

    //ES6
    //DESESTRUCTURACION
    const {name,ml,aroma,unidad_presentacion,stock:cantidad_stock} = ficha_tecnica_crema
    console.log(aroma);
    console.log(cantidad_stock);

    // Propiedades
    ficha_tecnica_crema.photo = '/API-GR1/logo-Fybeca-01.png'
    delete ficha_tecnica_crema.beneficios

    console.log(ficha_tecnica_crema);

    Object.values(ficha_tecnica_crema).includes("") ? console.log("Error") : console.log("Ok");
    
  ![image](https://github.com/user-attachments/assets/c003e6a5-ddb0-49a9-9db8-db07ae099c3b)
  
    const pañal ={
        nameP:"Pañales Natural Care Recien Nacido ",
        priceP:6.42
    }

    const crema ={
        nameC:"Crema Corporal Baby 400 Ml",
        priceC:21.64
    }

    const orderUser = {...pañal,...crema}

    console.log(orderUser)
    
![image](https://github.com/user-attachments/assets/b42f8487-c760-4c65-b575-1b1828f99c84)
    
    // ES6 - Nombres abreviados de propiedades
        //productos de Fybeca
    const nameProducto1 = "Crema Corporal Baby 400 Ml"
    const priceProducto1 = 21.64

    const pedido_Solicitado ={
        nameProducto1,
        priceProducto1
    }

    console.log(pedido_Solicitado);
![image](https://github.com/user-attachments/assets/118ff475-27b9-4caf-b82f-a2f161a54364)
