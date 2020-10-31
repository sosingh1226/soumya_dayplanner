
$(document).ready(function () {

    console.log(parseInt(moment().format('H')))
  
    const currentTime = moment().format('Do YYYY MMMM')
    $("#currentTime").text(currentTime)
    $("span").attr("style", "width: 75px")
    $("button").text("Submit")
  
    const times = [9, 10, 11, 12, 13, 14, 15, 16, 17, 23, 24]
  
    times.forEach(time => {
      const timeCheck = window.localStorage.getItem(time)
      const currentHour = moment().hour()
      const timeId = "#" + time
      console.log("this is time from list", time)
      console.log("this is current hr",currentHour)
  
      if (currentHour > time) {
        $(timeId).addClass("bg-secondary text-light")
        $(timeId).attr("disabled", true)
      } else if (currentHour === time) {
        $(timeId).addClass("bg-danger text-light")
      } else {
        $(timeId).addClass("bg-success text-light")
      }
  
      if (timeCheck === null) window.localStorage.setItem(time, "")
      if (timeCheck.length > 0) $(timeId).attr("value", window.localStorage.getItem(time))
    })
  
  
    $("form").on("submit", function (e) {
      e.preventDefault()
  
      const time = e.target.querySelector("input").getAttribute("id")
      const text = e.target.querySelector("input").value
  
      window.localStorage.setItem(time, text)
    })
  })
  