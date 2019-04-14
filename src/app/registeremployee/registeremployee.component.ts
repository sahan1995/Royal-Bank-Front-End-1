import { Component, OnInit } from '@angular/core';
import {EmpregService} from "../../service/empreg.service";

@Component({
  selector: 'app-registeremployee',
  templateUrl: './registeremployee.component.html',
  styleUrls: ['./registeremployee.component.css']
})
export class RegisteremployeeComponent implements OnInit {

  constructor(private empS:EmpregService) { }

  private branches:any;
  ngOnInit() {
    this.getAllBraches();
  }


  registerEmp(empForm){
    var emp = empForm.value;
    emp["empID"] = emp["nic"];
    console.log(emp);
    this.empS.saveEmp(emp["empID"],emp).subscribe();

  }

  getAllBraches(){
    this.empS.allBranches().subscribe(result=>{
      this.branches = result;
    })
  }


}
