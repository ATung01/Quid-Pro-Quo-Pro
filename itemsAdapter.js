class ItemAdapter {

  static getAll(){

    return fetch('http://localhost:3000/item')
      .then(resp => resp.json())

  }

  static makeItem(name, desc, pic, user_id){
    let data = new FormData();
    data.append( "name", JSON.stringify(name));
    data.append( "description", JSON.stringify(desc));
    data.append( "picture", JSON.stringify(pic));
    data.append( "user_id", JSON.stringify(user_id));
    let myHeaders = new Headers()
    myHeaders["Content-Type"] = "application/json"

    return fetch(`http://localhost:3000/item`, {method: 'post', headers: myHeaders, body: data}).then(resp => resp.json())

  }


}
