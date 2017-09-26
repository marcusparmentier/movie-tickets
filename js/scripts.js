//Business logic********************************************************
var regPrice = 10


function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}

var priceFig = function(timeValue) {
  if(timeValue === 1 || timeValue === 11) {
    regPrice = regPrice - 2;
  };
};


//User interface logic**************************************************
$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = parseInt($("input:radio[name=movie]:checked").val());
    var inputtedTime = parseInt($("input:radio[name=time]:checked").val());
    var inputtedAge = parseInt($("input:radio[name=age]:checked").val());
    var priceResult = "";
    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    priceResult = priceFig(inputtedTime);

    $("ul#ticket-details").append("<li><span class='ticketDetails'>" + newTicket.movie , newTicket.time + "</span></li>" + "<h3 class='ticketDetails'>Ticket Price: $" + regPrice + "</h3>");


  });
});
