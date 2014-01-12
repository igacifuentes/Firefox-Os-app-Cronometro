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
var tiempotemp;
var hortemp=0 ,miltemp=0,sgtemp=0,mintemp=0;
var tablaTiempostiemp="";
temporizador.html(tiemporestante);

$(function(){ 
	
	function cambiartemp(){
	temporizador.html(cuerpotemp);
	if(estadotemp==null){

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
	
	if(tiempotemp==null){
	  tiempotemp=new Date();
	}else{
	  emp2temp=new Date();
      tiempotemp=new Date();
      tiempotemp.setTime(emp2temp-auxtemp);
   
	}	
	  timetemp=setInterval(mostrartemp,10)
	  imagentemp.html('<div id="imagen2temp"><img src="images/app_slide2.png"></img></div><div id="imagen1temp"></div>');
	  inicializartemp();

	}
	function pausetemp(){
	  clearInterval(timetemp);
	  imagentemp.html('<div id="imagen1temp"><img src="images/app_slide.png"></img></div><div id="imagen2temp"></div>');
	  inicializartemp();
	 
	}
	function stoptemp(){
	  clearInterval(timetemp);  
	  miltemp=0;
	  sgtemp=0;
	  mintemp=0;
	  hortemp=0;
	  estadotemp=null;
	  tiempotemp=null;
	  textotemp.html("00 : 00 : 00 . 00");
	  tablaTiempostemp="";
	  botontemp.html('Play');
	  imagentemp.html('<div id="imagen1temp"><img src="images/app_slide.png"></img></div><div id="imagen2temp"></div>');
	  inicializartemp();
	  temporizador.html(tiemporestante);
	}
	
	function mostrartemp(){
	
      actualtemp=new Date();
      auxtemp=new Date();
      auxtemp.setTime(actualtemp-tiempotemp) 
			
      miltemp=auxtemp.getMilliseconds();
      miltemp=miltemp/10; 
      miltemp=Math.round(miltemp)
      sgtemp=auxtemp.getSeconds(); 
      mintemp=auxtemp.getMinutes();

	  if(sgtemp==59&&mintemp==59&&miltemp==99){hortemp++}
      if(miltemp==100){miltemp=0;}
		
	  textotemp.html(pad(hortemp)+" : "+pad(mintemp)+" : "+pad(sgtemp)+" . "+pad(miltemp));
	}

	function parcialtemp(){
	  if(hortemp==0&&miltemp==0&&segtemp==0&&miltemp==0){}
	  else{
	  utils.status.show(pad(hortemp)+" : "+pad(mintemp)+" : "+pad(sgtemp)+" . "+pad(miltemp)); 
	  tablaTiempostemp=(tablaTiempostemp+'<li><aside class="icon settings-icon datetime">tiempo</aside><p>'+pad(hortemp)+' : '+pad(mintemp)+' : '+pad(sgtemp)+' . <strong style="font-size: 1.5rem;">'+pad(miltemp)+'</strong></p></li>');
	  }
	}

    function pad(d) {
     return (d < 10) ? '0' + d.toString() : d.toString();
	}

	function listatemp(){
	  document.querySelector('.tiempostemp').className = 'current';
 	  document.querySelector('[data-position="current"]').className = 'left';
	}

    $(".playtemp").on('click',cambiartemp);
    $(".stoptemp").on('click',stoptemp);
	$(".parcialtemp").on('click',parcialtemp);

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

    var imagentemp = $("#slidetemp");
	var imagenUptemp = $("#slideUptemp");
	var imagenDowntemp = $("#slideDowntemp");
	
	function swipeRighttemp()  { 

		estadotemp='play'
		playtemp();
		botontemp.html('Pause');
		temporizador.html(cuerpotemp);
		
	};

    function swipeLefttemp()  { 


	    estadotemp=null;
		pausetemp();
		botontemp.html('Play');
		temporizador.html(cuerpotemp);
		
		
	};

	function inicializartemp(){
	var tactemp = $('#imagen1temp');
	var tac2temp = $('#imagen2temp');

    tactemp.on('swipeRight',swipeRighttemp);
    tac2temp.on('swipeLeft', swipeLefttemp);
	}

	inicializartemp();
	imagenUptemp.on('swipeUp',parcialtemp);
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
