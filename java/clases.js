/**SISTEMA DE VOTACION**/


function votacion(){
    var nacionalidad = prompt("Indique su nacionalidad")
    var edad = parseInt(prompt("Indique su edad"))
    nacionalidad =  nacionalidad.toUpperCase();


    if ((nacionalidad == "URUGUAYA" || nacionalidad == "URUGUAYO")
        && (edad >= 18)) {
        alert("Bienvenido puedes Votar");
    } else if ((nacionalidad == "URUGUAYA" || nacionalidad == "URUGUAYO")
        && (edad < 18)) {
        alert("Eres Uruguayo/a pero no puedes votar ya que eres menor de edad");
    } else if ((nacionalidad != "URUGUAYA") && ((edad >= 18)) || (edad < 18)) {
        alert(("eres ") + nacionalidad + (" No puedes votar ya que no eres Uruguayo"));
    };

} 

(function(){

  ejecucion =  document.getElementById("boton_votacion");
    ejecucion.addEventListener("click",votacion);
}())

/**SISTEMA DE ATENCION AL CLIENTE**/


function atencion_al_cliente(){
    
var numero = parseInt(prompt ("ingrese 1 (atencion al cliente), 2 (consultas), 3 (reclamos), 4 (estado),  6 (para salir)"))

while (numero !== 6 ){
    switch (numero){
        case (1):
            alert ("pronto se estara comunicando un agente con usted");
            break;
        case (2):
            var consultas = parseInt(prompt("ingresa el numero segun su solicitud: 1 (pedido) 2 (cobro) 3 (articulos)"))
            switch (consultas){
                case (1):
                    alert("usted ingreso consulta de pedido ya sera atendido");
                    break;
                case (2):
                    alert("usted ingreso consulta de cobro ya sera atendido");
                    break;
                case (3):
                    alert("usted ingreso consulta de articulos ya sera atendido");
                    break;
                default:
                    alert("ingreso un numero incorrecto vuelva a actualizar la pagina");
                    break;
            }
        break;
           
        case (3):
            var reclamos =  parseInt(prompt("ingresa el numero segun su solicitud: 1 (servicio tecnico) 2 (pedido) 3 (articulo) 4 (atencion al publico)"))
            switch(reclamos){
                case (1):
                    alert("usted ingreso reclamo de servicio tecnico ya sera atendido")
                    break;
                case (2):
                    alert ("usted ingreso reclamo de pedido ya sera atendido")
                    break;
                case (3):
                    alert ("usted ingreso reclamo de  articulo ya sera atendido")
                    break;
                case (4):
                    alert ("usted ingreso reclamo de atencion al cliente ya sera atendido")
                    break;
                default:
                    alert("su opcion no es valida vuelva a reiniciar el programa")
                    break;
            }
        break;
        case (4):
            var estado = parseInt(prompt("ingrese el numero 1 (ubicacion) 2 (demora) 3 (estado de preparacion)"));
            switch(estado){
                case(1):
                    alert("usted ingreso estado ubicacion ya sera atendido");
                    break;
                case(2):
                    alert("usted ingreso estado demora ya sera atendido");
                    break;
                case(3):
                    alert("usted ingreso estado demora ya sera atendido");
                default:
                    alert("su opcion no es valida vuelva a actualizar la pagina");
            }   

        break;  
       
        default: 
           var numero = parseInt(prompt ("¡su numero es incorrecto! Por favor ingrese un numero correcto 1 (atencion al cliente), 2 (consultas), 3 (reclamos), 4 (estado), 6 (para salir)"))
           while (numero !== 6 ){
            switch (numero){
                case (1):
                    alert ("pronto se estara comunicando un agente con usted");
                    break;
                case (2):
                    var consultas = parseInt(prompt("ingresa el numero segun su solicitud: 1 (pedido) 2 (cobro) 3 (articulos)"))
                    switch (consultas){
                        case (1):
                            alert("usted ingreso consulta de pedido ya sera atendido");
                            break;
                        case (2):
                            alert("usted ingreso consulta de cobro ya sera atendido");
                            break;
                        case (3):
                            alert("usted ingreso consulta de  articulos ya sera atendido");
                            break;
                        default:
                            alert("ingreso un numero incorrecto vuelva a actualizar la pagina");
                            break;
                    }
                    break;
                case (3):
                    var reclamos =  parseInt(prompt("ingresa el numero segun su solicitud: 1 (servicio tecnico) 2 (pedido) 3 (articulo) 4 (atencion al publico)"))
                    switch(reclamos){
                        case (1):
                            alert("usted ingreso reclamo de servicio tecnico ya sera atendido")
                            break;
                        case (2):
                            alert ("usted ingreso reclamo de pedido ya sera atendido")
                            break;
                        case (3):
                            alert ("usted ingreso reclamo de articulo ya sera atendido")
                            break;
                        case (4):
                            alert ("usted ingreso reclamo de atencion al cliente ya sera atendido")
                            break;
                        default:
                            alert("su opcion no es valida vuelva a reiniciar el programa")
                            break;
                    }
                    break;
                case (4):
                    var estado = parseInt(prompt("ingrese el numero 1 (ubicacion) 2 (demora) 3 (estado de preparacion)"));
                    switch(estado){
                        case(1):
                            alert("usted ingreso estado de ubicacion ya sera atendido");
                            break;
                        case(2):
                            alert("usted ingreso estado de demora ya sera atendido");
                            break;
                        case(3):
                            alert("usted ingreso estado de preparacion ya sera atendido");
                            break;
                        default:
                            alert("su opcion no es valida vuelva a actualizar la pagina");
                    }   
                    break;

                default:
                    alert("volvio a ingresar mal el numero vuelva a actualizar la pagina")
                    break;
        }
        break;
}  
    }break;
}

}

/* SISTEMA DE GENERACION DE TICKET DE LOTERIA*/


(function(){
     boot = document.getElementById ("boton_boot_atencion");
     boot.addEventListener("click", atencion_al_cliente);
})();

function jugar_loteria(){
    var loteria = prompt("¿quieres jugar a la loteria?");
    var loteria = loteria.toLocaleUpperCase();

if (loteria == "SI" ){
   numero1 = prompt("ingrese su primer numero");
   numero2 = prompt("ingrese su segundo numero");
   numero3 = prompt("ingrese su tercer numero");
   numero4 = prompt("ingrese su cuarto numero");
   numero5 = prompt("ingrese su quinto numero");
    alert(" tus numeros son " + numero1 + " " + numero2 + " " + numero3 + " " + numero4 + " " + numero5);}
else
 alert("muy bien no jugaras a la loteria");

}

(function(){
    juego_loteria =document.getElementById("boton_loteria");
    juego_loteria.addEventListener("click", jugar_loteria);
})();