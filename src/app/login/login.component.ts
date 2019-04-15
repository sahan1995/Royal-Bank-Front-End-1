import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../service/login.service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName;
  private password;
  private msg = "";
  constructor(private route:Router,private loginS:LoginService) { }

  ngOnInit() {
  }




  login(){
    if(this.userName=="admin" && this.password=="admin"){
      this.route.navigate(["/admin"]);
    }else{

      var loginDTO={
        userName: this.userName,
        password :this.password,
      }

      this.loginS.login(loginDTO).subscribe(result=>{
        localStorage.setItem("fname",result["fname"])
        localStorage.setItem("lname",result["lname"])
        localStorage.setItem("id",result["id"])
        localStorage.setItem("role",result["role"])
        if(result["role"]=="client"){

        }else{
          this.route.navigate(["/dashboard"])
        }

      },error1 => {

        if(error1["error"]=="User Name or Password Invalid !"){
          this.msg=error1["error"];
          this.showMsg();
          return;
        }

        this.loginS.loginserver3(loginDTO).subscribe(result=>{
          localStorage.setItem("fname",result["fname"])
          localStorage.setItem("lname",result["lname"])
          localStorage.setItem("id",result["id"])
          localStorage.setItem("role",result["role"])
          if(result["role"]=="client"){

          }else{
            this.route.navigate(["/dashboard"])
          }
        },error2 => {
          console.log(error2)
          if(error2["error"]["message"]=="User Name or Password Invalid !"){
            this.msg=error2["error"]["message"];
            this.showMsg();
          return
          }else {
            // this.msg="Server Error";
            // this.showMsg();
          }
        })

      })




    }
  }
  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

}
