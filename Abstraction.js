function Employee(name, age, baseSlary) {
  this.name = name;
  this.age = age;
  this.baseSlary = baseSlary;
  this.monthlyBonus = 1000;

  this.calculateFinalSalary = function () {
    let finalSalarry = this.baseSalary + this.monthlyBonus;
    console.log("Final Salary is: " + finalSalary);
  };

  this.getEmpDetails = function () {
    console.log("Name: " + this.name + " | Age : " + this.age);
  };
}

let emp1 = new Employee("John", 30, 2000);
emp1.getEmpDetails();
emp1.monthlyBonus = 10000;
emp1.calculateFinalSalary();
