let currentUser
class UsersController {

  static signin(userEmail){
    UserAdapter.findUser(userEmail).then(userObj => { let user = new User(userObj.name, userObj.email)
    currentUser = user
  } )
    $('#login-form').empty();
    $('#login-form').append('<h5>Your posts:</h5>')

  }

  static getUser(userID){
    return UserAdapter.getUser(userID)
  }

  static currentUser(){
    return currentUser
  }
}
