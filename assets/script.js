$(function() {
    var timeDisplayEl = $("#current-time");
  
    setInterval(function() {
      var rightNow = dayjs().format('MMM DD, YYYY [at] hh:mm:ss a');
      timeDisplayEl.text(rightNow);
    }, 1000);
  
 
    $(".saveBtn").on("click", function() {
      var hourId = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(hourId, description);
      console.log("Saved description: " + description);
    });
  
 
    var currentHour = dayjs().hour();
    $(".time-block") (function() {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
   
    $(".description") (function() {
      var hourId = $(this).parent().attr("id");
      var description = localStorage.getItem(hourId);
      $(this).val(description);
    });
  
  
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  });
  

