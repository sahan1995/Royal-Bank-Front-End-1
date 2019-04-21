import { Component, OnInit } from '@angular/core';
import {WithdrawService} from "../../service/withdraw.service";
import {Router} from "@angular/router";
import {SendmoneyService} from "../../service/sendmoney.service";

@Component({
  selector: 'app-sendmoney',
  templateUrl: './sendmoney.component.html',
  styleUrls: ['./sendmoney.component.css']
})
export class SendmoneyComponent implements OnInit {

  private fullname;
  private accno;
  private receiverAccno
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

  private resclientName;
  private resaccType;
  private resnic;
  constructor(private route:Router,private sendmoneyS:SendmoneyService) { }

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

  findByID(accno){

    this.sendmoneyS.findAccountByID(accno).subscribe(result=>{

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
  findByIDRes(accno){

    this.sendmoneyS.findAccountByID(accno).subscribe(result=>{

      this.resclientName = result["clientDTO"]["fname"]+" "+result["clientDTO"]["lname"];
      this.resnic = result["clientDTO"]["nic"];
      this.resaccType = result["accountType"];

    },error1 => {

      if(error1["error"]=="Invalid Account Number "){
        this.msg = error1["error"];
        this.showMsg();
        return;
      }
    })

  }
  sendMoney(){

    var sendMoneyDTO={
      dateAndTime: this.dateAndTime,
      amount : this.amount,
      depositAccount : this.receiverAccno,
      bankAccountDTO :this.bankAccountDTO,
    }

    this.sendmoneyS.sendMoney(sendMoneyDTO).subscribe(result=>{
      this.msg = "Transaction Successfully ";
      this.showMsg();
    })
  }


  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

  close(){
    // this.route.navigate(["/admin"]);
  }

}
