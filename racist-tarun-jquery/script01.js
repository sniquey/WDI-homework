$(document).ready(function(){
	$("body").hide();
});

$(document).one('click',(function(){
	$("body").show();

	var $overlay = $("<div id='overlay'></div>");
	var $image = $("<img>");
	var $caption = $("<p></p>");
	var $signoff = $("h1.jokes");

	$overlay.append($image);

	$overlay.append($caption);

	$("body").append($overlay);

	$(".clickimg").hide();
	$(".clickimg").show(3000);
	$tarun_image = $("a.m");
	$("li").hide().parent().before($tarun_image);
	$("a img.tarunsface").click(function(){
		$("li").show();
		$tarun_image.hide();
		$(".clickimg").hide();
	});

	$tarun_image.slideUp( 3000 ).slideDown(3000);

	

	$("#imageGallery a").click(function(event){
		event.preventDefault();
		var imageLocation = $(this).attr("href");

		$image.attr("src", imageLocation);
		$overlay.show();

		var captionText = $(this).children("img").attr("alt");
  	
  		$caption.text(captionText);

	});

	$overlay.click(function() {
		$overlay.hide();
	});

	$( "#catwalk" ).ready(function() {
  $( "#cat" ).animate({
    left: "+=80%",
  }, 5000, function() {
  });

  $.fx.interval = 100;
$( "#cat" ).delay(300,(function() {
  $( "div" ).toggle( 3000 );
}));

 $.fx.interval = 100;
$( "#cat" ).delay(300,(function() {
  $( "div" ).toggle( 3000 );
}));
});

	$signoff.hide();
	$signoff.show(20000);

}));

