var inicio = $("#drawer");
var menutemp = $("#menutemp");
var menucrono = $("#menucrono");
var menuacerca = $("#menuacerca");
inicio.html(menucrono);	
$(function(){ 

$("#crono").click(crono);
$("#temp").click(temp);
$("#acerca").click(acerca);

function crono(){
inicio.html(menucrono);
}
function temp(){
inicio.html(menutemp);
}
function acerca(){
inicio.html(menuacerca);
}
})
