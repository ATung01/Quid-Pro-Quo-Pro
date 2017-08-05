// html string of all items
function itemsHTML(){
  return Item.all.map(function (item){
    return itemHTML(item)
  }).join(' ')
}

// html string of current user's items
// user.findUserByEmail
// append to h5 Your Posts
function userItemsHTML(user){
  let items = user.showItems()
  return items.map(function (item){
    return item.renderPicture() // turns into modal thingy
  })
}


// Object.values(itemData)[0]
function render(html, where){
  $(where).empty()
  $(where).append(html)
}
