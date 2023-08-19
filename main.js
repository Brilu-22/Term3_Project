// ------------------------------------------------------------------------
// Trips Array
// ------------------------------------------------------------------------

const ArrTrips = [
  {
    name: "ASGARD",
    price: 3050,
    description: "Graceful and lush, this charming indoor plant boasts glossy, emerald-green leaves that effortlessly brighten any space.",
    image: "ASGARD2.png",
    tripType: "famous",
    chooseDate: "2023-04-12",
    place:"Europe"
    
  },
  {
    name: "OLYMPUS",
    price: 2000,
    description: "Delicate and captivating, this rare succulent showcases a mesmerizing silver-white hue that gracefully adorns its petite, fleshy leaves.",
    image: "OLYMPUS2.png",
    tripType: "single",
    chooseDate: "2023-03-12",
    place:"Asia"
  },
  {
    name: "ELDORADO",
    price: 4000,
    description: "Boasting tall, sleek, and sword-like leaves, this botanical marvel adds a touch of modern flair to any setting.",
    image: "eldorado.png",
    tripType: "single",
    chooseDate: "2023-08-04",
    place:"Austria"
  },
  {
    name: "AVALON",
    price: 3500,
    description: "With its lush, feather-like fronds and compact size, this indoor beauty makes a striking addition to any interior space.",
    image: "avalon.png",
    tripType: "famous",
    chooseDate: "2023-05-12",
    place:"Australia"
  },
  
{
  name: "PRIDE ROCK",
  price: 5200,
  description: "Known for its stunning foliage that transforms with the seasons, this ornamental tree captivates with its delicate, lacy leaves in vibrant shades of red, orange, or gold.",
  image: "priderock.png",
  tripType: "famous",
  chooseDate: "2023-08-12",
  place:"Africa"
},
  

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

    filterSortTrips();

});

// ------------------------------------------------------------------------
// Load all trips
// ------------------------------------------------------------------------

function loadTrips(tripsToShow) {

  // Clear all elements inside the trips cards container

  $("#tripsContainer").empty();

  // Loop though trips

  for (let i = 0; i < tripsToShow.length; i++) {
    const trip = tripsToShow[i];
    
    console.log(trip.name);

    $.ajax({
      type: "GET",
      url: "https://api.openweathermap.org/data/2.5/weather?q=" + trip.place + "&appid=0c8a911e5c7f8e5a03991afe2075de21",
      success: function (data) {
        tempData = data;
        console.log(tempData);
      },
    }).done(function () {
      //// Set Temperature
      //// Will give the result with a higher value

       //$(currentChild).find("#nameText").text(tempData.main.temp);
      
      $(currentChild).find("#placeTemp").text("Place Temp: " + Math.round(tempData.main.temp- 273) + "°C");
     
    
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
    $(currentChild).find("#placeTemp").hide();

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
  
  let filteredSortedTrips = [];

  console.log(appliedFilter);
  console.log(appliedSort);

  // Filter Plants

  if (appliedFilter) {
    filteredSortedTrips = ArrTrips.filter(trip => trip.tripType == appliedFilter);
  } else {
    filteredSortedTrips = ArrTrips;
  }

  // Sort Trips

  if (appliedSort === "Cheap") {

    // Sort trips from the lowest to highest price
    filteredSortedTrips = filteredSortedTrips.sort((a, b) => {
      return a.price - b.price;
    });

  } else if (appliedSort === "single") {

    // Sort trips from the newest to oldest
    filteredSortedTrips = filteredSortedTrips.sort((a, b) => {
      let da = new Date(a.chooseDate);
      let db = new Date(b.chooseDate);
    
      return db - da;
    });

  }

  console.log(filteredSortedTrips)

  loadTrips(filteredSortedTrips);

}

// ------------------------------------------------------------------------
// When a trip card is clicked
// ------------------------------------------------------------------------

$("#tripsContainer").on('click','.card', function() {

  // Toggle the price & description text
  $(this).find("#priceText").toggle();
  $(this).find("#descriptionText").toggle();
  $(this).find("#placeTemp").toggle();

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



