class Customer {
  SetCustomerDetails(name, id, phoneNo, houseNo) {
    this.name = name;
    this.id = id;
    this.phoneNo = phoneNo;
    this.houseNo = houseNo;
  }
  Getcustomername() {
    return this.name;
  }
  GetCustomerid() {
    return this.id;
  }
  GetCustomerphoneNo() {
    return this.phoneNo;
  }
  GetCustomerhouseNo() {
    return this.houseNo;
  }
}

let Customerdetails = new Customer();
let Customerinfo = new Customer();

Customerdetails.SetCustomerDetails(
  "wicky",
  "1004",
  "098765432",
  "1-34-1000/Tempe AZ"
);

console.log(Customerdetails.Getcustomername());
console.log(Customerdetails.GetCustomerid());
console.log(Customerdetails.GetCustomerphoneNo());
console.log(Customerdetails.GetCustomerhouseNo());
