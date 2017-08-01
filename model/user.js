function createUser() {
  let userID = 0
  return class {
    constructor(name, location, rating, email) {
      this.name = name;
      this.location = location;
      this.rating = rating;
      this.email = email;
      this.id = ++itemID;
      store.users.push(this);
    }
  }
}

let User = createUser()
