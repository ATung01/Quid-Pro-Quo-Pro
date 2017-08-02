class UserAdapter{

  static getUser(){
    fetch('http://localhost:3000/user').then(resp => resp.json()).then( y => console.log(y))

  }


}
