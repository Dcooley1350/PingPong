
var PingPong = function(userNumber,arrayNumbers) {
  if ((userNumber < 0) || (userNumber % 1 != 0)){
    console.log('array numbers set to false');
    arrayNumbers = false
  } else {
    for (var index =0; index < userNumber; index += 1) {
      arrayNumbers.push(index+1)
    }
  }
}






$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    var arrayNumbers = []
    $("#pingPongGame").empty()
    event.preventDefault();
    var userNumber = parseInt($("input#number-entered").val());
    PingPong(userNumber,arrayNumbers);
console.log("ine 225")
    if (arrayNumbers=== true) {
      console.log(arrayNumbers)
      $("#pingPongGame").append("<li>"+"Please enter a postitive integer!"+"<li>")
    }
    arrayNumbers.forEach(function(arrayNumber) {

      if (arrayNumber % 15 === 0) {
        $("#pingPongGame").append("<li>"+"Ping Pong"+"</li>")
      } else if (arrayNumber % 5 === 0) {
        $("#pingPongGame").append("<li>"+"Pong"+"</li>")
      } else if (arrayNumber % 3 === 0) {
        $("#pingPongGame").append("<li>"+"Ping"+"</li>")
      } else
        $("#pingPongGame").append("<li>"+arrayNumber+"</li>");
    })
  });
});