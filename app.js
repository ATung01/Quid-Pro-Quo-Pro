$(function() {
submitForm();

$('.carousel').carousel();









});

function submitForm() {
  $("#login-button").on("click", function(event) {
      event.preventDefault()
      let username = $('#user-name').val();
      let email = $('#user-email').val();
      let newUser = new User(username, email)
      User.findOrCreateUserByEmail(email)
      window.location.replace('post.html')
  })
}
