import { Injectable } from '@angular/core';
import { Transaction } from '../Shared/transaction.model';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class TransactionService {

 
  TransactionUrl: string = "https://localhost:7297/api/Transactions";
  TransactionList: Transaction[] = [];
  TransactionData: Transaction = new Transaction();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<Transaction[]> {
    return this.http.get<Transaction[]>(this.TransactionUrl);
  }

  //Create Admin 
  Create(mydata:Transaction) {
    return this.http.post(this.TransactionUrl, mydata);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.TransactionUrl}/${this.TransactionData.transactionID}`, this.TransactionData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.TransactionUrl}/${id}`);

  }
}
