setInterval(
 function() {
  let current = moment()
  $("#currentDay").text(current.format("dddd, MMMM Do "))
 },1000
)

/**/
$('textarea').addClass('time-block')
let currentTime = parseInt(moment().format('H'))
console.log(currentTime);
//console.log($("#task"));
let i
for( i = 8; i < 18; i++) {
//console.log($('#text').data("hour"));
 $("#timeBlock").append(
   `<div style="margin-left:20px;" class="row">
      <span class="hour">${i}AM</span>
       <textarea class="text" class="col-8" data-hour=${i}>
        </textarea>
        <button style="padding: 20px; margin-left:-2px" class="saveBtn" id="saveBtn" data-hour=${i}><i class="fa fa-floppy-disk"></i>
        </button>
    </div>
 `
 ) 


}
 $("button").on('click', function(e) {
  console.log();

  let index = $('.text').data("hour")
  console.log($('button').data[i]);
 console.log(e.target);
  if($('.text').data("hour") === $(".saveBtn").data('hour')) {
   console.log('hello i am' + $('button').data('hour'));
  }
 //console.log('hello');
 let task = $('.text').val()
 //console.log(typeof(task));
 localStorage.setItem(`at${i}`,task)


  //$('.text').text(localStorage.getItem(`at${i}`)) 

})


 if($('.text').data("hour") > currentTime) {
    $(".text").addClass('future')
 }else if($('.text').data("hour") == currentTime) {
    $(".text").addClass('present')
 }else if($('#text').data("hour") < currentTime) {
    $(".text").addClass('past')
 }


 //console.log('there is a task')
 // console.log(localStorage.getItem('at9'));

 $(".text").text(localStorage.getItem(`at${i}`))