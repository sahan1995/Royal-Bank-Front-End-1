import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class EmpregService {


  private url_1="http://192.168.1.101:8080/api/v1/";

  constructor(private http:HttpClient) { }

  allBranches(){
    return this.http.get(this.url_1+"/branches");
  }

  saveEmp(empID,emp){
    return this.http.post(this.url_1+"employee/"+empID,emp);
  }

}
