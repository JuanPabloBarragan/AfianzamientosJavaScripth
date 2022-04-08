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
       
         };
       });
 
    
       $("#Ejer1").click(function () {
          
        var n1 = parseInt(prompt('Ingresa el primer numero a sumar'));
        var n2 = parseInt(prompt('Ingresa el segundo numero a sumar'));
    
        var suma=n1+n2;
    
        alert(n1+" + " + n2 +" = "+ suma);
        });

        $("#Ejer2").click(function () {
          
            var A = parseInt(prompt('Digite La Base'));
            var B = parseInt(prompt('Digite La Altura'));
        
            var area=(B*A);
        
            alert("El area del rectangulo es: "+ area);
        });

        $("#Ejer3").click(function () {
          
            var N1 = parseInt(prompt('Digite La Nota 1'));
            var N2 = parseInt(prompt('Digite La Nota 2'));
            var N3 = parseInt(prompt('Digite La Nota 3'));
        
            var R1=N1*0.3;
            var R2=N2*0.3;
            var R3=N3*0.4;

            var Total=R1+R2+R3;
        
            alert("La Definitiva es: "+ Total);
        });

        $("#Ejer4").click(function () {
          
            var R = parseInt(prompt('Digite El Radio'));
        
            var Area=Math.pow(R,2)*3.1416;
        
            alert("El area es: "+ Area);
        });

        $("#Ejer5").click(function () {
          
            var ladoA = parseInt(prompt('Digite El Valor Del Lado A'));
            var ladoA = parseInt(prompt('Digite El Valor Del Lado B'));
            var ladoA = parseInt(prompt('Digite El Valor Del Lado C'));
        
            var HT=ladoA-LadoC;
            var AT=(ladoB*HT)/2;
            var AR=ladoB*ladoC;
            var AF=AT+AR;
        
            alert("El area es: "+ AF);
        });

        $("#Ejer6").click(function () {
          
            var R = parseInt(prompt('Digite El Valor De *R* Segun La Figura'));
            var H = parseInt(prompt('Digite El Valor De *H* Segun La Figura'));
        
            var HR=Math.pow(H,2)-Math.pow(R,2);
            var AC=Math.pow(R,2)*3.1416/2;
            var Ct=Math.sqrt(HR);
            var AT=(R*Ct)/2;
            var AF=AC+(AT*2);
        
            alert("El area es: "+ AF);
        });

        $("#Ejer7").click(function () {
          
            var cantidad = parseInt(prompt('Digite La Cantidad De Litros Que Produce Al Dia'));
            var valor = parseInt(prompt('Digite El Valor Del Litro De Leche'));
        
            var CG=cantidad/3.785;
            var VG=valor*3.785;
            var VT=CG*VG;
        
            alert("El cantidad de galones vendidos es: "+ CG+ "Galones");
            alert("La venta genero un total de $"+ VT);
        });

        $("#Ejer8").click(function () {
          
            var X1 = parseInt(prompt('Segun La Imagen Digite El Punto X1'));
            var X2 = parseInt(prompt('Segun La Imagen Digite El Punto X2'));
            var Y1 = parseInt(prompt('Segun La Imagen Digite El Punto Y1'));
            var Y2 = parseInt(prompt('Segun La Imagen Digite El Punto Y2'));
        
            var CX=X2-X1;
            var CY=Y2-Y1;
            var S=CX+CY;
            var H=Math.sqrt(S);
        
            alert("La Distancia entre el P1 y el P2 es de: "+H);
        });

        $("#Ejer9").click(function () {
          
            var metro = parseInt(prompt('Digite La Cantidad De Metros'));
        
            var pulgada=metro*39.3;
        
            alert("Debe ordenar "+pulgada+" pulgadas de tela");
        });

        $("#Ejer10").click(function () {
          
            var altura = parseInt(prompt('Digite La Altura De La Alberca'));
            var largo = parseInt(prompt('Digite El Largo De La Alberca'));
            var ancho = parseInt(prompt('Digite La Ancho De La Alberca'));
            var valor = parseInt(prompt('Digite El Valor Por Metro Cubico'));

            var V=altura*largo*ancho;
            var VT=Math.pow(V,3)*valor;
        
            alert("El pago debe ser de $"+VT);
        });
});