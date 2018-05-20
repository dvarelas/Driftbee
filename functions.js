$(".card").click(function() {
  window.location = $(this).find("a").attr("href"); 
  return false;
});

//Right arrow
$("#right carousel-control").click(function() {
	var currentSlide = $(".slide.active");
	var nextSlide = currentSlide.next();

	currentSlide.fadeOut(300).removeClass("active");
	nextSlide.fadeIn(300).addClass("active")

	if(nextSlide.length == 0) {
		$(".slide").first().fadeIn(300).addClass("active")
	}
});

//Left arrow
$("#left carousel-control").click(function() {
	var currentSlide = $(".slide.active");
	var previousSlide = currentSlide.prev();

	currentSlide.fadeOut(300).removeClass("active");
	previousSlide.fadeIn(300).addClass("active")

	if(previousSlide.length == 0) {
		$(".slide").last().fadeIn(300).addClass("active")
	}
});