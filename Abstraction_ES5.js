function Vehicle(name, model) {
  (this.name = name), (this.model = model);
}

Vehicle.prototype.displayInfo = function () {
  console.log('name= ' + this.name);
  console.log('modelNo= ' + this.model);
};

Vehicle.prototype.display2Info = function () {
  console.log('gear' + 'automatic');
};

Vehicle.prototype.display3Info = function(){
  console.log('gear' + 'automatic');
}

const wagonr = new Vehicle('wagoner', 'lxi');
wagonr.displayInfo();
