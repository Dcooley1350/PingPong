





$(document).ready(function() {
  event.preventDefault();
  var userNumber = parseInt($("input#number-entered").val());
  var pingPongGame = PingPong(userNumber);
  $("#pingPongGame").text(pingPongGame)
})