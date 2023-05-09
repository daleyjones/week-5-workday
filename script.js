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

  function updateTimeslots() {
    console.log('updateTimeslots');
    var currentHour = dayjs().hour();

    $('.time-block').each(function (index, element) {

        var hour = $(element).attr('data-hour');
        console.log(hour, currentHour);

        if (hour < currentHour) {
            $(element).find('.description').addClass('past').removeClass('present future');
        }
        else if (hour == currentHour) {
            $(element).find('.description').addClass('present').removeClass('past future');
        }
        else {
            $(element).find('.description').addClass('future').removeClass('past present');
        }
    });
  }

  $(".description").each(function() {
    var hourId = $(this).parent().attr("id");
    var description = localStorage.getItem(hourId);
    $(this).val(description);
  });

  $("#currentDay").text(dayjs().format("dddd, MMMM D"));

  setInterval(function() {
    updateTimeslots();
  }, 1000);
});
