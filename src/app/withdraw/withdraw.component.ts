import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DepositService} from "../../service/deposit.service";
import {WithdrawService} from "../../service/withdraw.service";

@Component({
  selector: 'app-withdraw',
  templateUrl: './withdraw.component.html',
  styleUrls: ['./withdraw.component.css']
})
export class WithdrawComponent implements OnInit {

  private fullname;

  private fullname;
  private accno;
  private clientName;
  private accType;
  private bankAccountDTO;
  private msg;
  private amount;
  private accamount;
  private nic;
  private dateAndTime;
  private widthdrawType;
  private widthdrawerName;
  constructor(private route:Router,private withdrawS:WithdrawService) { }

  ngOnInit() {
    if (localStorage.getItem("fname") == null) {
      this.route.navigate([""])
    }
    this.fullname = localStorage.getItem("fname") + " " + localStorage.getItem("lname");
    let dateFormat = require('dateformat')
    this.dateAndTime = new Date();
    this.dateAndTime = dateFormat(this.dateAndTime,"dddd, mmmm dS, yyyy, h:MM:ss TT")
  }
  logout(){
    localStorage.clear();
    this.route.navigate([""]);
  }

  findByID(){

    this.withdrawS.findAccountByID(this.accno).subscribe(result=>{

      this.bankAccountDTO = result;
      this.clientName = result["clientDTO"]["fname"]+" "+result["clientDTO"]["lname"];
      this.nic = result["clientDTO"]["nic"];
      this.accType = result["accountType"];
      this.accamount=result["amount"];
    },error1 => {
      if(error1["error"]=="Invalid Account Number "){
        this.msg = error1["error"];
        this.showMsg();
        return;
      }
    })

  }
  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

  close(){
    // this.route.navigate(["/admin"]);
  }

  withdrawMoney(){
    var withdrawDTO={
      dateAndTime: this.dateAndTime,
      amount: this.amount,
      widthdrawerName: this.widthdrawerName,
      widthdrawType: "Bank Withdraw",
      bankAccountDTO: this.bankAccountDTO,
    }

    console.log(withdrawDTO)

    if(this.amount>this.accamount){
      this.msg = "Insufficient Money";
      this.showMsg();
      return;
    }
    this.withdrawS.withdrawMoney(withdrawDTO).subscribe(result=>{
      this.msg = "Money Successfully Withdraw from the Acount !  ";
      this.showMsg();
    },error2 => {
        this.msg = "Server Error";
        this.showMsg();
      })

  }
}
