import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {CreateaccountService} from "../../service/createaccount.service";

@Component({
  selector: 'app-create-bank-account',
  templateUrl: './create-bank-account.component.html',
  styleUrls: ['./create-bank-account.component.css']
})
export class CreateBankAccountComponent implements OnInit {

  private fullname;
  private fname;
  private mname;
  private lname;
  private gender;
  private dob;
  private nic;
  private country;
  private city;
  private address;
  private tel;
  private email;
  private occupation;
  private userNIC;
  private clientDTO;
  private empDTO;
  private dateAndTime;
  private branches;
  private branchID;
  private msg = "";
  constructor(private route: Router,private createAccS:CreateaccountService) {
  }

  ngOnInit() {
    if (localStorage.getItem("fname") == null) {
      this.route.navigate([""])
    }
    this.getEmpDTO();
    this.fullname = localStorage.getItem("fname") + " " + localStorage.getItem("lname");
    let dateFormat = require('dateformat')
    this.dateAndTime = new Date();
    this.dateAndTime = dateFormat(this.dateAndTime,"dddd, mmmm dS, yyyy, h:MM:ss TT");
    this.getAllBranches();
  }

  logout() {
    localStorage.clear();
    this.route.navigate([""]);
  }


  findClient(){
    console.log(this.userNIC)
    //
    this.createAccS.findClient(this.userNIC).subscribe(result=>{
     this.clientDTO  = result;
     console.log(result);
     this.fname = result["fname"];
     this.mname = result["mname"];
     this.lname = result["lname"];
     this.gender = result["gender"];
     this.dob = result["dob"];
     this.nic = result["nic"];
     this.country = result["country"];
     this.city = result["city"];
     this.address = result["address"];
     this.tel = result["tel"];
     this.email = result["email"];
     this.occupation = result["occupation"];
    })
  }

  createAccount(account){
    var accForm = account.value;
    var accountDTO={
      accountNumber: accForm["accountNumber"],
      amount: accForm["amount"],
      createdAt: this.dateAndTime,
      accountType: accForm["accountType"],
      clientDTO: this.clientDTO,
      employeeDTO: this.empDTO

    }

    this.createAccS.createAccountOnly(accForm["accountNumber"],accountDTO).subscribe(result=>{
      this.msg = "Bank Account Created Successfully ! "
      this.showMsg();
    });
    }

  getEmpDTO(){
    this.createAccS.getEmpByid(localStorage.getItem("id")).subscribe(result=>{
      this.empDTO = result;
    });
  }


  getAllBranches(){
    this.createAccS.getBranches().subscribe(result=>{
      this.branches = result;
    })
  }

  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

  close(){
    this.route.navigate(["/dashboard"]);
  }




  }

