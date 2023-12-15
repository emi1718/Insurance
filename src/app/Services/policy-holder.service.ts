import { Injectable } from '@angular/core';
import { PolicyHolder } from '../Shared/policy-holder.model';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PolicyHolderService {

  PolicyHolderUrl: string = "https://localhost:7297/api/PolicyHolders";
  PolicyHolderList: PolicyHolder[] = [];
  PolicyHolderData: PolicyHolder = new PolicyHolder();
  constructor(private http: HttpClient, private route: Router) { }

  getEmail(data: string): Observable<PolicyHolder[]> {

    return this.http.get<PolicyHolder[]>(`https://localhost:7297/api/PolicyHolders/email/${data}`)

  }

  // Show  List
  Get(): Observable<PolicyHolder[]> {
    return this.http.get<PolicyHolder[]>(this.PolicyHolderUrl);
  }

  //Create Admin 
  Create(data:PolicyHolder) {
    return this.http.post(this.PolicyHolderUrl, data);
  }

  // Edit Admin
  Edit(data:PolicyHolder) {

    return this.http.put(`${this.PolicyHolderUrl}/${data.policyHolderID}`, data)
  }

  //Delete Admin
  Delete(id: number) {

    this.http.delete(`${this.PolicyHolderUrl}/${id}`);

  }
}
