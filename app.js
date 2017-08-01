$(function() {
submitForm();

$('.carousel').carousel();









});

function submitForm() {
  $("#login-button").on("click", function(event) {
      event.preventDefault()
      $('#login-form').empty();
      $('#login-form').append("<h5>These are your posts:</h5>")
  })
}
