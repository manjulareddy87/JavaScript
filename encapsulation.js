class Employee {
  SetEmpDetails(name, id, PhoneNo) {
    this.name = name;
    this.id = id;
    this.PhoneNo = PhoneNo;
  }

  getEmpname() {
    return this.name;
  }

  getempid() {
    return this.id;
  }
  getEmpPhoneNo() {
    return this.PhoneNo;
  }
}

let Emp = new Employee();
Emp.SetEmpDetails("jack", "1003", "43567890");

console.log(Emp.getEmpPhoneNo());
console.log(Emp.getempid());
console.log(Emp.getEmpname());
