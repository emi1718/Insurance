import { Injectable } from '@angular/core';
import { LoanFacilities } from '../Shared/loan-facilities.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanFacilitiesService {

  LoanUrl: string = "https://localhost:7297/api/LoanFacilities";
  LoanList: LoanFacilities[] = [];
  LoanData: LoanFacilities = new LoanFacilities();
  constructor(private http: HttpClient, private route: Router) { }


  // Show Admin List
  Get(): Observable<LoanFacilities[]> {
    return this.http.get<LoanFacilities[]>(this.LoanUrl);
  }

  //Create Admin 
  Create() {
    return this.http.post(this.LoanUrl, this.LoanData);
  }

  // Edit Admin
  Edit() {

    return this.http.put(`${this.LoanUrl}/${this.LoanData.loanId}`, this.LoanData)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.LoanUrl}/${id}`);

  }
}
