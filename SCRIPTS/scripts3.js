jQuery('document').ready(function($){
    var menuBtn = $('.menu-icon');
    var menu = $('.navigation ul');
    var cedulas = new Array();
    var estudiantes = new Array();
    var edades = new Array();
    var matrices=new Array();
    var objestudiantes=new Array();
    
    var formulario=document.getElementById('formulario');
           formulario.addEventListener('submit',function(e){
            e.preventDefault();
         })
    var cantidad_docentes=0;
    var cantidad=0;
 
   
 
       menuBtn.click(function(){
 
 
         if (menu.hasClass('show')) {
           menu.removeClass('show');
         }else{
           menu.addClass('show');
       
         }
       });
 
    
       $("#Ejer1").click(function () {
        
        var n1 = parseInt(prompt('Digita El Primer Numero'));
        var n2 = parseInt(prompt('Digita El Segundo Numero'));

        if (n1 > n2){
            alert("El numero mayor es el Numero 1 es decir el numero: "+n1);
        }else{
            alert("El numero mayor es el Numero 2 es decir el numero: "+n2);
        }    
      });

      $("#Ejer2").click(function () {
        
        var n1 = parseInt(prompt('Digita El Numero'));

        if (n1 > 0){
            alert("El numero "+n1+" es positivo");
        }else if (n1 < 0){
            alert("El numero "+n1+" es negativo");
        }   
      });

      $("#Ejer3").click(function () {
        
        var Cant = parseInt(prompt('Digita La Cantidad De Lapices'));

        if (Cant == 1){
            alert("El total a pagar por el unico lapiz pedido es $1300");
        }else if (Cant < 1000){
            var Rta = Cant*1300;
            alert("El total a pagar por la cantidad de "+Cant+" lapices es de: $"+Rta);
        }else if (Cant >= 1000){
            var Rta = Cant*1100;
            alert("El total a pagar por la cantidad de "+Cant+" lapices es de: $"+Rta);
        }  
      });

      $("#Ejer4").click(function () {
        
        var Precio = parseInt(prompt('Digita El Precio Del Traje Que Desea Comprar'));

        if (Precio >= 25000){
            var Rta = Precio * 0.17;
            var Total = Precio - Rta;
            alert("El total a pagar es: $"+Total+" Gracias a su 17% de descuento");
        }else{
            var Rta = Precio * 0.05;
            var Total = Precio - Rta;
            alert("El total a pagar es: $"+Total+" Gracias a su 5% de descuento");
        }
      });

      $("#Ejer5").click(function () {
        
        var n1 = parseInt(prompt('Digita El Primer Numero'));
        var n2 = parseInt(prompt('Digita El Segundo Numero'));
        var n3 = parseInt(prompt('Digita El Tercer Numero'));

        if (n1 > n2 && n1 > n3){
            if (n2 > n3){
                alert("El orden decendente de estos 3 numeros es: "+n1+", "+n2+" y "+n3);
            }else if (n3 > n2){
                alert("El orden decendente de estos 3 numeros es: "+n1+", "+n3+" y "+n2);
            }
        }else if (n2 > n1 && n2 > n3){
            if (n1 > n3){
                alert("El orden decendente de estos 3 numeros es: "+n2+", "+n1+" y "+n3);
            }else if (n3 > n1){
                alert("El orden decendente de estos 3 numeros es: "+n2+", "+n3+" y "+n1);
            }
        }else if (n3 > n1 && n3 > n2){
            if (n1 > n2){
                alert("El orden decendente de estos 3 numeros es: "+n3+", "+n1+" y "+n2);
            }else if (n2 > n1){
                alert("El orden decendente de estos 3 numeros es: "+n3+", "+n2+" y "+n1);
            }
        }  
      });

      $("#Ejer6").click(function () {
        
        var Per = parseInt(prompt('Digita El Numero De Personas'));

        if (Per <= 90){
            var Rta = Per * 10000;
            alert("El valor por Persona es de $10000 por lo tanto el total a pagar es: $"+Rta);
        }else if (Per > 90 && Per <= 150){
            var Rta = Per * 8500;
            alert("El valor por Persona es de $8500 por lo tanto el total a pagar es: $"+Rta);
        }else if (Per > 150){
            var Rta = Per * 7500;
            alert("El valor por Persona es de $7500 por lo tanto el total a pagar es: $"+Rta);
        }
      });

      $("#Ejer7").click(function () {
        
        var Cita = parseInt(prompt('Digita El Numero De Cita a Realizar'));

        if (Cita == 1){
            var Precio = 100000;
            var Monto = Precio;
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita == 2){
            var Precio = 100000;
            var Monto = Precio * 2;
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }
        else if (Cita == 3){
            var Precio = 100000;
            var Monto = Precio * 3;
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita == 4){
            var Precio = 80000;
            var Monto = Precio + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita == 5){
            var Precio = 80000;
            var Monto = (Precio * 2) + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita == 6){
            var Precio = 70000;
            var Monto = Precio + (80000 * 2) + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita == 7){
            var Precio = 70000;
            var Monto = (Precio * 2) + (80000 * 2) + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }
        else if (Cita == 8){
            var Precio = 70000;
            var Monto = (Precio * 3) + (80000 * 2) + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }else if (Cita > 8){
            var Precio = 50000;
            var Exceso = Cita - 8;
            var Monto = (Precio * Exceso) + (70000 * 3) + (80000 * 2) + (100000 * 3);
            alert("El valor de la cita es de: $"+Precio+" y el Monto es de: $"+Monto);
        }
      });

});