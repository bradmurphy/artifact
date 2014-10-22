var artifactAPI = (function () {

	// PUBLIC OBJECT
	var public = {};

	// MOBILE VARIABLE
		var isMobile = window.matchMedia("only screen and (max-width: 768px)");

	// DESKTOP VARIABLE
	var isDesktop = window.matchMedia("only screen and (min-width: 768px)");

	// WORK ARRAY
	var work = [
	  {
	    client: "Georgia Lottery - Keno",
	    project: "Top Goat",
	    background: "assets/img/work-thumbs/GA_Lottery_Top_Goat.jpg",
	    url: "work/georgia-lottery-keno-top-goat.html"
	  },
	  {
	    client: "Yamaha Golf-Car",
	    project: "Website",
	    background: "assets/img/work-thumbs/Yamaha_Website.jpg",
	    url: "work/yamaha-golfcar-website.html"
	  },
	  {
	    client: "CDC",
	    project: "hiv treatment works (director's cut)",
	    background: "assets/img/work-thumbs/CDC_Living_with_HIV.jpg",
	    url: "work/cdc-hiv-treatment-work.html"
	  },
	  {
	    client: "Adult Swim Microsite",
	    project: "Million Ways to Die in the West",
	    background: "assets/img/work-thumbs/AMWTD_Website.jpg",
	    url: "work/adult-swim-million-ways-to-die.html"
	  },
	  {
	    client: "Maybelline",
	    project: "Fashion Week",
	    background: "assets/img/work-thumbs/Maybelline_RichMedia.jpg",
	    url: "work/maybelline-fashion-week.html"
	  },
	  {
	    client: "REI",
	    project: "Unpacker",
	    background: "assets/img/work-thumbs/REI_Unpacker.jpg",
	    url: "work/rei-unpacker.html"
	  },	
	  {
	    client: "Regions Bank",
	    project: "Drumline",
	    background: "assets/img/work-thumbs/Regions_Drumline_Thumb.jpg",
	    url: "work/regions-bank-drumline.html"
	  },
	  {
	    client: "Ford",
	    project: "Scoreboard",
	    background: "assets/img/work-thumbs/Ford_WOW_Thumb.jpg",
	    url: "work/ford-we-own-work-2014.html"
	  },
	  {
	    client: "Cartoon Network Latin America",
	    project: "On-Air Refresh",
	    background: "assets/img/work-thumbs/CN_OnAir_Refresh_380.jpg",
	    url: "work/cartoon-network-latin-america.html"
	  },
	  {
	    client: "Werner Ladders",
	    project: "Focus on the Job",
	    background: "assets/img/work-thumbs/WernerLadders_Thumb.jpg",
	    url: "work/werner-ladders-focus-on-the-job.html"
	  },
	  {
	    client: "Bridgestone Golf",
	    project: "Hydrocore",
	    background: "assets/img/work-thumbs/Bridgestone_Hydrocore_Thumb.jpg",
	    url: "work/bridgestone-golf-hydrocore.html"
	  },
	  {
	    client: "Cartoon Network",
	    project: "Pebbles Bowl",
	    background: "assets/img/work-thumbs/pebbles_artifact_960x540.jpg",
	    url: "work/cartoon-network-pebbles-bowl.html"
	  },
	  {
	    client: "The Artifact(s)",
	    project: "Some of our best work from the cutting room floor.",
	    background: "assets/img/work-thumbs/thmb_artifacts.jpg",
	    url: "work/the-artifacts.html"
	  },
	  {
	    client: "NBC Sports",
	    project: "US Figure Skating Championship",
	    background: "assets/img/work-thumbs/nbc_olympics_homepage.jpg",
	    url: "work/nbc-sports-group-us-figure-skating-championship.html"
	  },
	  {
	    client: "Georgia Lottery",
	    project: "Keno - Buddy Cops",
	    background: "assets/img/work-thumbs/GA-Lottery_BuddyCops_Thumb.jpg",
	    url: "work/georgia-lottery-keno.html"
	  },
	  {
	    client: "Ben 10",
	    project: "Reluctant Hero (Director's Cut)",
	    background: "assets/img/work-thumbs/CN_Ben10_Hero_Thumb.jpg",
	    url: "work/ben-10-the-reluctant-hero.html"
	  },
	  {
	    client: "FDOC",
	    project: "Take on the Day",
	    background: "assets/img/work-thumbs/FDOC_TakeOnTheDay_Thumb.jpg",
	    url: "work/fdoc-take-on-the-day.html"
	  },
	  {
	    client: "REI",
	    project: "Skier",
	    background: "assets/img/work-thumbs/REI_Skier_Thumb.jpg",
	    url: "work/rei-skier.html"
	  },
	  {
	    client: "Golf Channel",
	    project: "Pipe Dreams",
	    background: "assets/img/work-thumbs/Golf_PipeDream_Thumb.jpg",
	    url: "work/golf-channel-pipe-dream.html"
	  },
	  {
	    client: "HBO Latino",
	    project: "Year End",
	    background: "assets/img/work-thumbs/HBO_YearEnd_Thumb.jpg",
	    url: "work/hbo-latino-year-end.html"
	  },
	  {
	    client: "OMG Girlz",
	    project: "iPhone App",
	    background: "assets/img/work-thumbs/OMG-Girlz_App_Thumb.jpg",
	    url: "work/omg-girlz-iphone-app.html"
	  },
	  {
	  	client: "All Wrapped Up",
	    project: "Holiday Promotion",
	    background: "assets/img/work-thumbs/AD_HC_2013_Site_v03_title_black12.jpg",
	    url: "work/all-wrapped-up.html"
	  },
	  {
	  	client: "Kodak",
	    project: "It's Flashcube (Experimental)",
	    background: "assets/img/work-thumbs/FlashCube_1.jpg",
	    url: "work/kodak-flash-cube.html"
	  },
	  {
	  	client: "Coca-Cola",
	    project: "Drink Cola (Experimental)",
	    background: "assets/img/work-thumbs/DrinkCoke_1.jpg",
	    url: "work/coca-cola-drink-coke.html"
	  },
	  {
	  	client: "Spread the Joy",
	    project: "Holiday Promotion",
	    background: "assets/img/work-thumbs/holiday_2012_frame_6.jpg",
	    url: "work/spread-the-joy-holiday-card.html"
	  },
	  {
	  	client: "REI",
	    project: "Hiker",
	    background: "assets/img/work-thumbs/REI_Hiker_Thumb.jpg",
	    url: "work/rei-hiker.html"
	  },
	  {
	  	client: "AT&T",
	    project: "Skyline",
	    background: "assets/img/work-thumbs/ATT_Skyline_Thumb.jpg",
	    url: "work/bbdo-att-skyline.html"
	  }
	 ];

	// NAV FUNCTIONS
	function navFeatures() {

		// NAV ACTIVE LINKS
		$(".link-list-mobile li a").on("click", function() {
			$(".link-list-mobile li a").removeClass("nav-active");
			$(this).addClass("nav-active");
			console.log("boom");
			TweenMax.to(".link-list-mobile", 0.5, {left:"-100%", ease: Back.easeInOut});
			$("#nav-icon").removeClass("open");
			navStatus = true;
		});

		$(".link-list li a").on("click", function() {
			$(".link-list li a").removeClass("nav-active");
			$(this).addClass("nav-active");
		});

		// SORTING ACTIVE LINKS
		$(".sorting ul li a").on("click", function() {
			$(".sorting ul li a").removeClass("sort-active");
			$(this).addClass("sort-active");
		});

		// NAV STATUS
		var navStatus = true;

		// MOBILE NAV FUNCTIONALITY
		$("#nav-icon").click(function() {
			$(this).toggleClass("open");
			if(navStatus) {
				TweenMax.to(".link-list-mobile", 0.5, {left:"0%", ease: Back.easeInOut});
				navStatus = false;
			} else {
				TweenMax.to(".link-list-mobile", 0.5, {left:"-100%", ease: Back.easeInOut});
				navStatus = true;
			}
		});

		// DOWN ARROW CLICK EVENT
		$("#down").on("click", function() {
			TweenMax.to(window, 1, {
				scrollTo:{y: 1000},
				ease:Power4.easeInOut
			});
		});

	}

	// FEATURE CLICK EVETNS

	function featureClicks() {

		$("#feature1").on("click", function() {
			window.location = "work/georgia-lottery-keno-top-goat.html";
		});

		$("#feature2").on("click", function() {
			window.location = "work/cdc-hiv-treatment-work.html";
		});

		$("#feature3").on("click", function() {
			window.location = "work/aicp-2014.html";
		});

	}

	// SCROLL FUNCTIONS
	function scrollingFeatures() {

		if (isDesktop.matches) {
			// STICKY HEADER
			$("nav").waypoint("sticky");

			// FEATURE ONE TIMELINE
			var featureTimeline1 = new TimelineMax({paused: true});
			featureTimeline1.to("#feature1", 1, {css:{"background-position-y": "0px"}});

			// FEATURE TWO TIMELINE
			var featureTimeline2 = new TimelineMax({paused: true});
			featureTimeline2.from("#feature2", 1, {css:{"background-position-y": "0px"}});

			// FEATURE THREE TIMELINE
			var featureTimeline3 = new TimelineMax({paused: true});
			featureTimeline3.to("#feature3", 1, {css:{"background-position-y": "0px"}});
			
			// FEATURE THREE TIMELINE
			var featureTimeline4 = new TimelineMax({paused: true});
			featureTimeline4.to("#feature4", 1, {css:{"background-position-y": "0px"}});
		}

		// SCROLL LISTENER
		window.addEventListener("scroll", function() {

		    // ON MOBILE MAKE NAV FIXED
		    if (isDesktop.matches) {
		    	// PARALLAX FEATURES
		    	parallaxFeatures();
		    }

		    // PARALLAX FEATURE FUNCTION
		    function parallaxFeatures() {
		    	// SCROLL POSITION FOR PARALLAX FEATURES
		    	var parallaxTiming = document.body.scrollTop / 5000;

		    	// FEATURE ONE
		    	$("#feature1").waypoint(function() {
		    	  featureTimeline1.seek(parallaxTiming);
		    	}, { offset: "90%" });

		    	// FEATURE TWO
		    	$("#feature2").waypoint(function() {
		    	  featureTimeline2.seek(parallaxTiming);
		    	}, { offset: "90%" });

		    	// FEATURE THREE
		    	$("#feature3").waypoint(function() {
		    	  featureTimeline3.seek(parallaxTiming);
		    	}, { offset: "90%" });
              
                // FEATURE FOUR
		    	$("#feature4").waypoint(function() {
		    	  featureTimeline4.seek(parallaxTiming);
		    	}, { offset: "90%" });
		    }

		});
	
	}


	// WORK GRID SORTING
	function gridSort() {

		$("#grid").mixItUp();

		$(".sorting ul li a").on("click", function(e){
			e.preventDefault();
		});
		  
		for(var i = 0; i < work.length; i++) {

			// DATA VARIABLES
			var client = work[i].client;
			var project = work[i].project;
			var desc = work[i].desc;
			var backgroundImage = work[i].background;
			
			// SET GRID BACKGROUND IMAGE
			var grid = $(".grid-item");
			gridItem = grid[i];
			gridItem.style.backgroundImage =  "url(" + backgroundImage + ")";
			gridItem.setAttribute("data-href", work[i].url);

			// SET GRID HOVER DATA
			var gridHover = $(".grid-item .grid-hover");
			var gridClient = gridHover[i].children[0];
			var gridProject = gridHover[i].children[1];
			gridClient.innerHTML = client;
			gridProject.innerHTML = project;

		}

		// GRID CLICK EVENT
		$(".grid-item").on("click", function() {
			
			window.location = $(this).attr("data-href");

		});

	}

	// INIT FUNCTION
	function init() {

		// CALL INIT FUNCTIONS
		console.log("artifactAPI loaded...");
		navFeatures();
		scrollingFeatures();
		featureClicks();
		gridSort();

		// NAV SCROLL CLICK EVENTS
		$.scrollIt({
			easing: "ease-in-out",   
			scrollTime: 500,
			activeClass: "nav-active",
			topOffset: -60           
		});

	}

	// PUBLIC FUNCTIONS
	public.init = init;

	// RETURN PUBLIC
	return public;

}());

$(document).on("ready", artifactAPI.init);