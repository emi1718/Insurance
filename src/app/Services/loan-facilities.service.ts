import { Injectable } from '@angular/core';
import { LoanFacilities } from '../Shared/loan-facilities.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable, catchError } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LoanFacilitiesService {

  LoanUrl: string = "https://localhost:7297/api/LoanFacilities";
  LoanList: LoanFacilities[] = [];
  LoanData: LoanFacilities = new LoanFacilities();
  constructor(private http: HttpClient, private route: Router) { }
  getByEmail(email: string): Observable<LoanFacilities[]> {
    const apiUrl = `https://localhost:7297/api/LoanFacilities/byEmail/${email}`;
  
    return this.http.get<LoanFacilities[]>(apiUrl).pipe(
      catchError(error => {
        console.error('Error fetching data:', error);
        // You can log or handle the error in a way that suits your application
        throw error;
      })
    );
  }
  
  
  Get(): Observable<LoanFacilities[]> {
    const GetApi="https://localhost:7297/api/LoanFacilities/all"
    return this.http.get<LoanFacilities[]>(GetApi);
  }

  //Create Admin 
  Create(LoanData:LoanFacilities) {
    return this.http.post(this.LoanUrl, LoanData);
  }

  // Edit Admin
  Edit(data:LoanFacilities) {

    return this.http.put(`${this.LoanUrl}/${data.loanId}`, data)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.LoanUrl}/${id}`);

  }
}
