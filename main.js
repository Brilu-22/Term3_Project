// ------------------------------------------------------------------------
// Trips Array
// ------------------------------------------------------------------------

const liTrips = [
  {
    name: "ASGARD",
    price: 3050,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    image: "Asgard.png",
    tripType: "multi",
    dates: "2023-04-12"
  },
  {
    name: "OLYMPUS",
    price: 2000,
    description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    image: "Olympus.png",
    tripType: "single",
    dates: "2023-03-12"
  },
  {
    name: "ELDORADO",
    price: 4000,
    description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    image: "eldorado.png",
    tripType: "famous",
    dates: "2023-08-04"
  },
  {
    name: "AVALON",
    price: 3500,
    description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    image: "avalon.png",
    tripType: "famous",
    dates: "2023-05-12"
  },
  
{
  name: "PRIDE ROCK",
  price: 5200,
  description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
  image: "priderock.png",
  tripType: "famous",
  dates: "2023-08-12"
}
  

];


let appliedFilter = "";
let appliedSort = "single";

// ------------------------------------------------------------------------
// When the document loads
// ------------------------------------------------------------------------

$(document).ready(function(){

    console.log("Welcome to ATLAS mapping out our destinations");

    // ------------------------------------------------------------------
    // Home

    // When the document loads, animate the hero image upwards
    $("#hero-image").animate({top: '-=100px'});

    // ------------------------------------------------------------------
    // Browse

    filterSortPlants();

});

// ------------------------------------------------------------------------
// Load all plants
// ------------------------------------------------------------------------

function loadTrips(tripsToShow) {

  // Clear all elements inside the plants cards container

  $("#plantsContainer").empty();

  // Loop though plants

  for (let i = 0; i < tripsToShow.length; i++) {
    const trip = tripsToShow[i];
    
    console.log(trip.name);

    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + plant.origin + "&appid=0c8a911e5c7f8e5a03991afe2075de21",
      success: function (data) {
        tempData = data;
        console.log(tempData);
      },
    }).done(function () {
      //// Set Temperature
      //// Will give the result with a higher value

      // $(currentChild).find("#nameText").text(tempData.main.temp);
      
      $(currentChild).find("#originTemp").text("Origin Temp: " + Math.round(tempData.main.temp- 273) + "°C");
     
    
    });

    // 1: Select the plants container add the plant card to it
    $("#tripsContainer").append($("#tripCardTemplate").html());

    // 2: Create a variable that contains the most recently added plant card
    let currentChild = $("#tripsContainer").children().eq(i);

    // 3: Set the content for the current plant card from the plant array
    $(currentChild).find("#nameText").text(trip.name);
    $(currentChild).find("#priceText").text("R" + trip.price);
    $(currentChild).find("#descriptionText").text(trip.description);
    $(currentChild).find(".card-img-top").attr('src','assets/' + trip.image);

    // 4: Hide the description text from the curent card
    $(currentChild).find("#descriptionText").hide();
    $(currentChild).find("#originTemp").hide();

  };

};

// ------------------------------------------------------------------------
// When a filter or sort option is clicked
// ------------------------------------------------------------------------

$("input[name='filterRadio']").click(function(){
  appliedFilter = $(this).attr('value');

  filterSortTrips();
});

$("input[name='sortRadio']").click(function(){
  appliedSort = $(this).attr('value');

  filterSortTrips();
});

function filterSortTrips() {
  
  let filteredSortedliTrips = [];

  console.log(appliedFilter);
  console.log(appliedSort);

  // Filter Plants

  if (appliedFilter) {
    filteredSortedliTrips = liTrips.filter(trip => trip.tripType == appliedFilter);
  } else {
    filteredSortedliTrips = liTrips;
  }

  // Sort Plants

  if (appliedSort == "Cheap") {

    // Sort plants from the lowest to highest price
    filteredSortedArrPlants = filteredSortedArrPlants.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (appliedSort == "single") {

    // Sort plants from the newest to oldest
    filteredSortedliTrips = filteredSortedliTrips.sort((a, b) => {
      let da = new Date(a.dates);
      let db = new Date(b.dates);
    
      return db - da;
    });

  }

  console.log(filteredSortedliTrips)

  loadPlants(filteredSortedliTrips);

}

// ------------------------------------------------------------------------
// When a plant card is clicked
// ------------------------------------------------------------------------

$("#tripsContainer").on('click','.card', function() {

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find("#originTemp").toggle();

  // Resize the image to fit the additional content
  $(this).find(".card-img-top").toggleClass("small");

});

// https://api.openweathermap.org/data/2.5/weather?q=Pretoria&appid=0c8a911e5c7f8e5a03991afe2075de21

// $(document).ready(function(){
//   var $newTemp = $("#temp");
  
//   $.ajax({
//     type: "GET",
//     url: "https://api.openweathermap.org/data/2.5/weather?q=Texas&appid=0c8a911e5c7f8e5a03991afe2075de21",
//     success: function (data) {
//       temp = data;
//       console.log(temp);
//     },
//   }).done(function () {
//     // Set Temperature
//     $newTemp.html(temp.main.temp + " &degC");
  
//   });

// })











































// ----------------------------------------------------------------
// Trips Array
// ----------------------------------------------------------------

const trips = [
    {
      name: "ASGARD",
      price: 3050,
      description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
      image: "cristina.jpg",
      li
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
  // Load all trips
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



