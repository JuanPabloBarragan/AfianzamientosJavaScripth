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
        
        var nombre = prompt('Digita Tu Nombre');
        var edad = parseInt(prompt('Digita Tu Edad'));

        if (edad>=18){
            alert(nombre);
        }else{
        }    
      });

      $("#Ejer2").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var edad = parseInt(prompt('Digita Su Edad'));

        if (edad>=18){
            alert(nombre);
        }else{
            alert('Aun no eres mayor de Edad');
        }    
      });

      $("#Ejer3").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var edad = parseInt(prompt('Digita Tu Edad'));
        var sexo = parseInt(prompt('Digite Tu Sexo (1= Hombre - 2= Mujer)'));
        var estado = parseInt(prompt('Digite Tu Sexo (1= Soltero - 2= Casado - 3= otro)'));

        if (edad >= 18 && estado == 1 && sexo == 1){
            alert(nombre);
        }else{
        }    
      });

      $("#Ejer4").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var edad = parseInt(prompt('Digita Tu Edad'));
        var sexo = parseInt(prompt('Digite Tu Sexo (1= Hombre - 2= Mujer)'));
        var estado = parseInt(prompt('Digite Tu Sexo (1= Soltero - 2= Casado - 3= otro)'));

        if (edad <= 17)
		{
			alert(nombre + ', Aun no eres independiente');
		}else if (sexo == 1 && estado == 2)
		{
			alert(nombre + ', Aun no eres independiente');
		}else
		{
			alert(nombre);
		}  
      });

      $("#Ejer5").click(function () {
        
        var num = parseInt(prompt('Digite Un Numero'));

        if (num>= 0)
		{
			alert("|" +num+ "| = " +num);
		}else {			
			var abs = num*-1;
			alert("|" +num+ "| = " +abs);
		}
      });

      $("#Ejer6").click(function () {
        
        var num1 = parseInt(prompt('Digite Un Numero'));
        var num2 = parseInt(prompt('Digite Otro Numero'));

        if (num1>0)
		{
			alert(num1);
		}else {			
		}
		
		if (num2>0)
		{
			alert(num2);
		}else {			
		}
      });

      $("#Ejer7").click(function () {
        
        var num1 = parseInt(prompt('Digite Un Numero'));
        var num2 = parseInt(prompt('Digite Otro Numero'));

        if (num1>0 & num2>0)
		{
			alert(num1+" , "+num2);
		}else {			
		}
      });

      $("#Ejer8").click(function () {
        
        var num1 = parseInt(prompt('Digite Un Numero'));
        var num2 = parseInt(prompt('Digite Otro Numero'));

        if (num1>0 & num2<0 || num2>0 & num1<0)
		{
			System.out.println(num1+" , "+num2);
		}else {			
		}
      });

      $("#Ejer9").click(function () {
        
        var num1 = parseInt(prompt('Digite Un Numero'));
        var num2 = parseInt(prompt('Digite Otro Numero'));

        var R=num1+num2;
		
		alert("Numeros: " +num1+ " , " +num2);
		alert("Suma: " +R);
      });

      $("#Ejer10").click(function () {
        
        var num1 = parseInt(prompt('Digite Un Numero'));
        var num2 = parseInt(prompt('Digite Otro Numero'));

        var R=num1+num2;

		alert("Numeros: " +num1+ " , " +num2);
		if (R<0) 
		{
			alert("Suma: " +R);
		}
      });

      $("#Ejer11").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var Shora = parseInt(prompt('Digite Sueldo Por Hora'));
        var Hrsmes = parseInt(prompt('Digite Las Horas Trabajadas En El Mes'));

        var Salario=Shora*Hrsmes;

		alert('Nombre: '+nombre);
        alert('Salario Mensual: '+Salario);
      });

      $("#Ejer12").click(function () {
        
        var num = parseInt(prompt('Digite Un Numero'));

        var porcentaje=num*0.05;
		
		alert("Numero: "+num);
		alert("5%: " +porcentaje);
      });

      $("#Ejer13").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var Shora = parseInt(prompt('Digite Sueldo Por Hora'));
        var Hrsmes = parseInt(prompt('Digite Las Horas Trabajadas En El Mes'));
        var porcentaje = parseInt(prompt('Digite El Porcentaje De Retencion'));

        var Sbruto=Shora*Hrsmes;
        var Vlretencion=(porcentaje*Sbruto)/100;
        var Sneto=Sbruto-Vlretencion;

		alert('Nombre: '+nombre);
        alert('Salario Bruto: '+Sbruto);
        alert('Valor Retencion: '+Vlretencion);
        alert('Salario Neto: '+Sneto);
      });

      $("#Ejer14").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var Shora = parseInt(prompt('Digite Sueldo Por Hora'));
        
        alert("Nombre: "+nombre);
        
        if (Shora <= 2000000)
		{
			var Vlretencion = 0;
			var Sneto = Shora-Vlretencion;
			alert("Salario Bruto: "+Shora);
			alert("Valor Retencion: "+Vlretencion);
			alert("Salario Neto: "+Sneto);
		}else if (Shora > 3000000) {
			var Vlretencion = (8/100)*Shora;
			var Sneto = Shora*Vlretencion;
			alert("Salario Bruto: "+Shora);
			alert("Valor Retencion: "+Vlretencion);
			alert("Salario Neto: "+Sneto);
		}else {
			var Vlretencion = (5/100)*Shora;
			var Sneto = Shora*Vlretencion;
			alert("Salario Bruto: "+Shora);
			alert("Valor Retencion: "+Vlretencion);
			alert("Salario Neto: "+Sneto);
		}
      });

      $("#Ejer15").click(function () {
        
        var nombre = prompt('Digita Tu Nombre');
        var Shora = parseInt(prompt('Digite Sueldo Por Hora'));
        var Hrsmes = parseInt(prompt('Digite Las Horas Trabajadas En El Mes'));

        if (Hrsmes > 48)
		{
			var Ex = Hrsmes-48;
			var Sx = Shora+Shora*0.35;
			var Sn = (48*Shora)+(Ex*Sx);
		}

        alert("Nombre: " + Name);
		alert("Salario: " + Sn);
      });

});