function createTransaction() {
  let transactionID = 0
  let transactionAll = []
  return class {
    constructor(date, transactionRating) {
      this.date = date;
      this.transactionRating = transactionRating;
      this.id = ++transactionID;
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

let t1 = new Transaction ("March", 5)
let t2 = new Transaction ("April", 3)
let t3 = new Transaction ("June", 4)
