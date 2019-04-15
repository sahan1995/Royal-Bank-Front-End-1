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

  constructor(private http:HttpClient) { }

  allBranches(){
    return this.http.get(this.url_1+"/branches");
  }

  saveEmp(empID,emp){

    return this.http.post(this.url_1+"employees/"+empID,emp)
  }

  saveEmpServer2(empID,emp){
    return this.http.post(this.url_2+"employees/"+empID,emp)
}


  allBranchesServer3(){
    return this.http.get(this.url_3+"/branches");
  }


  test(){
    return this.http.get(this.url_2+"deposits");
  }
  handleError(error) {

    // return this.http.get(this.url_2+"/deposits");
    let errorMessage = '';
    if (error.error instanceof ErrorEvent) {
      // client-side error
      errorMessage = `Error: ${error.error.message}`;
    } else {
      // server-side error
      errorMessage = `Error Code: ${error.status}\nMessage: ${error.message}`;
    }
    alert(errorMessage);
    return throwError(errorMessage);
  }
}
