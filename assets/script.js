// Current date
let current = moment()
$("#currentDay").text(current.format("dddd, MMMM Do "))
 
// Current time
let currentTime = parseInt(moment().format('H'))
console.log(currentTime);

// For loop to append the rest of the time blocks
let i
for( i = 9; i < 18; i++) {
//console.log($('#text').data("hour"));
 $("#container").append(
   `<div style="margin-left:20px;" class="row">
      <span class="col-1 pt-3 pl-1 hour">${i}:00</span>
       <textarea id="input"  class="col-8 text" data-hour=${i}>
        </textarea>
        <button  class="col-1 saveBtn" id="saveBtn" data-hour=${i}><i class="fa fa-floppy-disk"></i>
        </button>
    </div>
 `
 ) 
}

// Adding event listener 
$("button").on('click',function(e) {
  e.preventDefault()
  console.log(e.target);
  console.log($("#input").val());
  console.log($("#input").attr('data-hour'),$("#saveBtn").attr('data-hour'));

  if($("#input").attr('data-hour') == $("#saveBtn").attr('data-hour')) {
   console.log('yes');
   task = $('#input').val()
   console.log(task);
   localStorage.setItem('task', task)
  }else{
   console.log('no');
  } 
})
$("#input").text(localStorage.getItem('task'))


// Adding colors according to the current time
function taskColor() {
 if($('#input').data("hour") > currentTime) {
    $("#input").addClass('future')
 }else if($('#input').data("hour") == currentTime) {
    $("#input").addClass('present')
 }else if($('#input').data("hour") < currentTime) {
    $("#input").addClass('past')
 }
}
taskColor()


