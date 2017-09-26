//Business logic********************************************************

function Ticket(movie, time, age) {
  this.movie = movie;
  this.time = time;
  this.age = age;
}


//User interface logic**************************************************
$(document).ready(function() {
  $("form#ticketForm").submit(function(event) {
    event.preventDefault();

    var inputtedMovie = parseInt($("input:radio[name=movie]:checked").val());
    var inputtedTime = parseInt($("input:radio[name=time]:checked").val());
    var inputtedAge = parseInt($("input:radio[name=age]:checked").val());

    var newTicket = new Ticket(inputtedMovie, inputtedTime, inputtedAge);

    $("ul#ticket-details").append("<li><span class='ticDetails'>" + newTicket.movie + "</span></li>");

  });
});
