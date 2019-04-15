import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-emphome',
  templateUrl: './emphome.component.html',
  styleUrls: ['./emphome.component.css']
})
export class EmphomeComponent implements OnInit {

  private fullname;
  constructor(private route:Router) { }

  ngOnInit() {
    if(localStorage.getItem("fname")==null){
      this.route.navigate([""])
    }
    this.fullname = localStorage.getItem("fname")+" "+localStorage.getItem("lname");
  }
  logout(){
    localStorage.clear();
    this.route.navigate([""]);
  }
}
