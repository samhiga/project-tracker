
// function for timer 
$(document).ready(function (){
    setInterval(function(){
    $("#currentDay").text(dayjs().format("dddd, MMMM D YYYY, h:mm:ss a"));
    }, 1000);
    });

    $(function () {
        $('#datepicker').datepicker({
          changeMonth: true,
          changeYear: true,
        });
      });