function createTransaction() {
  let transactionID = 0
  return class {
    constructor(transaction, transactionRating) {
      this.transaction = transaction;
      this.transactionRating = transactionRating;
      this.id = ++transactionID;
      store.transactions.push(this);
    }
  }
}

let Transaction = createTransaction()

//add in associations
