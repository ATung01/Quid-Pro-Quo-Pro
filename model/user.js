function createUser() {
  let userID = 0
  let userAll = []
  return class {
    constructor(name, email) {
      this.name = name;
      this.email = email;
      this.items = [];
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
    static findByEmail(email) {
      return User.showAll().filter((user) => {
        return user.email === email
      })
    }
    addItem(item){
      this.items.push(item)
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

let u4 = new User ("John", "Africa", 6, "John@gmail.com")
let u5 = new User ("Peter", "California", 8, "Peter@gmail.com")
let u6 = new User ("Paul", "Alaska", 2, "Paul@gmail.com")
