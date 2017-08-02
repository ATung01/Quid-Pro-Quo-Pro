$(function() {
login();
buy();
sell();
itemInfo();

$('.carousel').carousel();


});

function login() {
  $("#login-button").on("click", function(event) {
      event.preventDefault();
      // $('#login-form').empty();
      // $('#login-form').append("<h5>These are your posts:</h5>")
      //window.location.replace('post.html')
  })
}

function buy() {
  $("#buy-button").on("click", function(event) {
    event.preventDefault();
  })
}

function sell() {
  $("#sell-button").on("click", function(event) {
    event.preventDefault();
}

function itemInfo() {
  $(`#modal${item.id}`).on("click", function(event) {
    event.preventDefault();
}
