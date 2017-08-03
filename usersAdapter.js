class UserAdapter{

  static getUser(userID){
     return fetch(`http://localhost:3000/user/${userID}`)
    .then(resp => resp.json())
  }

  static findUser(userEmail){
     return fetch(`http://localhost:3000/user/login/${userEmail}`)
    .then(resp => resp.json())
  }
}
