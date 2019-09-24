//Check off to dos by clicking
$("ul").on("click", "li", function(){
	$(this).toggleClass("completed");

//The way to do it through JQuery
/*	//if li is Gray 
	if($(this).css("color") === "rgb(128, 128, 128)"){
	//then turn black and viceversa
	$(this).css({
		color:"black",
		textDecoration: "none"
		});
	}
	else{
	//turn it to gray
	$(this).css({
		color:"gray",
		textDecoration: "line-through"
		});
	}*/
});

//By adding "event" to our function we stop the next event to happen. In this case to cross it out
$("ul").on("click", "span", function(event){
	//Apply "remve" to the span but also to the Li where it is contained
	$(this).parent().fadeOut(500, function(){
		$(this).remove();
	});
	event.stopPropagation();
});

$("input[type='text']").keypress(function(event){
	if(event.which === 13){
	//Grabbig the todo entered
	 var todoText = $(this).val();
	 $(this).val("");
	 $(this).attr("placeholder", "What do I need to buy?").blur();
	 //Create the new li
	 $("ul").append("<li><span><i class='far fa-trash-alt'></i></span>" + " " + todoText + "</li>");
	}
});

$("#plus").click(function(){
	$("input[type='text']").fadeToggle();
});