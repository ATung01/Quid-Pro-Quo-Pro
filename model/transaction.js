function createTransaction() {
  let transactionID = 0
  let transactionAll = []
  return class {
    constructor(date, transactionRating, userID, itemID) {
      this.date = date;
      this.transactionRating = transactionRating;
      this.id = ++transactionID;
      this.userID = userID;
      this.itemID = itemID;
      transactionAll.push(this);
    }
    static showAll(){
      return transactionAll
    }
    static destroy(transID){
      return transactionAll.filter((transaction) => {
        return transaction.id !== transID
      })
    }
  }
}

let Transaction = createTransaction()

let t1 = new Transaction ("March", 5, 1, 1)
let t2 = new Transaction ("April", 3, 2, 2)
let t3 = new Transaction ("June", 4, 1, 3)
let t4 = new Transaction ("July", 2, 3, 4)
let t5 = new Transaction ("October", 10, 5, 5)
let t6 = new Transaction ("January", 6, 4, 6)
