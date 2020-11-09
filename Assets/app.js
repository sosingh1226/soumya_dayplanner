
$(document).ready(function () {
// initiating today's date

    console.log(parseInt(moment().format('H')))
    // since we only need hour by hour, we parse the current time into an integer
  
    const currentTime = moment().format('Do YYYY MMMM')
    $("#currentTime").text(currentTime)
    $("span").attr("style", "width: 75px")
    $("button").text("Submit")

    // displaying hourly timings using the format by moment.js format
  
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17]
    // setting up of an array for 9am to 5pm on 24 hour format
  
    times.forEach(time => {
      const timeCheck = window.localStorage.getItem(time)
      const currentHour = moment().hour()
      const timeId = "#" + time
      // getting the current time and time in the calendar
  
      if (currentHour > time) {
        $(timeId).addClass("bg-secondary text-light")
        $(timeId).attr("disabled", true)
      } else if (currentHour === time) {
        $(timeId).addClass("bg-danger text-light")
      } else {
        $(timeId).addClass("bg-success text-light")
      }

      // assigning colors to different hour, the past is in grey and nothing can be added hence disabled
      // present is in RED
      // future hour is shown in GREEN
  
      console.log("here we do timecheck: ", timeCheck)
      if (timeCheck === null) window.localStorage.setItem(time, "")
      else if (timeCheck.length > 0) {
        $(timeId).attr("value", window.localStorage.getItem(time))
      }
      // if the event content has text, display the text and save
    })
  
  
    $("form").on("submit", function (e) {
      e.preventDefault()
      // preventing default behaviour
  
      const time = e.target.querySelector("input").getAttribute("id")
      const text = e.target.querySelector("input").value
  
      window.localStorage.setItem(time, text)

      // saving time and event in local storage
    })
  })
  