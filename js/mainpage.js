$(document).ready(function(){
	console.log(1);
    setTimeout(e => {
    	$("#font-1 span:first").slideDown("slow");
    	console.log(2);
    },2000)
    // $("#font-1 span:last").slideDown(1000);
    // $("#font-2 span:first").slideDown(1000);
    // $("#font-2 span:last").slideDown(1000);
});