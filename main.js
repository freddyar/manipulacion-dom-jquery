$(document).on('ready', inicio);

function inicio(){
	$("#btn-add-div").on('click', add_div);
	$("#res").on("click", ".btn",preguntar);
	$("#btn-pregunta-aceptar").on('click', aceptar_eliminado);
}

function aceptar_eliminado(){
	$('#modal-pregunta-eliminar').modal('toggle');
	$('#res :last-child').remove();
}

function preguntar(event){
	var elemento_actual = $(this);
	$('#modal-pregunta-eliminar').modal();
}

function add_div(){
	var div = '<a class="btn btn-default">Remover</a>';
	$("#res").append(div);
}
