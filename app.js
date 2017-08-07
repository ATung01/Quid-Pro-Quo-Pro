
$(function() {
  // ItemAdapter.getAll();
  addPost();
  createNewPost();
  makeOffer();
  $('.modal').modal();
  $('.slider').slider();
  $('.carousel').carousel();
  $('img').on('click', function(){
    $('.modal').modal();
    $('#modal1').modal('open');
  });
  $('.carousel').carousel();
  $('.carousel#user-items').remove();
  $("#add-post-button").remove()
  $("form#user-login").on("submit", function(event) {
    event.preventDefault()
    $('.collapsible').collapsible();
    let username = $('#username').val();
    let userEmail = $('#email').val();
    UsersController.signin(userEmail)

  })
});


function makeOffer() {
  $("#item-offer-button").on("click", function(event) {
    event.preventDefault();
  })
}

function addPost() {
  $("body").on("click", "#add-post-button", function(event) {
    event.preventDefault();
    $('#modal2').modal('open');
    let itemName = $('#itemsName').val();
    let itemDescription = $('#itemsDescription').val();
    let itemPicture = $('#itemsPicture').val();
    //add values to spot in index.html
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
