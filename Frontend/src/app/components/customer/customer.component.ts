import {Component, OnInit} from '@angular/core';
import {CustomerService} from "../../services/customer.service";
import {Customer} from "../../models/customer.model";

@Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit {

  ListCustomers:any;

  customer: Customer = {
    id: '',
    name: '',
    address: '',
    email: '',
    date: '',
    nic: '',
    contact: '',
  };

  constructor(private customerService: CustomerService) {

  }

  ngOnInit(): void {
    this.customerService.getAll().subscribe((res: any[])=>{
      this.ListCustomers= res;
    })
  }

  saveCustomer(): void {
    const data = {
      id: this.customer.id,
      name: this.customer.name,
      address: this.customer.address,
      email: this.customer.email,
      date: this.customer.date,
      nic: this.customer.nic,
      contact: this.customer.contact,
    };
    this.customerService.create(data)
      .subscribe(
        response => {
          alert("Customer Saved");
        },
        error => {
          alert(error);
        });

  }

  updateCustomer(): void {
    const data = {
      name: this.customer.name,
      address: this.customer.address,
      email: this.customer.email,
      date: this.customer.date,
      nic: this.customer.nic,
      contact: this.customer.contact,
      id: this.customer.id,
    };
    this.customerService.update(data)
      .subscribe(
        response => {
          alert("Customer Updated!!");

        },
        error => {
          alert("Something Wrong???");
        });

  }

  deleteCustomer(): void {
    const data = {
      id: this.customer.id,
      name: this.customer.name,
      address: this.customer.address,
      email: this.customer.email,
      date: this.customer.date,
      nic: this.customer.nic,
      contact: this.customer.contact

    };
    this.customerService.delete(data)
      .subscribe(
        response => {
          console.log(response);
          alert("Customer Deleted!!");
        },
        error => {
          alert("Something Wrong???");
        });

  }

  searchCustomer(): void {
    const data = {
      id: this.customer.id,
      name: this.customer.name,
      address: this.customer.address,
      email: this.customer.email,
      date: this.customer.date,
      nic: this.customer.nic,
      contact: this.customer.contact
    };
    this.customerService.search(data)
      .subscribe(
        response => {
          response.customerID=data.id;
          response.customerName=data.name;
          response.customeraddress=data.address;
          response.customeremail=data.email;
          response.customerDOB=data.date;
          response.customerNIC=data.nic;
          response.customerContact=data.contact;
        },
        error => {
          window.alert("Something Wrong???");
        });

  }

  // getAllCustomer(): void {
  //   const data = {
  //     id: this.customer.id,
  //     name: this.customer.name,
  //     address: this.customer.address,
  //     email: this.customer.email,
  //     date: this.customer.date,
  //     nic: this.customer.nic,
  //     contact: this.customer.contact
  //   };
  //   this.customerService.getAll(data)
  //     .subscribe(
  //       response => {
  //         window.alert("");
  //       },
  //       error => {
  //         window.alert("Something Wrong???");
  //       });
  //
  // }
}
