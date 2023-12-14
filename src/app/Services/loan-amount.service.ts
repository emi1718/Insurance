import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { LoanAmount } from '../Shared/loan-amount.Model';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoanAmountService {
  LoanUrl: string = "https://localhost:7297/api/Amounts";
  LoanList: LoanAmount[] = [];
  LoanData: LoanAmount = new LoanAmount();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<LoanAmount[]> {
    return this.http.get<LoanAmount[]>(this.LoanUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.LoanUrl, this.LoanData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.LoanUrl}/${this.LoanData.amountId}`, this.LoanData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.LoanUrl}/${id}`);

  }
}
