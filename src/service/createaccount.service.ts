import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateaccountService {
  private url_1 = "http://192.168.1.101:8080/api/v1/";
  private url_2 = "http://192.168.1.101:8082/api/v1/";
  private url_3 = "http://192.168.1.101:8083/api/v1/";

  private branches: any;

  constructor(private http: HttpClient) {
  }

  getAllBranches() {
    return this.http.get(this.url_1 + "/branches");

  }

  getAllBranchesserver3() {
    return this.http.get(this.url_3 + "/branches");
  }


  getEmpByid(NIC){
    return this.http.get(this.url_1+"/employees/"+NIC);

  }

  getEmpByidserver2(NIC){
    return this.http.get(this.url_2+"/employees/"+NIC);

  }

  createAccount(accountDTO){
    return this.http.post(this.url_1+"/createaccount",accountDTO)
  }
  createAccountserve2(accountDTO){
    return this.http.post(this.url_2+"/createaccount",accountDTO)
  }
  getBranchByID(ID) {
    return this.http.get(this.url_1 + "/branches/"+ID);

  }

  getBranchByIDserver3(ID) {
    return this.http.get(this.url_3 + "/branches/"+ID);
  }


  createATMCard(atm){
    return this.http.post(this.url_1+"atmcards",atm);
  }
  createATMCardserver3(atm){
    return this.http.post(this.url_3+"atmcards",atm);
  }

  public findClient(NIC){
    return this.http.get(this.url_1+"clients/"+NIC);
  }

  public createAccountOnly(accno,account){
    return this.http.post(this.url_3+"/account/"+accno,account);
  }
}
