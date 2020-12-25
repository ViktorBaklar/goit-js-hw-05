class Storage {
  constructor (items) {
    this.items = items;
  }
  getItems() {
    return this.items;
  }
  
  addItem(item) {
    if (this.items.includes(item)) return;
    this.items.push(item);
    //return this.items;
  }
  removeItem(item) {
    let id;
    if (this.items.includes(item)) {
      id = this.items.indexOf(item);
    }
    this.items.splice(id, 1)
    //return this.items; 
  }
}



const storage = new Storage([
  'Нанитоиды',
  'Пролонгер',
  'Железные жупи',
  'Антигравитатор',
]);

const items = storage.getItems();
console.table(items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор" ]

storage.addItem('Дроид');
console.table(storage.items); // [ "Нанитоиды", "Пролонгер", "Железные жупи", "Антигравитатор", "Дроид" ]

storage.removeItem('Пролонгер');
console.table(storage.items); // [ "Нанитоиды", "Железные жупи", "Антигравитатор", "Дроид" ]
