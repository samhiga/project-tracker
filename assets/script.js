var projectFormEl = $('#project-form');
var projectNameEl = $("#text-input");
var dateInputEl = $('#datepicker');
var projectTableEl = $('.table');
var projectTypeEl = $('.form-label');
var tableRowEl = $('.table td');



var printProject = function (project, date) {
  var projectTableEl = $('.table');
  var projectDetail = project.concat(' on ', date);
  projectNameEl.appendTo(tableRowEl);
};




var handleFormSubmit = function (event) {
  event.preventDefault();

  var projectNameEl = projectnameEl.val();
  var dateInputEl = dateInputEl.val();

  if (!projectNameEl || !dateInputEl) {
    alert('You need to put in your projects!');
    return;
  }

  printProject(projectNameEl, dateInputEl);

  // resets form
  projectNameEl.val('');
  dateInputEl.val('');
};




















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


     