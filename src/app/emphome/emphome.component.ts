import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {DepositService} from "../../service/deposit.service";

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {

  private fullname;
  private accno;
  private clientName;
  private accType;
  private msg;
  private dateAndTime;
  private amount;
  private depositerName;
  private depositType;
  private bankAccountDTO;
  constructor(private route:Router, private depositS:DepositService) { }

  ngOnInit() {
    if(localStorage.getItem("fname")==null){
      this.route.navigate([""])
    }
    this.fullname = localStorage.getItem("fname")+" "+localStorage.getItem("lname");

    let dateFormat = require('dateformat')
    this.dateAndTime = new Date();
    this.dateAndTime = dateFormat(this.dateAndTime,"dddd, mmmm dS, yyyy, h:MM:ss TT")
    console.log(this.dateAndTime)
  }
  logout(){
    localStorage.clear();
    this.route.navigate([""]);
  }


  findByID(){

    this.depositS.findAccountByID(this.accno).subscribe(result=>{
      this.bankAccountDTO = result;
      this.clientName = result["clientDTO"]["fname"]+" "+result["clientDTO"]["lname"];
      this.accType = result["accountType"];
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

  depositMoney(){
    var depositDTO={
      dateAndTime: this.dateAndTime,
      amount: this.amount,
      depositerName: this.depositerName,
      depositType: "Bank Deposit",
      bankAccountDTO: this.bankAccountDTO,
    }
    console.log(depositDTO);
    this.depositS.depositMoney(depositDTO).subscribe(result=>{
      this.msg = "Money Successfully Deposit to the Acount !  "
      this.showMsg();
    },error2 => {
        this.msg = "Server Error ! "
        this.showMsg();
      })

  }

}
