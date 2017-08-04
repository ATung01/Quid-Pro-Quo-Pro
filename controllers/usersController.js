let currentUser
let a = []
class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  } )
    $('#login-form').empty();
    $('#login-form').append(`<h5>Your items:</h5><p>Your items</p>`)
    ItemAdapter.getAll()
    .then(data => a.push(data))


  }

  static getUser(userID){
    return UserAdapter.getUser(userID)
  }

  static currentUser(){
    return currentUser
  }

}
