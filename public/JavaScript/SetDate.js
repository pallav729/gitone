$(document).ready(function(){
	    $("#test").text(Date());
	  	$("button").click(function(){
	  		$.get("/time",function(data,status){
		       $("#test").text(data);
		       });
  		});
	});