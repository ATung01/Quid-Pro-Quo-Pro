function createItem() {
  let itemID = 0
  let itemAll = []
  return class {
    constructor(name, description, picture) {
      this.name = name;
      this.description = description;
      this.picture = picture;
      this.id = ++itemID;
      itemAll.push(this);
    }
    addItemImage() {
      $('#item-images').append(`<a class="carousel-item" href="#${this.id}!"><img src=${this.picture}></a>`)
    }
    static showAll(){
      return itemAll;
    }
    static destroy(itemID){
      return itemAll.filter((item) => {
        return item.id !== itemID
      })
    }

  }
}

let Item = createItem()

let i1 = new Item ("TV", "It's a tv.", "picture of tv")
let i2 = new Item ("Boombox", "For oldschool cool", "picture of boombox")
let i3 = new Item ("Yugioh Cards", "Believe in the heart of the cards.", "picture of yugioh cards")
