function createItem() {
  let itemID = 0
  return class {
    constructor(name, description, picture) {
      this.name = name;
      this.description = description;
      this.picture = picture;
      this.id = ++itemID;
      store.items.push(this);
    }
  }
}

let Item = createItem()
