$(function() {
<<<<<<< HEAD
  $('.slider').slider();
=======

>>>>>>> 159fed30d81ddc8321a05f542cb6436d40f464da
  $('.carousel').carousel();
  $('img').on('click', function(){
    $('.modal').modal();
    $('#modal1').modal('open');

    login();
    buy();
    sell();
    // itemInfo();
  });

<<<<<<< HEAD
=======

>>>>>>> 159fed30d81ddc8321a05f542cb6436d40f464da
$('.carousel').carousel();

});

function login() {
  $("#login-button").on("click", function(event) {
      event.preventDefault()
      let username = $('#user-name').val();
      let email = $('#user-email').val();
      let newUser = new User(username, email)
      // User.findOrCreateUserByEmail(email)
      window.location.replace('post.html')
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
<<<<<<< HEAD
  })
=======
})
>>>>>>> updates
}

// function itemInfo() {
//   $(`#modal${item.id}`).on("click", function(event) {
//     event.preventDefault();
<<<<<<< HEAD
=======
// })
>>>>>>> updates
// }
