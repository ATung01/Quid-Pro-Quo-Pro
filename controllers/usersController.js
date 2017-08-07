let currentUser
let itemData = []
let userItems = []

class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  })
    $('div.parallax-container.valign-wrapper').remove()
    $('.section-login').remove()
    $('.collapsible popout').collapsible();

    ItemAdapter.getAll()
    .then(data => { itemData.push(data)
      let userItems = itemData[0].filter((item) => item.user_id === currentUser.id)
      userItems.forEach(function(itemObj){
        $('div.icon-block').append(`<div class="collapsible-header"><span class="new badge red">4</span><i class="material-icons"></i>${itemObj.name}</div><div class="collapsible-body"><span>${itemObj.description}</span></div>`)
        })
      })
    }

  static getUser(userID){
    return UserAdapter.getUser(userID)
  }

  static currentUser(){
    return currentUser
  }

}
