var estado;
var cuerpo = $("#texto");
var listaTiempos = $(".listaTiempos")
var boton = $(".boton");
var tiempo;
var hor=0 ,mil=0,sg=0,min=0;
var tablaTiempos="";

$(function(){ 

	function cambiar(){

	if(estado==null){
		estado='play'
		play();
		boton.html('Pause');
		
	}else{
		estado=null;
		pause();
		boton.html('Play');
		
	}
	}
	
	function play(){
	
	if(tiempo==null){
	  tiempo=new Date();
	}else{
	  emp2=new Date();
      tiempo=new Date();
      tiempo.setTime(emp2-aux);
   
	}	
	  time=setInterval(mostrar,10)
	  imagen.html('<div id="imagen2"><img src="images/app_slide2.png"></img></div><div id="imagen1"></div>');
	  inicializar();

	}
	function pause(){
	  clearInterval(time);
	  imagen.html('<div id="imagen1"><img src="images/app_slide.png"></img></div><div id="imagen2"></div>');
	  inicializar();
	 
	}
	function stop(){
	  clearInterval(time);  
	  mil=0;
	  sg=0;
	  min=0;
	  hor=0;
	  estado=null;
	  tiempo=null;
	  cuerpo.html("00 : 00 : 00 . 00");
	  tablaTiempos="";
	  boton.html('Play');
	  imagen.html('<div id="imagen1"><img src="images/app_slide.png"></img></div><div id="imagen2"></div>');
	  inicializar();
	}
	
	function mostrar(){
	
      actual=new Date();
      aux=new Date();
      aux.setTime(actual-tiempo) 
			
      mil=aux.getMilliseconds();
      mil=mil/10; 
      mil=Math.round(mil)
      sg=aux.getSeconds(); 
      min=aux.getMinutes();

	  if(sg==59&&min==59&&mil==99){hor++}
      if(mil==100){mil=0;}
		
	  cuerpo.html(pad(hor)+" : "+pad(min)+" : "+pad(sg)+" . "+pad(mil));
	}

	function parcial(){
	  if(hor==0&&mil==0&&seg==0&&mil==0){}
	  else{
	  utils.status.show(pad(hor)+" : "+pad(min)+" : "+pad(sg)+" . "+pad(mil)); 
	  tablaTiempos=(tablaTiempos+'<li><aside class="icon settings-icon datetime">tiempo</aside><p>'+pad(hor)+' : '+pad(min)+' : '+pad(sg)+' . <strong style="font-size: 1.5rem;">'+pad(mil)+'</strong></p></li>');
	  }
	}

    function pad(d) {
     return (d < 10) ? '0' + d.toString() : d.toString();
	}

	function lista(){
	  document.querySelector('.tiempos').className = 'current';
 	  document.querySelector('[data-position="current"]').className = 'left';
	}

    $(".play").on('click',cambiar);
    $(".stop").on('click',stop);
	$(".parcial").on('click',parcial);

	document.querySelector('#lista').addEventListener ('click', function () {
 	document.querySelector('#lists').className = 'current';
  	document.querySelector('[data-position="current"]').className = 'left';
  	listaTiempos.html(tablaTiempos);
  
});
	document.querySelector('#btn-lists-back').addEventListener ('click', function () {
  	document.querySelector('#lists').className = 'right';
  	document.querySelector('[data-position="current"]').className = 'current';
});

// Eventos Tactiles

    var imagen = $("#slide");
	var imagenUp = $("#slideUp");
	var imagenDown = $("#slideDown");
	
	function swipeRight()  { 

		estado='play'
		play();
		boton.html('Pause');
		
	};

    function swipeLeft()  { 


	    estado=null;
		pause();
		boton.html('Play');
		
		
	};

	function inicializar(){
	var tac = $('#imagen1');
	var tac2 = $('#imagen2');

    tac.on('swipeRight',swipeRight);
    tac2.on('swipeLeft', swipeLeft);
	}

	inicializar();
	imagenUp.on('swipeUp',parcial);
    imagenDown.on('swipeDown',stop);

})
