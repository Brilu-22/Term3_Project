// ----------------------------------------------------------------
// Trips Array
// ----------------------------------------------------------------

const trips = [
    {
      name: "ASGARD",
      price: 3050,
      description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
      image: "cristina.jpg"
    },
    {
      name: "OLYMPUS",
      price: 2000,
      description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
      image: "daniel.jpg"
    },
    {
      name: "ELDORADO",
      price: 4000,
      description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
      image: "mike.jpg"
    },
    {
      name: "AVALON",
      price: 3500,
      description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
      image: "obi.jpg"
    },
    
	{
		name: "PRIDE ROCK",
		price: 5200,
		description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
		image: "matthew-spiteri-WfZ4WCuNtlg-unsplash.jpg"
	}
		
	
  ];
  
  // ----------------------------------------------------------------
  // When the document loads
  // ----------------------------------------------------------------
  
  $(document).ready(function(){
  
      console.log("Welcome To ATLAS: Embarking on a mystical Journey");
  
      // -----------------------------------------
      // Home Page
  
      // When the document loads, animate the hero image upwards
      $(".hero-image").animate({top: '-=100px'});
      $(".side-kick").animate({top: '-=100px'});
  
      // -----------------------------------------
      // Browse Page
  
      loadTrips();
  
  }); 
  
  // ----------------------------------------------------------------
  // Load all plants
  // ----------------------------------------------------------------
  
  function loadTrips() {
    for (let i = 0; i < trips.length; i++) {
      const trip = trips[i];
      $("#tripsContainer").append($("#tripCardTemplate").html());
      let currentChild = $("#tripsContainer").children().eq(i + 1);
      $(currentChild).find(".card-img-top").attr('src', 'assets/' + trip.image);
      $(currentChild).find("#nameText").text(trip.name);
      $(currentChild).find("#priceText").text('R' + trip.price);
      $(currentChild).find("#descriptionText").text(trip.description);
      $(currentChild).find("#descriptionText").hide();
    }
  }

  $("#tripsContainer").on('click', '.card', function() {
    $(this).find("#priceText").toggle();
    $(this).find("#descriptionText").toggle();
    $(this).find(".card-img-top").toggleClass("small");
  });

  


(function($) { 

	var container = $('.container');
	var location = $('#location');
	var section = $('.section');
   
	section.on('mouseover', function(){
		location.addClass('open-menu');
	});
	section.on('mouseout', function(){
		location.removeClass('open-menu');
	});  
	location.on('mouseover', function(){
		location.addClass('open-menu');
	});
	location.on('mouseout', function(){
		location.removeClass('open-menu');
	});
  
  })(jQuery);



