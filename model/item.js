function createItem() {
  let itemID = 0
  let itemAll = []
  return class {
    constructor(name, description, picture, userID) {
      this.name = name;
      this.description = description;
      this.picture = picture;
      this.userID = userID;
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
    renderPicture(){
      return `<a class="carousel-item btn modal-trigger" data-target="modal${this.id}" href="#modal${this.id}"><img src="../photos/${this.picture}"></a>`
    }

  }
}

let Item = createItem()

let i1 = new Item ("TV", "It's a tv.", "10317673.jpg", 1)
let i2 = new Item ("Boombox", "For oldschool cool", "boombox.jpeg", 2)
let i3 = new Item ("Yugioh Cards", "Believe in the heart of the cards.", "maxresdefault.jpg", 2)
let i4 = new Item ("Painting", "It's worth a bit", "painting.webp", 1)
let i5 = new Item ("Nail Gun", "Pew Pew Pew", "nailgun.webp", 3)
let i6 = new Item ("BB Gun", "Bang", "nailgun.webp", 3)
let i7 = new Item ("backpack", "A pack for backs", "backpack.jpg", 3)
