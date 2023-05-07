
$(function () {
    // Add a listener for click events on the save button. This code should
    // use the id in the containing time-block as a key to save the user input in
    // local storage. 
    $(".saveBtn").on("click", function() {
      var hourId = $(this).parent().attr("id");
      var description = $(this).siblings(".description").val();
      localStorage.setItem(hourId, description);
      console.log();
    });
  
    // Add code to apply the past, present, or future class to each time
    // block by comparing the id to the current hour. 
    var currentHour = dayjs().hour();
    $(".time-block").each(function() {
      var hourBlock = parseInt($(this).attr("id").split("-")[1]);
      if (hourBlock < currentHour) {
        $(this).addClass("past");
      } else if (hourBlock === currentHour) {
        $(this).addClass("present");
      } else {
        $(this).addClass("future");
      }
    });
  
    // Add code to get any user input that was saved in localStorage and set
    // the values of the corresponding textarea elements.
    $(".description").each(function() {
      var hourId = $(this).parent().attr("id");
      var description = localStorage.getItem(hourId);
      $(this).val(description);
    });
  
    // Add code to display the current date in the header of the page.
    $("#currentDay").text(dayjs().format("dddd, MMMM D"));
  });