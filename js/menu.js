var inicio = $("#drawer");
var menutemp = $("#menutemp");
var menucrono = $("#menucrono");
inicio.html(menucrono);	
$(function(){ 

$("#crono").click(crono);
$("#temp").click(temp);

function crono(){
inicio.html(menucrono);
}
function temp(){
inicio.html(menutemp);
}
})
