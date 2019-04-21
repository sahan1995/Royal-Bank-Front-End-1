import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {catchError, retry} from "rxjs/operators";
import {error} from "selenium-webdriver";
import {throwError} from "rxjs/internal/observable/throwError";

@Injectable({
  providedIn: 'root'
})
export class EmpregService {


  private url_1="http://192.168.1.101:8080/api/v1/";
  private url_2="http://192.168.1.101:8082/api/v1/";
  private url_3="http://192.168.1.101:8083/api/v1/";

  private url = "http://192.168.1.101:8085/api/v1/"
  constructor(private http:HttpClient) { }

  allBranches(){
    return this.http.get(this.url+"/branches");
  }
  saveEmp(empID,emp){

    return this.http.post(this.url+"employees/"+empID,emp)
  }
}
