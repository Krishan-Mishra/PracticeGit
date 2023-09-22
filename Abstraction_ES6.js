class Vehicle {
  constructor(name, model) {
    this.name = name;
    this.model = model;
  }

  displayInfo() {
    console.log('name ' + this.name);
    console.log('model ' + this.model);
  }
}

const wagonr = new Vehicle('Swift', 'lxi');
wagonr.displayInfo();
