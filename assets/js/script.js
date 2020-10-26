$(document).ready(function () {
  setInterval(function () {
      var currentTime = moment().format('MMMM Do YYYY, h:mm:ss a');
      $("#currentDay").text(currentTime);
      for (var i = 9; i < 18; i++) {
          if (i === moment().hour()) {
              $("#hour-" + i).removeClass("past present future").addClass("present");
          } else if (i < moment().hour()) {
              $("#hour-" + i).removeClass("past present future").addClass("past");
          } else {
              $("#hour-" + i).removeClass("past present future").addClass("future");
          }
      }
  }, 1000);
  //User clicks button to save text in time block to local stoage
  var timeboxText;
  $(".saveBtn").on("click", function () {
      timeboxText = $(this).siblings("textarea")
      var userInput = timeboxText.val();
      var timeBlock = timeboxText.attr("id");
      localStorage.setItem(timeBlock, userInput);
  });
  function getLocalStorage() {
      for (var i = 9; i < 18; i++) {
          $("#hour-" + i).val(localStorage.getItem("hour-" + i));
      }
  }
  getLocalStorage();
    }
);