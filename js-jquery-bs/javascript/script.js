var mostrarResultados = function(texto,estilo){

	$('#mostrarResultado').text(texto).attr('class', estilo);
}



$("#btn_calcular_edad").click(function () {
	var nombre = $('#name').val();
	var fecha = new Date($('#fecha_nacimiento').val()).getFullYear();

	var user = new usuario(nombre,fecha);
	user.presentarse();
});



/*--------------- funcion constructiora -------------------------------*/

var usuario = function usuario(nombre,fecha){
	this.nombre = nombre;
	this. fecha = fecha;




	function calcularEdad(){
		var date = new Date().getFullYear();

		return date-fecha;
	}

	this.presentarse = function(){
		var edad = calcularEdad();
		var mensaje = "Hola, mi nombre es "+this.nombre+" y tengo "+edad+" años."
		mostrarResultados(mensaje,'naranja');
	}
}


/*------------  Botones ----------------------------------- */

$("#IDSelector").click(function () {

      var texto = $('#thing1').text();
      mostrarResultados(texto, 'azul');
});


$("#ClassSelector").click(function () {

      var texto = $('.special').text();
      mostrarResultados(texto, 'rojo');
});

$("#TagSelector").click(function () {

      var texto = $('body').text();
      mostrarResultados(texto, 'verde');
});

$("#altercontent").click(function () {

      var texto1 = $('h1').text();
  
      $('#thing1').append(texto1);

      var texto2 = $('#thing1').text();
     
      mostrarResultados(texto2, 'amarillo');
});

$("#childDescendant").click(function () {
	
}