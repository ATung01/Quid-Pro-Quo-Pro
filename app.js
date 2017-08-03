$(function() {
  // ItemAdapter.getAll();
  $('.slider').slider();
  $('.carousel').carousel();
  $('img').on('click', function(){
    $('.modal').modal();
    $('#modal1').modal('open');

    login();
    makeOffer();
    // itemInfo();
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



function makeOffer() {
  $("#item-offer-button").on("click", function(event) {
    event.preventDefault();
  })
}

// function itemInfo() {
//   $(`#modal${item.id}`).on("click", function(event) {
//     event.preventDefault();

// }
