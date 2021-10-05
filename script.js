
var currentDay = $("#currentDay");
currentDay.text(moment().format("dddd, MMMM Do YYYY"));

$("#hr9 .description").val(localStorage.getItem("hour9"));
$("#hr10 .description").val(localStorage.getItem("hour10"));
$("#hr11 .description").val(localStorage.getItem("hour11"));
$("#hr12 .description").val(localStorage.getItem("hour12"));
$("#hr1 .description").val(localStorage.getItem("hour13"));
$("#hr2 .description").val(localStorage.getItem("hour14"));
$("#hr3 .description").val(localStorage.getItem("hour15"));
$("#hr4 .description").val(localStorage.getItem("hour16"));
$("#hr5 .description").val(localStorage.getItem("hour17"));

$(document).ready(function () {
    
var saveBtn = $(".saveBtn");

    saveBtn.on("click",function () {
    console.log(this);
        
        var plan = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");
        
        localStorage.setItem(time, plan);
      
    });

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
    
    function hourTracker() {
    
       // var timeBlock = $(".time-block");
    
       // timeBlock.each(function () {
            var currentHour =  moment().hour();
            
            //moment().format();
            $(".time-block").each(function(){

            
            var blockHour = parseInt($(this).attr("id").split("hour")[1]);
            console.log(blockHour, currentHour)
           // moment($(this).text(), "h:mm A"); 
            
            if (blockHour < currentHour) {
                $(this).addClass("past");
                $(this).removeClass("future");
                
                $(this).removeClass("present");
    
            } else if (blockHour === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("past");
                $(this).removeClass("future");
                 
                 console.log("text");
    
            } else  {
                $(this).addClass("future");
                $(this).removeClass("past");
                
                $(this).removeClass("present");
            }

        });
}
    
    hourTracker();
    //setPlanner();

    });

