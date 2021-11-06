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
           //console.log(blockHour, currentHour);
          // check if we've moved past this time
          if (blockHour < currentHour) {
            $(this).addClass('past');
            $(this).removeClass('future');
            $(this).removeClass('present');
          } else if (blockHour === currentHour) {
            $(this).removeClass('past');
            $(this).addClass('present');
            $(this).removeClass('future');
            //console.log("text");
          } else {
            $(this).removeClass('past');
            $(this).removeClass('present');
            $(this).addClass('future');
          }
        });
      } 

   hourTracker();
    
    var currentDay = $("#currentDay");
    
    currentDay.text(moment().format("dddd, MMMM Do YYYY"));
        
        $("#hr-9 .description").val(localStorage.getItem("hr-9"));
        $("#hr-10 .description").val(localStorage.getItem("hr-10"));
        $("#hr-11 .description").val(localStorage.getItem("hr-11"));
        $("#hr-12 .description").val(localStorage.getItem("hr-12"));
        $("#hr-13 .description").val(localStorage.getItem("hr-13"));
        $("#hr-14 .description").val(localStorage.getItem("hr-14"));
        $("#hr-15 .description").val(localStorage.getItem("hr-15"));
        $("#hr-16 .description").val(localStorage.getItem("hr-16"));
        $("#hr-17 .description").val(localStorage.getItem("hr-17"));
    });
    
    