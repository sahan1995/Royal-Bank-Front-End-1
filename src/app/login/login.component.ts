import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  private userName;
  private password;
  constructor(private route:Router) { }

  ngOnInit() {
  }




  login(){
    if(this.userName=="admin" && this.password=="admin"){
      this.route.navigate(["/admin"]);
    }else{

    }
  }

}
