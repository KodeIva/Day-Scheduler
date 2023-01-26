// current date
let current = moment()
$("#currentDay").text(current.format("dddd, MMMM Do "))
 
// local current time
let currentTime = moment().format('H')
console.log(currentTime);


for(let i = 9; i < 18; i++) {
 // generating and styling elements
  // create div
  let lineDiv = $("<div>")
  lineDiv.attr('class','row')
  //lineDiv.css({"border-top":"1px dashed #000000"})

  // create span, goes inside the div
  let hour = $("<span>")
  hour.text(`${i}:00`)
  hour.css({'width':'10%','padding-top': '30px','text-align':'center',"border-top":"1px dashed #000000"})

  // create textarea, goes indide the div
  let textArea = $("<textarea>")
  textArea.attr('data-hour',`${i}`)
  textArea.css({'width': '75%',"border-top":"1px dashed #000000"})

  // create button goes inside the div
  let btn = $("<button>")
  btn.css({'backgroundColor':'rgb(0,191,255)', 'width': '10%'})
  btn.addClass('saveBtn')
  btn.attr('data-hour',`${i}`)
  btn.text("Save")

  /*
  let save = $('<i>')
  save.addClass('fa fa-floppy-disk')
  save.css({'color':'white'})
*/
  // append elements together
  //btn.append(save)
  lineDiv.append(hour,textArea,btn)
  $("#container").append(lineDiv)
 

  // add event listener to the button currently clicked
  btn.on('click',function(e) {
   e.preventDefault() 
   let eClick = $(e.target).attr("data-hour"); 
   let eVal = $(e.target).siblings("textarea").val();

   // add data to localStorage
   localStorage.setItem(eClick, eVal);
  })

  // access data from localStorage
  textArea.text(localStorage.getItem(textArea.attr('data-hour')))

  // adding CSS color classes according to the current time of the day
  if(textArea.data("hour") > currentTime) {
     textArea.addClass('future')
  }else if(textArea.data("hour") == currentTime) {
    textArea.addClass('present')
  }else if(textArea.data("hour") < currentTime) {
    textArea.addClass('past')
  }
}

