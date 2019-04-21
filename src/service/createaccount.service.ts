import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class CreateaccountService {


  private url = "http://192.168.1.101:8085/api/v1/"
  private branches: any;

  constructor(private http: HttpClient) {
  }


  getBranches(){
    return this.http.get(this.url+"/branches");
  }

  getEmpByid(NIC){
    return this.http.get(this.url+"employees/"+NIC);

  }


  createAccount(accountDTO){
    return this.http.post(this.url+"/createaccount",accountDTO)
  }

  getBranchByID(ID) {
    return this.http.get(this.url + "/branches/"+ID);

  }


  createATMCard(atm){
    return this.http.post(this.url+"atmcards",atm);
  }


  public findClient(NIC){
    return this.http.get(this.url+"clients/"+NIC);
  }

  public createAccountOnly(accno,account){
    return this.http.post(this.url+"/accounts/"+accno,account);
  }

}
