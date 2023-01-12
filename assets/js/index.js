// Current date and time + hour using moment.js documentation
let rightNow = moment().format('dddd, MMMM Do YYYY, h:mm a')
let currentHour = moment().hour();

console.log(currentHour);
// Display current date and time at the top of the page in the <p> element using jquery
$('#currentDay').text(rightNow)

// Background colors for past, present and future time blocks
hourColorBlock = () => {
    $(".description").each(function() {
        var id = $(this).attr('id');
        // makes the color dark pink if hour block is in the future
        if (id == currentHour) {
            $(this)
                .removeClass('future past')
                .addClass('present');
        } else if (id < currentHour) { // makes the color light pink if hour block is past
            $(this)
                .removeClass('future present')
                .addClass('past');
        } else { // makes the future block is light blue
            $(this)
                .removeClass('past present')
                .addClass('future');
        }

    })

};

// Save to local storage (saveBtnClick) -
$('.saveBtn').click(function(event) {
  // So the page does not reset and the data is not lost on reload
  event.preventDefault();
  // .description is the text area where the event is entered
  let input = $(this).siblings('.description').val();
  let schedTime = $(this).siblings('.description').attr("id");
  // Saves the input to LocalStorage - localStorage.setItem(keyname, keyvalue)
  localStorage.setItem(schedTime, input)
  console.log('Your data has been saved')
});

// Load from local storage
loadEvent = () => {
    for (let i = 7; i < 18; i++) {
        let tasks = localStorage.getItem(i);
        $('#' + i).val(tasks);
    }
};
// Keep page time current - checks each minute - setInterval(func, delay)
// setInterval(funciton, 60000);
// function calls
hourColorBlock();
loadEvent();


//   let schedTime = localStorage.getItem(inputEvent);
//   if (schedTime != null) {
//     console.log('Your Event has NOT been saved:/')
//   } else {
//     console.log('Your Event has been saved<3')
//   }