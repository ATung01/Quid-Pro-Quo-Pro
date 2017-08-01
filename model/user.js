function createUser() {
  let userID = 0
  let userAll = []
  return class {
    constructor(name, location, rating, email) {
      this.name = name;
      this.location = location;
      this.rating = rating;
      this.email = email;
      this.id = ++userID;
      userAll.push(this);
    }
    static showAll(){
      return userAll;
    }
    getItem(item){
      item.userID = this.id
    }
    showItems(){
      let allItems = Item.showAll()
      return allItems.filter( (item) => {
        return item.userID === this.id
      })
    }
    getTransaction(transaction){
      transaction.userID = this.id
    }
    showTransactions(){
      let allTransactions = Transaction.showAll()
      return allTransactions.filter( (trans) => {
        return trans.userID === this.id
      })
    }
  }
}

let User = createUser()

let u1 = new User ("Alex", "Florida", 10, "Alex@gmail.com")
let u2 = new User ("Catherine", "Mexico", 10, "Catherine@gmail.com")
let u3 = new User ("Jessica", "Tijuana", 5, "Jessica@gmail.com")
