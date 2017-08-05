let currentUser
let itemData = []

class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  })
    $('#login-form').empty();
    $('#login-form').append(`<h5>Your items:</h5>`)

    ItemAdapter.getAll()
    .then(data => { itemData.push(data)
      itemData[0].map(function(itemObj){
        return $('div#user-items').append(`<li>${itemObj.name}</li><li>${itemObj.description}</li><li>${itemObj.picture}</li>`)
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
