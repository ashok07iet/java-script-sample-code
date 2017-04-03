function Employee() {
  this.name = '';
  this.dept = 'general';
}
function Manager() {
  this.reports = [];
}
Manager.prototype = new Employee();
Manager.prototype.construct=Manager;

function WorkerBee() {
  this.projects = [];
}
WorkerBee.prototype = new Employee();
WorkerBee.prototype.construct=WorkerBee;

function SalesPerson() {
   this.dept = 'sales';
   this.quota = 100;
}
SalesPerson.prototype = new WorkerBee();
SalesPerson.prototype.construct=SalesPerson;
function Engineer() {
   this.dept = 'engineering';
   this.machine = '';
}
Engineer.prototype =new WorkerBee();
Engineer.prototype.construct =new WorkerBee();
var employee=new Employee();
console.log(employee);

var manager=new Manager();
console.log(manager);

var workBee=new WorkerBee();
console.log(workBee);

var salesPerson=new SalesPerson();
console.log(salesPerson);

var Engineer=new Engineer();
console.log(Engineer);

