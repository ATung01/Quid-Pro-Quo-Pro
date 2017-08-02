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
    renderPicture(){
      return `<a class="carousel-item btn modal-trigger" data-target="modal1" href="#modal1"><img src="../photos/${this.picture}"></a>`
    }

  }
}

let Item = createItem()

let i1 = new Item ("TV", "It's a tv.", "10317673.jpg")
let i2 = new Item ("Boombox", "For oldschool cool", "boombox.jpeg")
let i3 = new Item ("Yugioh Cards", "Believe in the heart of the cards.", "maxresdefault.jpg")
let i4 = new Item ("Painting", "It's worth a bit", "painting.webp")
let i5 = new Item ("Nail Gun", "Pew Pew Pew", "nailgun.webp")
let i6 = new Item ("backpack", "A pack for backs", "backpack.jpg")
