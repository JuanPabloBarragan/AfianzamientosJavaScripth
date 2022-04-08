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
        
        var cantidad =parseInt(prompt('Ingresa la cantidad de estudiantes '));

        var promedio=0; 
        for (var i = 1; i <= cantidad; i++) {
            var nota =parseInt(prompt('Ingresa la nota del estudiante '+i));
			promedio=promedio+nota;
        }

        promedio=promedio/cantidad;
        alert("el promedio general del grupo es: "+ promedio);
      });

      $("#Ejer2").click(function () {
        
        var cantidad =parseInt(prompt('Ingresa la cantidad de estudiantes '));
        var Rep=0;
        var Apr=0;
        var promedio=0; 
        for (var i = 1; i <= cantidad; i++) {
            var nota =parseInt(prompt('Ingresa la nota del estudiante '+i));
			if (nota<30){
				Rep++;
			}else{
				Apr++;
			}
			promedio=promedio+nota;
        }

        promedio=promedio/cantidad;
        alert("el promedio general del grupo es: "+ promedio);
      });

      $("#Ejer2").click(function () {
        
        var cantidad =parseInt(prompt('Ingresa la cantidad de estudiantes '));
        var Rep=0;
        var Apr=0;
        var promedio=0; 
        for (var i = 1; i <= cantidad; i++) {
            var nota =parseInt(prompt('Ingresa la nota del estudiante '+i));
			if (nota<30){
				Rep++;
			}else{
				Apr++;
			}
			promedio=promedio+nota;
        }

        promedio=promedio/cantidad;
        alert("el promedio general del grupo es: "+ promedio);
      });

      $("#Ejer3").click(function () {
        
        var VM= -2147483647;
        var VN= 2147483647;
        var P=0, P2=0, Ne=0, Ma150=0;
        var PD=0, PD2=0;

        var N =parseInt(prompt('Ingresa la cantidad de numeros'));

        for (var i = 1; i <= N; i++) {
            var NN =parseInt(prompt('Digita un numero'));
			if(NN>150) {
				Ma150++;
			}
			if(NN>0) {
				P++;
				P2=P2+NN;
			}else if (NN<0){
				Ne++;
			}
			if(NN>VM) {
				VM=NN;
			}
			if(NN<VN) {
				VN=NN;
			}
		}
		
		if(P>0){
			PD2= P2/P;
			PD=P/N;
		}else {}
		alert("El Numero Mayor Es: "+VM);
		alert("El Numero Menor Es: "+VN);
		alert("Los Numeros Mayores a 150 Fueron Un Total De: "+Ma150);
		alert("La Cantidad De Negativos Es: "+Ne);
		alert(P+" Numeros Positivos De "+N+" Da Como Promedio: "+PD);
		alert("Mas Al Sumarlos Tendriamos Un Promedio De: "+PD2);
      });

      $("#Ejer4").click(function () {
        
        var i=0, E=0;
		var PE=0, PT=0;

        var E =parseInt(prompt('Digite El Numero Total De Estudiantes'));

        for (var i = 1; i <= E; i++) {
            var N1 =parseInt(prompt('Digita La Primer Nota Del Estudiante '+i));
            var N2 =parseInt(prompt('Digita La Segunda Nota Del Estudiante '+i));
            var N3 =parseInt(prompt('Digita La Tercera Nota Del Estudiante '+i));
            var N4 =parseInt(prompt('Digita La Cuarta Nota Del Estudiante '+i));
            PE=N1+N2+N3+N4;
			PE=PE/4;
			PT=PT+PE;
			
			alert("El Promedio Del Estudiante "+i+" Es: "+PE);
			PE=0;
		}
		
		PT= PT/E;
		alert("El promedio total del grupo de "+E+" estudiantes es de: "+PT);
      });

      $("#Ejer5").click(function () {
        
        var i=0, CP=0, CT=0;
		var CT2=0;

        var P =parseInt(prompt('Digite El Numero Total De Personas'));
        var Pv =parseInt(prompt('Digite El Precio Del Vatio'));

        for (var i = 1; i <= P; i++) {
            var LAn =parseInt(prompt("Digite El Consumo De VATIOS En La Lectural Anterior De La Persona "+i));
            var LAc =parseInt(prompt("Digite El Consumo De VATIOS En La Lectural Actual De La Persona "+i));
            CP=LAn+LAc;
			CT=CT+CP;
			
			alert("El Consumo Total De La Persona "+i+" Es: "+CP+" Vatios");
			
			CP=CP*Pv;
			
			alert("El Consumo Total a Pagar De La Persona "+i+" Es: $"+CP);
			CP=0;
		}
		
		CT2= CT/P;
		alert("El promedio de consumo del grupo de "+P+" personas es de: "+CT2+" voltios");
      });

});