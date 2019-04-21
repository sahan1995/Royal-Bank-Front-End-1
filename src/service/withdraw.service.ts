import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class WithdrawService {

  private url = "http://192.168.1.101:8085/api/v1/";
  constructor(private http:HttpClient) { }

  findAccountByID(accno){
    return this.http.get(this.url+"/accounts/"+accno);
  }


  withdrawMoney(withdrawDTO){
    return this.http.post(this.url+"withdraws",withdrawDTO);
  }

}
