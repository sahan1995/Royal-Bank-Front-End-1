import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {EmpregService} from "../../service/empreg.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {

  constructor(private empS: EmpregService, private route: Router) {
  }

  @ViewChild(' btn') btn: ElementRef;
  private branches: any;
  private msg = "";

  ngOnInit() {
    this.getAllBraches();
    // this.triggerFalseClick();

  }


  registerEmp(empForm) {


    var emp = empForm.value;
    emp["empID"] = emp["nic"];
    console.log(emp);
    this.empS.saveEmp(emp["empID"], emp).subscribe(result => {
      this.msg = " Employee has been Successfully Registered !"
      this.showMsg();
    });


  }

  getAllBraches() {
    this.empS.allBranches().subscribe(result => {
      this.branches = result;
    })
  }

  showMsg() {
    let el: HTMLElement = document.getElementById("btn") as HTMLElement;
    el.click();
  }

  close(){
    this.route.navigate(["/admin"]);
  }

}
