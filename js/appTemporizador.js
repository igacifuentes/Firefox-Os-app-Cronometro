var estadotemp;
var temporizador = $("#temporizador");
var cuerpotemp = $("#cuerpotemp");
var textotemp = $("#textotemp");
var tiemporestante = $("#tiemporestante");
var segtempcuerpo = $("#segtemp");
var mintempcuerpo = $("#mintemp");
var hortempcuerpo = $("#hortemp");
var listaTiempostemp = $(".listaTiempos")
var botontemp = $(".botontemp");
var sonido = $("#sonido");
var timetemp;
var hortemp=0 ,miltemp=0,sgtemp=0,mintemp=0;
var tablaTiempostiemp="";
var sonidoestado=0;
temporizador.html(tiemporestante);

$(function(){ 
	
	function cambiartemp(){
	if(estadotemp=='finalizado'){

	}else if(estadotemp==null){

		estadotemp='play'
		playtemp();
		botontemp.html('Pause');
		
	}else{
		estadotemp=null;
		pausetemp();
		botontemp.html('Play');
		
	}

	}
	
	function playtemp(){


	if(timetemp==null){

	temptiemporestante=new Date();
	var val = $('#slideseg').attr('aria-valuenow',val);
	temptiemporestante.setSeconds((+temptiemporestante.getSeconds())+(+Math.round(val)));
	var val2 = $('#slidemin').attr('aria-valuenow',val2);
	temptiemporestante.setMinutes((+temptiemporestante.getMinutes())+(+Math.round(val2)));
	var val3 = $('#slidehor').attr('aria-valuenow',val3);
	temptiemporestante.setHours((+temptiemporestante.getHours())+(+Math.round(val3)));
	temporizador.html(cuerpotemp);

	}else{

	auxtemp=new Date();
	auxtemp2=new Date();
	auxtemp2.setTime(auxtemp-temptiempo);
	temptiemporestante.setTime(temptiemporestante.getTime()+auxtemp2.getTime());

	}	

	imagentemp.html('<div id="imagen2temp"><img src="images/app_slide2.png"></img></div><div id="imagen1temp"></div>');
    inicializartemp();
	  
	  timetemp=setInterval(mostrartemp,10)
	}
	function pausetemp(){
	  clearInterval(timetemp);
	  imagentemp.html('<div id="imagen1temp"><img src="images/app_slide.png"></img></div><div id="imagen2temp"></div>');
	  inicializartemp();
	  sonido.html('');
	  sonidoestado=0;
	 
	}
	function stoptemp(){
	  clearInterval(timetemp);  
	  miltemp=0;
	  sgtemp=0;
	  mintemp=0;
	  hortemp=0;
	  estadotemp=null;
	  timetemp=null;
	  textotemp.html("00 : 00 : 00 . 00");
	  tablaTiempostemp="";
	  botontemp.html('Iniciar');
	  imagentemp.html('<div id="imagen1temp"><img src="images/app_slide.png"></img></div><div id="imagen2temp"></div>');
	  inicializartemp();
	  temporizador.html(tiemporestante);
	  sonido.html('');
	  sonidoestado=0;
	}
	
	function mostrartemp(){
	  
	  temptiempo=new Date();
	  auxtemp=new Date();
	  auxtemp.setTime(temptiemporestante-temptiempo);
	  miltemp=auxtemp.getMilliseconds();
      miltemp=miltemp/10; 
      miltemp=Math.round(miltemp)
      sgtemp=auxtemp.getSeconds(); 
      mintemp=auxtemp.getMinutes();
	  hortemp=(Math.round(((auxtemp/1000)/60)/60));
	  if(miltemp==100){miltemp=0;}	
		
	  if((sgtemp==0)&&(mintemp==0)&&(hortemp==0)&&(miltemp<5))  {
	  finalizartemp();
	  sonido.html('<audio id="demo" src="/sound/alarma.mp3" autoplay loop></audio>');
	  alert('Tiempo Finalizado');
	  finalizartemp();
	  }	
	  else if((sgtemp<10)&&(mintemp==0)&&(hortemp==0)){
	  textotemp.html('<span style="color:#FF0000">'+pad(hortemp)+" : "+pad(mintemp)+" : "+pad(sgtemp)+" . "+pad(miltemp)+'</span>');
	   		if(sonidoestado==0){
	  			sonido.html('<audio id="demo" src="/sound/reloj.mp3" autoplay loop></audio>');	
				sonidoestado++;
			}		
	  }else{
	  textotemp.html(pad(hortemp)+" : "+pad(mintemp)+" : "+pad(sgtemp)+" . "+pad(miltemp));
	  }
	}

    function pad(d) {
     return (d < 10) ? '0' + d.toString() : d.toString();
	}
	function finalizartemp(){
	
	  clearInterval(timetemp);  
	  miltemp=0;
	  sgtemp=0;
	  mintemp=0;
	  hortemp=0;
	  estadotemp='finalizado';
	  timetemp=null;
	  textotemp.html("00 : 00 : 00 . 00");
	  tablaTiempostemp="";
	  botontemp.html('Iniciar');
	  imagentemp.html('<div id="imagen1temp"><img src="images/app_slide.png"></img></div><div id="imagen2temp"></div>');
	  inicializartemp();
	  sonido.html('');
	  sonidoestado=0;
	  
	}

	function listatemp(){
	  document.querySelector('.tiempostemp').className = 'current';
 	  document.querySelector('[data-position="current"]').className = 'left';
	}

    $(".playtemp").on('click',cambiartemp);
    $(".stoptemp").on('click',stoptemp);


// Eventos Tactiles

    var imagentemp = $("#slidetemp");
	var imagenUptemp = $("#slideUptemp");
	var imagenDowntemp = $("#slideDowntemp");
	
	function swipeRighttemp()  { 	
		if(estadotemp=="finalizado"){
		}else{
		estadotemp='play'
		playtemp();
		botontemp.html('Pause');	
		}
		
	};

    function swipeLefttemp()  { 

		if(estadotemp=="finalizado"){
		}else{
	    estadotemp=null;
		pausetemp();
		botontemp.html('Play');
		}
		
	};

	function inicializartemp(){
	var tactemp = $('#imagen1temp');
	var tac2temp = $('#imagen2temp');

    tactemp.on('swipeRight',swipeRighttemp);
    tac2temp.on('swipeLeft', swipeLefttemp);
	
	}

	inicializartemp();
    imagenDowntemp.on('swipeDown',stoptemp);

$("#slideseg").on('tap',segtempfun);
$("#slideseg").on('swipeRight',segtempfun);
$("#slideseg").on('swipeLeft',segtempfun);

$("#slidemin").on('tap',mintempfun);
$("#slidemin").on('swipeRight',mintempfun);
$("#slidemin").on('swipeLeft',mintempfun);

$("#slidehor").on('tap',hortempfun);
$("#slidehor").on('swipeRight',hortempfun);
$("#slidehor").on('swipeLeft',hortempfun);

function segtempfun(){

var val = $('#slideseg').attr('aria-valuenow',val);
segtempcuerpo.html('&nbsp&nbsp&nbsp&nbsp'+Math.round(val));
}

function mintempfun(){

var val = $('#slidemin').attr('aria-valuenow',val);
mintempcuerpo.html('&nbsp&nbsp&nbsp&nbsp'+Math.round(val));
}
function hortempfun(){

var val = $('#slidehor').attr('aria-valuenow',val);
hortempcuerpo.html('&nbsp&nbsp&nbsp&nbsp'+Math.round(val));
}

})
