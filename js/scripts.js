var PingPong = function(usernumber) {
  if (usernumber < 0) {
    return false
  }
  return false;
}




$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    event.preventDefault();
    var userNumber = parseInt($("input#number-entered").val());
    var pingPongGame = PingPong(userNumber);
    $("#pingPongGame").append("<li>"+pingPongGame+"</li>");
  });
});