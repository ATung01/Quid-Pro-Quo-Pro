$(function() {

 $('.modal').modal();
 addPost();

let slider = $('.carousel')
Item.showAll().forEach( function(item) {
  slider.append(item.renderPicture())

})

if (slider.hasClass('initialized')){
    slider.removeClass('initialized')
}

//just reinit the carousel
slider.carousel();

});

function addPost() {
  $("body").on("click", "#add-post-button", function(event) {
    event.preventDefault();
    $('#modal2').modal('open');
  })
}
