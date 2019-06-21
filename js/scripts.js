var listContents = ""
var PingPong = function(userNumber) {
  if ((userNumber < 0) || (userNumber % 1 != 0)){
    listContents = "<li>Please enter a positive integer!</li>"
  } else {
    for (var index =1; index < userNumber+1; index += 1) {
      if(index % 15 === 0) {
       listContents= listContents + "<li>Ping Pong</li>"
      } else if (index % 5 === 0) {
        listContents = listContents + "<li>Pong</li>"
      } else if (index % 3 === 0) {
        listContents = listContents + "<li>"+"Ping"+"</li>"
      } else {
        listContents = listContents + "<li>"+index+"</li>";
      }
    }
  }
}


$(document).ready(function() {
  $("form#user-input").submit(function(event) {
    $("#pingPongGame").html("")
    listContents = ""
    event.preventDefault();
    var userNumber = parseInt($("input#number-entered").val());
    PingPong(userNumber)
    $("#pingPongGame").append(listContents)
  })
})