$(function() {
<<<<<<< HEAD
  ItemAdapter.getAll();
  addPost();
  createNewPost();
  login();
  makeOffer();
  $('.modal').modal();
=======
  // ItemAdapter.getAll();
>>>>>>> jess
  $('.slider').slider();
  $('.carousel').carousel();
  $('img').on('click', function(){
    $('.modal').modal();
    $('#modal1').modal('open');
  });
$('.carousel').carousel();

$("form.user").on("submit", function(event) {
    event.preventDefault()
    let username = $('#user-name').val();
    let email = $('#user-email').val();
    debugger;
    // let newUser = new User(username, email)
    // User.findOrCreateUserByEmail(email)
    UserAdapter.getUser();
    window.location.replace('post.html')
})

});

<<<<<<< HEAD
function login() {
  $("#login-button").on("click", function(event) {
      event.preventDefault()
      let username = $('#user-name').val();
      let email = $('#user-email').val();
      let newUser = new User(username, email)
      $('#login-form').empty();
      $('#login-form').append('<h5>Your posts:</h5>')
      // User.findOrCreateUserByEmail(email)
      // window.location.replace('post.html')
  })
}
=======

>>>>>>> jess

function makeOffer() {
  $("#item-offer-button").on("click", function(event) {
    event.preventDefault();
  })
}

function addPost() {
  $("body").on("click", "#add-post-button", function(event) {
    event.preventDefault();
    $('#modal2').modal('open');
  })
}

function createNewPost() {
  $("body").on("click", "#create-post-button", function(event) {
    event.preventDefault();
  })
}

// function itemInfo() {
//   $(`#modal${item.id}`).on("click", function(event) {
//     event.preventDefault();

// }
