let currentUser
let itemData = []
class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  } )
    $('#login-form').empty();
    $('#login-form').append(`<h5>Your items:</h5>`)
    ItemAdapter.getAll()
    .then(data => itemData.push(data))
    .then(() => showItemsHTML(itemData))
    render(showItemsHTML(itemData), '#user-items')
  }


  static getUser(userID){
    return UserAdapter.getUser(userID)
  }

  static currentUser(){
    return currentUser
  }

}
