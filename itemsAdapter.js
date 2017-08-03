class ItemAdapter {

  static getAll(){

    fetch('http://localhost:3000/item')
      .then(resp => resp.json())
      .then( y => console.log(y))
  }


}
