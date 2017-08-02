$(function() {

 $('.modal').modal();

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
