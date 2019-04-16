import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DepositService {
  private url_1 = "http://192.168.1.101:8080/api/v1/";
  private url_2 = "http://192.168.1.101:8082/api/v1/";
  private url_3 = "http://192.168.1.101:8083/api/v1/";
  constructor(private http:HttpClient) { }

  findAccountByID(accno){
   return this.http.get(this.url_1+"/account/"+accno);
  }

  findAccountByIDServer3(accno){
    return this.http.get(this.url_3+"/account/"+accno);
  }


  depositMoney(depositDTO){
    return this.http.post(this.url_2+"/deposits",depositDTO)
  }


  depositMoneyServer1(depositDTO){
    return this.http.post(this.url_1+"/deposits",depositDTO)
  }

}
