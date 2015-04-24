var $form = $('#formulario'),
	$titulo = $('#titulo'),
	$url = $('#url'),
	$button = $('#mostrar-form'),
	$list = $('#contenido'),
	$post = $('.item').first(); // primer elmento


function mostrarFormulario(){
	$form.slideToggle();  // para mostar el form que esta oculto por css 
	return false;  // para cancelar el defaul de los  enlances de html
}


//tamb puedo agregar elementos como parametros en la funcion
//function agregarPost(e){
//por ejem e.target : lemento que disparo elemnto

function agregarPost(){
	var url= $url.val(),
		titulo= $titulo.val(),
		$clone = $post.clone(); // al clonarlo jquery me va dar un representacion identica de ese objeto 
								//con esta representacion del obejto yo puedocojer y modificar la propeidades de este obejto
								//en este caso seria el nombre del post y el link


	$clone.find('.titulo_item a')
	.text(titulo).
	.attr('href',url);
	// permite encontrar los elemntos que cupaln igual con sleector css , dentro del elemento
	//text que me va replazar le texto por el titulo
	//voy a  reemplazar el atrbuto href y lo reemmplazo  por la url que creamos
	$clone.hide();
	//ocultar el  clon , le coloca un display  none

	$list.prepend($clone);
	//prepernd(9 ,ver nuestro clon dal  inicio 
	//agregar el clon al listado
	//a.append agrega un lemento a final dentro de a 
	$clone.fadein();

	return false;
	//con ele retum jquery se va necargar de hacer por nostros el primer dafaul
	//que es enviar el el formulario y ademas va tratar , que ese evnto no siga , cuando se ejcute un submit no peuda llegar
}


// Eventos
$button.click( mostrarFormulario );
$form.on('submit', agregarPost); 

//chrome se encarga  de validar nuestro formulario y el no va dejar  de sevie  hasta  que ese form no tyenga datos validos
//se busca detener el submit por que el formulario no se va enviar al servidor 
