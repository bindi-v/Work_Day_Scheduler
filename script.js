var currentDay = $("#currentDay");
//var currentTime = moment();
currentDay.text(moment().format("dddd, MMMM Do YYYY"));
    
    $("#hr9 .description").val(localStorage.getItem("hr9"));
    $("#hr10 .description").val(localStorage.getItem("hr10"));
    $("#hr11 .description").val(localStorage.getItem("hr11"));
    $("#hr12 .description").val(localStorage.getItem("hr12"));
    $("#hr13 .description").val(localStorage.getItem("hr13"));
    $("#hr14 .description").val(localStorage.getItem("hr14"));
    $("#hr15 .description").val(localStorage.getItem("hr15"));
    $("#hr16 .description").val(localStorage.getItem("hr16"));
    $("#hr17 .description").val(localStorage.getItem("hr17"));

$(document).ready(function () {
    
var saveBtn = $(".saveBtn");

    saveBtn.on("click",function () {
       // $('.saveBtn').on("click", function(){ 
    console.log(this);
  var time = $(this).parent().attr("id");
   var plan = $(this).siblings(".description").val();
        
        console.log(time, plan);
        localStorage.setItem(time, plan);
  
     $(".notification").addClass("show");
      setTimeout(function() {
      $('.notification').removeClass("show");
      }, 5000);
    });

      function hourTracker() {
        // get current number of hours
        var currentHour = moment().hours();
    
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

    