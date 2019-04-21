import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {CreateaccountService} from "../../service/createaccount.service";
import {DatePipe} from "@angular/common";

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.css']
})
export class CreateaccountComponent implements OnInit {

  private fullname;
  private branches:any;
  private empDTO:any;
  private branchID;
  private branchDTO;
  private isAtm = false;
  private msg = "";
  myDate = new Date();
  constructor(private route:Router,private createAccS:CreateaccountService) {
  }

  ngOnInit() {
    if(localStorage.getItem("fname")==null){
      this.route.navigate([""])
    }
    this.getEmpDTO();
    this.fullname = localStorage.getItem("fname")+" "+localStorage.getItem("lname");
    this.getAllBranches();
  }

  logout(){
    localStorage.clear();
    this.route.navigate([""]);
  }

  registerEmp(accForm) {
    var accountDTO = {
      clientDTO: {
        clientID: accForm["nic"],
        fname: accForm["fname"],
        mname: accForm["mname"],
        lname: accForm["lname"],
        gender: accForm["gender"],
        dob: accForm["dob"],
        nic: accForm["nic"],
        country: accForm["country"],
        city: accForm["city"],
        address: accForm["address"],
        tel: accForm["tel"],
        email: accForm["email"],
        occupation: accForm["occupation"],
        userName: accForm["userName"],
        password: accForm["password"],
        branchDTO: this.branchDTO,
        employeeDTO: this.empDTO,


      },
      bankAccountDTO: {
        accountNumber: accForm["accountNumber"],
        amount: accForm["amount"],
        createdAt: "today",
        accountType: accForm["accountType"],
        clientDTO: {
          clientID: accForm["nic"],
          fname: accForm["fname"],
          mname: accForm["mname"],
          lname: accForm["lname"],
          gender: accForm["gender"],
          dob: accForm["dob"],
          nic: accForm["nic"],
          country: accForm["country"],
          city: accForm["city"],
          address: accForm["address"],
          tel: accForm["tel"],
          email: accForm["email"],
          occupation: accForm["occupation"],
          userName: accForm["userName"],
          password: accForm["password"],
          branchid: accForm["branchid"],

        },
        employeeDTO: this.empDTO


      }

    }

    this.createAccS.createAccount(accountDTO).subscribe(result=>{
      this.msg = "Bank Account Created Successfully ! "
      this.showMsg();
      if(this.isAtm){
        var atmDTO={
          code:accForm["nic"],
          pin: accForm["pin"],
          bankAccountDTO:{
            accountNumber: accForm["accountNumber"],
            amount: accForm["amount"],
            createdAt: "today",
            accountType: accForm["accountType"],
            employeeDTO: this.empDTO
          }
        }
        this.createAccS.createATMCard(atmDTO).subscribe();
        this.msg = "Bank Account Created Successfully ! "

      }
    });


  }

  getAllBranches(){
    this.createAccS.getBranches().subscribe(result=>{
      this.branches = result;
    });
  }

  getEmpDTO(){
    this.createAccS.getEmpByid(localStorage.getItem("id")).subscribe(result=>{
      this.empDTO = result;
    });
  }

  getBranchDTO(){

    this.createAccS.getBranchByID(this.branchID).subscribe(result=>{
      this.branchDTO = result;
    });
  }

  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

  close(){
    this.route.navigate(["/dashboard"]);
  }

}
