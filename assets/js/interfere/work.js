var artifactWorkAPI = (function () {

	// PUBLIC OBJECT
	var public = {};

	// NAV FUNCTIONS
	function navFeatures() {

		// NAV STATUS
		var navStatus = true;

		// MOBILE NAV FUNCTIONALITY
		$("#nav-icon").click(function() {

			console.log("checking");

			$(this).toggleClass("open");
			if(navStatus) {
				TweenMax.to(".link-list-mobile", 0.5, {left:"0%", ease: Back.easeInOut});
				navStatus = false;
			} else {
				TweenMax.to(".link-list-mobile", 0.5, {left:"-100%", ease: Back.easeInOut});
				navStatus = true;
			}
		});

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("artifactWorkAPI loaded...");
		navFeatures();
		$("nav").css("position", "fixed");

	}

	// PUBLIC FUNCTIONS
	public.init = init;

	// RETURN PUBLIC
	return public;

}());

$(document).on("ready", artifactWorkAPI.init);