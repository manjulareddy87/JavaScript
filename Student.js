class Student {
  SetStudentinfo(name, id, PhoneNo, Address) {
    this.name = name;
    this.id = id;
    this.PhoneNo = PhoneNo;
    this.Address = Address;
  }

  GetStudentname() {
    return this.name;
  }

  GetStudentid() {
    return this.id;
  }

  GetStudentPhoneNo() {
    return this.PhoneNo;
  }

  GetStudentAddress() {
    return this.Address;
  }
}
let Studentinfo = new Student();
Studentinfo.SetStudentinfo(
  "Rama",
  "1",
  "10101010101",
  "213 S queen Rd Gilbert AZ"
);

console.log(Studentinfo.GetStudentname());
console.log(Studentinfo.GetStudentid());
console.log(Studentinfo.GetStudentPhoneNo());
console.log(Studentinfo.GetStudentAddress());
