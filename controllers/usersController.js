let currentUser
let itemData = []

class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  })
    $('div.parallax-container.valign-wrapper').remove()
    $('.section-login').remove()

    ItemAdapter.getAll()
    .then(data => { itemData.push(data)
      itemData[0].map(function(itemObj){
        return $('div#user-items').append(`<li>${itemObj.name}</li><li>${itemObj.description}</li><li>${itemObj.picture}</li>`)
        })
      })
    }

// <a class="carousel-item" href="#one!"><img src="../photos/10317673.jpg"></a>

  static getUser(userID){
    return UserAdapter.getUser(userID)
  }

  static currentUser(){
    return currentUser
  }

}
