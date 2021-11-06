var currentDay = $("#currentDay");
//var currentTime = moment();
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
    
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hour11"));
    $("#hr12 .description").val(localStorage.getItem("hour12"));
    $("#hr1 .description").val(localStorage.getItem("hour13"));
    $("#hr2 .description").val(localStorage.getItem("hour14"));
    $("#hr3 .description").val(localStorage.getItem("hour15"));
    $("#hr4 .description").val(localStorage.getItem("hour16"));
    $("#hr5 .description").val(localStorage.getItem("hr5"));

$(document).ready(function () {
    
var saveBtn = $(".saveBtn");

    saveBtn.on("click",function () {
       // $('.saveBtn').on("click", function(){ 
    console.log(this);
  var time = $(this).parent().attr("id");
   var plan = $(this).siblings(".description").val();
        
        console.log(time, plan);
        localStorage.setItem(time, plan);
  
 //$(".description").addClass("show");
 //setTimeout(function() {
// $('.description').removeClass("show");
//}, 5000);
    });

      function hourTracker() {
        // get current number of hours
        var currentHour = moment().hour();
    
        // loop over time blocks
        $('.time-block').each(function () {
          var blockHour = parseInt($(this).attr('id').split('-')[1]);
           console.log(blockHour, currentHour);
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
            console.log("text");
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      } 

   function setPlanner() {
        $(".hour").each(function(){
           var nowHour = $(this).text();
           var nowPlan = localStorage.getItem(nowHour);
            console.log(this);
            console.log(nowHour);

           if(nowPlan !== null) {
               $(this).siblings(".description").val(nowPlan);
      }
       });
    }
    hourTracker();
    setPlanner();

    });

    